import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';
import { LawyerService } from '../../../../services/lawyer.service';
import { LawyerDTO } from '../../../../models/lawyer.model';
import { ExternalStructureService } from '../../../../services/external-structure.service';
import { ExternalStructureDTO } from '../../../../models/externalStructure.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit { 
  scheda!: FormGroup;
  lawyers: LawyerDTO[] = [];
  lawyersToAdd: LawyerDTO[] = [];
  extStructures: ExternalStructureDTO[] = [];
  extStructuresToAdd: ExternalStructureDTO[] = [];
  selectedLawyer!: LawyerDTO;
  selectedExternalStructure!: ExternalStructureDTO;

  constructor(
    private userService: UserService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private lawyerService: LawyerService,
    private exteStructureService: ExternalStructureService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllLawyers();
    this.getAllExtStructure();
  }


  getAllLawyers(): void {
    this.lawyerService.getAll().subscribe({
      next: (res: LawyerDTO[]) => {
        if (res) {
          this.lawyers = res;
        }
      },
      error: (error: any) => {
        console.error('Error fetching lawyer:', error);
      }
    });
  }

  getAllExtStructure(): void {
    this.exteStructureService.getAll().subscribe({
      next: (res: ExternalStructureDTO[]) => {
        if (res) {
          this.extStructures = res;
        }
      },
      error: (error: any) => {
        console.error('Error fetching lawyer:', error);
      }
    });
  }



  initForm(): void {
    this.scheda = this.formBuilder.group({
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



  add(): void {
    const userData: UserDTO = this.scheda.value;
    this.userService.create(userData).subscribe(
      (response) => {
        console.log("Utente creato con successo:", response);
        // Aggiungi qui eventuali operazioni supplementari dopo la creazione dell'utente
      },
      (error) => {
        console.error("Errore durante la creazione dell'utente:", error);
        // Gestisci eventuali errori qui
      }
    );
  }

}
