
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LawyerDTO } from '../../../../models/lawyer.model';
import { LawyerService } from '../../../../services/lawyer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-add-lawyer',
  templateUrl: './add-lawyer.component.html',
  styleUrls: ['./add-lawyer.component.scss']
})
export class AddLawyerComponent {


  schedaAvv!: FormGroup;

  constructor(
    private lawyerService: LawyerService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.schedaAvv = this.formBuilder.group({
      name: [''],
      contDetails: ['']
    });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    const lawyerData: LawyerDTO = this.schedaAvv.value;
    
    dialogConfig.data = {
      message: "L'avvocato sta per venire creato: ",
      root: 'addLawyer',
      newUser:lawyerData,
      action: 'CREA',
      backGraund: 'good'
    }; 
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

  }

}
