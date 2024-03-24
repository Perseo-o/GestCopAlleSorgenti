import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserDTO } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { LawyerDTO } from '../../../models/lawyer.model';
import { LawyerService } from '../../../services/lawyer.service';
import { DoctorDTO } from '../../../models/doctor.model';
import { DoctorService } from '../../../services/doctor.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ImageService } from '../../../services/image.service';
import { ImageDTO } from '../../../models/image.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Input() userId!: number;
  photo!:File;

  file:any=null;

  scheda!: FormGroup;
  lawyers: LawyerDTO[] = [];
  lawyersToAdd: LawyerDTO[] = [];
  doctors: DoctorDTO[] = [];
  doctorsToAdd: DoctorDTO[] = [];
  selectedLawyer!: LawyerDTO;
  selectedDoctor!: DoctorDTO;
  user!: UserDTO;

  constructor(
    protected router: Router,
    private userService: UserService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private lawyerService: LawyerService,
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllLawyers();
    this.getAllDoctor();

    this.userId = this.route.snapshot.params['n'];
    this.read(this.userId);
  }

  read(userId: number): void {
    this.userService.read(userId).subscribe({
      next: (res: UserDTO) => {
        this.user = res;
        if (res) {
          this.scheda.patchValue(res);
          this.lawyersToAdd = res.lawyerDTOList;
          this.doctorsToAdd = res.doctorDTOList;
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

  getAllDoctor(): void {
    this.doctorService.getAll().subscribe({
      next: (res: DoctorDTO[]) => {
        this.doctors = res || [];
      },
      error: (error: any) => {
        console.error('Error fetching external structures:', error);
      }
    });
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
      note: [''],
      active:true,
      imageDTO:[''],
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

  addDoctor(doctor: DoctorDTO) {
    if(doctor){
      this.doctorsToAdd.push(doctor);
    }
  }

  removeDoctor(doctor: DoctorDTO) {
    this.doctorsToAdd = this.doctorsToAdd.filter((x)=> x.id!=doctor.id);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    const userData: UserDTO = this.scheda.value;
    userData.id = this.userId;
    userData.doctorDTOList = this.doctorsToAdd;
    userData.lawyerDTOList = this.lawyersToAdd;

    dialogConfig.data = {
      message: "L'utente sta per venire aggiornato: ",
      root: 'updateUser',
      newUser:userData,
      action: 'AGGIORNA',
      backGraund: 'good'
    }; 
    
    if(this.photo){
      
    this.imageService.create(this.photo).subscribe({
      next: (res: UserDTO[]) => {
        if (res) {
          dialogConfig.data.newUser.imageDTO=res;
        }
      },
      error: (error) => {
        console.log('Errare è umano:', error);
      }
    });
    }
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

  }

  
  onFileSelected(event: any) {
    this.file = event.target.files[0];
   if (this.file) {
     this.photo=this.file;
   }
 }

}
