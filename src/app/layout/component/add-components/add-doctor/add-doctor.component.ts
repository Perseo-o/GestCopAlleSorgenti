
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from '../../../../services/doctor.service';
import { DoctorDTO } from '../../../../models/doctor.model';

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
      private formBuilder: FormBuilder
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
  
    add(): void {
      const doctorData: DoctorDTO = this.schedaDoc.value;
      this.doctorService.create(doctorData).subscribe(
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
  