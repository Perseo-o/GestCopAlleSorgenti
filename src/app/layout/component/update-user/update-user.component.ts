import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  extStructures: ExternalStructureDTO[] = [];

  user!: UserDTO;

  formattedBirthDate: string = "";
  formattedDateIngIta: string = "";
  formattedDateIngStrut: string = "";

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
        this.formatDates();
        if (this.user) {
          this.scheda.patchValue({
            name: this.user.name,
            surname: this.user.surname,
            nationState: this.user.nationState,
            nationality: this.user.nationality,
            birthDate: this.user.birthDate,
            codFiscal: this.user.codFiscal,
            dateIngIta: this.user.dateIngIta,
            dateIngStrut: this.user.dateIngStrut,
            site: this.user.site,
            idVestanet: this.user.idVestanet,
            legalSituation: this.user.legalSituation,
            lawyers: this.user.lawyers,
            externalStructures: this.user.externalStructures
          });
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
      id: this.userId,
      site: [''],
      name: [''],
      surname: [''],
      nationState: [''],
      nationality: [''],
      birthDate: [''],
      codFiscal: [''],
      dateIngIta: [''],
      dateIngStrut: [''],
      residencia: [''],
      idVestanet: [''],
      legalSituation: [''],
      active: true,
      lawyers: [''],
      externalStructures: ['']
    });
  }

  update(): void {
    const userData: UserDTO = this.scheda.value;
    userData.id = this.userId;
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
  }

  formatDates() {
    if (this.user.birthDate) {
      this.formattedBirthDate = this.datePipe.transform(this.user.birthDate, 'dd/MM/yyyy') || '';
    }
    if (this.user.dateIngIta) {
      this.formattedDateIngIta = this.datePipe.transform(this.user.dateIngIta, 'dd/MM/yyyy') || '';
    }
    if (this.user.dateIngStrut) {
      this.formattedDateIngStrut = this.datePipe.transform(this.user.dateIngStrut, 'dd/MM/yyyy') || '';
    }
  }
}
