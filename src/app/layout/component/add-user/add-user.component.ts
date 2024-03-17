import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit { 
  scheda!: FormGroup;
  formattedBirthDate: string = "";
  formattedDateIngIta: string = "";
  formattedDateIngStrut: string = "";

  constructor(
    private userService: UserService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
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
      residencia: [''],
      idVestanet: [''],
      legalSituation: [''] 
    });
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
}
