import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalStructureService } from '../../../../services/external-structure.service';
import { ExternalStructureDTO } from '../../../../models/externalStructure.model';

@Component({
  selector: 'app-add-external-structure',
  templateUrl: './add-external-structure.component.html',
  styleUrls: ['./add-external-structure.component.scss']
})
export class AddExternalStructureComponent {

    schedaAvv!: FormGroup;
  
    constructor(
      private externalStructureService: ExternalStructureService,
      private datePipe: DatePipe,
      private formBuilder: FormBuilder
    ) {}
  
    ngOnInit(): void {
      this.initForm();
    }
  
    initForm(): void {
      this.schedaAvv = this.formBuilder.group({
        refNumber: [''],
        residence: ['']
      });
    }
  
    add(): void {
      const exStruttData: ExternalStructureDTO = this.schedaAvv.value;
      this.externalStructureService.create(exStruttData).subscribe(
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
  