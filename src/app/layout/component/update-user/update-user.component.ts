import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserDTO } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { LawyerDTO } from '../../../models/lawyer.model';
import { LawyerService } from '../../../services/lawyer.service';
import { ExternalStructureDTO } from '../../../models/externalStructure.model';
import { ExternalStructureService } from '../../../services/external-structure.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Input() userId!: number;

  scheda!: FormGroup;
  lawyers: LawyerDTO[] = [];
  lawyersToAdd: LawyerDTO[] = [];
  extStructures: ExternalStructureDTO[] = [];
  extStructuresToAdd: ExternalStructureDTO[] = [];
  selectedLawyer!: LawyerDTO;
  selectedExternalStructure!: ExternalStructureDTO;
  user!: UserDTO;

  constructor(
    protected router: Router,
    private userService: UserService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private lawyerService: LawyerService,
    private extStructureService: ExternalStructureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllLawyers();
    this.getAllExtStructure();

    this.userId = this.route.snapshot.params['n'];
    this.read(this.userId);
  }

  read(userId: number): void {
    this.userService.read(userId).subscribe({
      next: (res: UserDTO) => {
        this.user = res;
        if (res) {
          this.scheda.patchValue(res);
          this.lawyersToAdd=res.lawyerDTOList;
          this.extStructuresToAdd=res.externalStructureDTOList;
        }
      }
    });
  }
  

  getAllLawyers(): void {
    this.lawyerService.getAll().subscribe({
      next: (res: LawyerDTO[]) => {
        this.lawyers = res || [];
      },
      error: (error: any) => {
        console.error('Error fetching lawyers:', error);
      }
    });
  }

  getAllExtStructure(): void {
    this.extStructureService.getAll().subscribe({
      next: (res: ExternalStructureDTO[]) => {
        this.extStructures = res || [];
      },
      error: (error: any) => {
        console.error('Error fetching external structures:', error);
      }
    });
  }

  initForm(): void {
    this.scheda = this.formBuilder.group({
      idGhost: [''],
      site: [''],
      name: [''],
      surname: [''],
      nationState: [''],
      nationality: [''],
      birthDate: [''],
      codFiscal: [''],
      dateIngIta: [''],
      dateIngStrut: [''],
      idVestanet: [''],
      legalSituation: [''],
      active: true,
      lawyerDTOList: this.lawyersToAdd,
      externalStructureDTOList: this.extStructuresToAdd
    });
  }


  addLawyer(lawyerDTO: LawyerDTO) {
    if(lawyerDTO){
      this.lawyersToAdd.push(lawyerDTO);
    }
  }

  removeLawyer(lawyerDTO: LawyerDTO) {
    this.lawyersToAdd = this.lawyersToAdd.filter((x)=> x.id!=lawyerDTO.id);
  }

  addExternalStructure(exStru: ExternalStructureDTO) {
    if(exStru){
      this.extStructuresToAdd.push(exStru);
    }
  }

  removeExternalStructure(exStr: ExternalStructureDTO) {
    this.extStructuresToAdd = this.extStructuresToAdd.filter((x)=> x.id!=exStr.id);
  }

  update(): void {
    const userData: UserDTO = this.scheda.value;
    userData.id = this.userId;
    userData.externalStructureDTOList = this.extStructuresToAdd;
    userData.lawyerDTOList = this.lawyersToAdd;
    this.userService.update(userData).subscribe(
      (response) => {
        console.log("User updated successfully:", response);
        // Add any additional operations after user update here
      },
      (error) => {
        console.error("Error updating user:", error);
        // Handle errors here
      }
    );
    
    this.router.navigate(['GestCopAlleSorgenti/user-detail', this.user.id]);
  }
}
