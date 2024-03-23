
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from '../../../../services/doctor.service';
import { DoctorDTO } from '../../../../models/doctor.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {

    schedaDoc!: FormGroup;
  
    constructor(
      private doctorService: DoctorService,
      private datePipe: DatePipe,
      private formBuilder: FormBuilder,
      public dialog: MatDialog
    ) {}
  
    ngOnInit(): void {
      this.initForm();
    }
  
    initForm(): void {
      this.schedaDoc = this.formBuilder.group({
        name: [''],
        contDetails: ['']
      });
    }

    
    openDialog(): void {
      const dialogConfig = new MatDialogConfig();
  
      const doctorData: DoctorDTO = this.schedaDoc.value;
      
      dialogConfig.data = {
        message: "L'avvocato sta per venire creato: ",
        root: 'addLawyer',
        newUser:doctorData,
        action: 'CREA',
        backGraund: 'good'
      }; 
      const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
  
    }
  
  }
  