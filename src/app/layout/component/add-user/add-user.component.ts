import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { LawyerService } from '../../../services/lawyer.service';
import { LawyerDTO } from '../../../models/lawyer.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit { 
  scheda!: FormGroup;
  lawyers: LawyerDTO[]=[];
  constructor(
    private userService: UserService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private lawyerService: LawyerService,
  ) {}

  ngOnInit(): void {
    this.initForm();

  }


  getAll(): void {
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
      legalSituation: [''],
      active: true
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

}
