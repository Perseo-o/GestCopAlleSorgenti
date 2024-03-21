import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';
import { LawyerService } from '../../../../services/lawyer.service';
import { LawyerDTO } from '../../../../models/lawyer.model';
import { DoctorService } from '../../../../services/doctor.service';
import { DoctorDTO } from '../../../../models/doctor.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit { 
  scheda!: FormGroup;
  lawyers: LawyerDTO[] = [];
  lawyersToAdd: LawyerDTO[] = [];
  doctors: DoctorDTO[] = [];
  doctorsToAdd: DoctorDTO[] = [];
  selectedLawyer!: LawyerDTO;
  selectedDoctor!: DoctorDTO;

  formattedBirthDate: string = "";
  formattedDateIngIta: string = "";
  formattedDateIngStrut: string = "";

  constructor(
    private userService: UserService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private lawyerService: LawyerService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllLawyers();
    this.getAllDoctor();
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

  getAllDoctor(): void {
    this.doctorService.getAll().subscribe({
      next: (res: DoctorDTO[]) => {
        if (res) {
          this.doctors = res;
        }
      },
      error: (error: any) => {
        console.error('Error fetching lawyer:', error);
      }
    });
  }

formatDates(): void {
    if (this.scheda.value.birthDate) {
      this.formattedBirthDate = this.datePipe.transform(this.scheda.value.birthDate, 'dd/MM/yyyy') || '';
    }
    if (this.scheda.value.ingIta) {
      this.formattedDateIngIta = this.datePipe.transform(this.scheda.value.ingIta, 'dd/MM/yyyy') || '';
    }
    if (this.scheda.value.ingStrut) {
      this.formattedDateIngStrut = this.datePipe.transform(this.scheda.value.ingStrut, 'dd/MM/yyyy') || '';
    }
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
      doctorDTOList: this.doctorsToAdd
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

  addDoctor(exStru: DoctorDTO) {
    if(exStru){
      this.doctorsToAdd.push(exStru);
    }
  }

  removeDoctor(exStr: DoctorDTO) {
    this.doctorsToAdd = this.doctorsToAdd.filter((x)=> x.id!=exStr.id);
  }



  add(): void {
    const userData: UserDTO = this.scheda.value;
    userData.doctorDTOList = this.doctorsToAdd;
    userData.lawyerDTOList = this.lawyersToAdd;
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
