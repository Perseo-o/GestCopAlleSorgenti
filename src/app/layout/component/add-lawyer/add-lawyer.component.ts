
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LawyerDTO } from '../../../models/lawyer.model';
import { LawyerService } from '../../../services/lawyer.service';

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
    private formBuilder: FormBuilder
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

  add(): void {
    const lawyerData: LawyerDTO = this.schedaAvv.value;
    this.lawyerService.create(lawyerData).subscribe(
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
