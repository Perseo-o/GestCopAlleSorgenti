import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from '../../../../models/user.model';
import { LawyerService } from '../../../../services/lawyer.service';
import { LawyerDTO } from '../../../../models/lawyer.model';
import { DoctorService } from '../../../../services/doctor.service';
import { DoctorDTO } from '../../../../models/doctor.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { FormDataService } from '../../../../services/form-data.service';
import { ImageService } from '../../../../services/image.service';
import { ImageDTO } from '../../../../models/image.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit { 
  scheda!: FormGroup;

  photo!:File;

  file:any=null;

  lawyers: LawyerDTO[] = [];
  lawyersToAdd: LawyerDTO[] = [];
  selectedLawyer!: LawyerDTO;

  doctors: DoctorDTO[] = [];
  doctorsToAdd: DoctorDTO[] = [];
  selectedDoctor!: DoctorDTO;

  formattedBirthDate: string = "";
  formattedDateIngIta: string = "";
  formattedDateIngStrut: string = "";

  constructor(
    private formDataService: FormDataService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private lawyerService: LawyerService,
    private doctorService: DoctorService,
    public dialog: MatDialog,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllLawyers();
    this.getAllDoctor();
    this.formDataService.resetForm$.subscribe(() => {
      this.resetForm();
    });
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
      idHeadFamily: [''],
      idVestanet: [''],
      idCui: [''],
      surname: [''],
      name: [''],
      birthDate: [''],
      sex: [''],
      nationState: [''],
      codFiscal: [''],
      site: [''],
      dateIngIta: [''],
      dateIngStrut: [''],
      formC3: [''],
      expiryPermit: [''],
      languages: [''],
      schooling: [''],
      legalSituation: [''],
      active: true,
      note: [''],
      lawyerDTOList: this.lawyersToAdd,
      doctorDTOList: this.doctorsToAdd
    });
  }

  resetForm(): void {
    this.scheda.reset(); // Resettare il form
    this.lawyersToAdd = []; // Resettare la lista di avvocati aggiunti
    this.doctorsToAdd = []; // Resettare la lista di dottori aggiunti
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

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    const userData: UserDTO = this.scheda.value;
    userData.doctorDTOList = this.doctorsToAdd;
    userData.lawyerDTOList = this.lawyersToAdd;
    userData.active = true;
    
    dialogConfig.data = {
      message: "L'utente sta per venire creato: ",
      root: 'addUser',
      newUser:userData,
      action: 'CREA',
      backGraund: 'good'
    }; 

    this.imageService.create(this.photo).subscribe({
      next: (response) => {
        // Gestire la risposta dell'API qui, se necessario
        console.log('Risposta dal server:', response);
      },
      error: (error) => {
        // Gestire gli eventuali errori qui
        console.error('Errore durante il caricamento dell\'immagine:', error);
      }
    });

    this.imageService.readLast().subscribe(
      (imageDTO: ImageDTO) => {
        userData.imageDTO = imageDTO;
      },
      (error) => {
        console.error('Errore durante il recupero dell\'immagine', error);
      }
    );

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

  }

  onFileSelected(event: any) {
     this.file = event.target.files[0];
    if (this.file) {
      this.photo=this.file;
    }
  }


}
