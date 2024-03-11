import { Component, Input, OnInit } from '@angular/core'; // Importa OnInit
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserDTO } from '../../../models/user.model';
import { DatePipe } from '@angular/common';
// @ts-ignore
import * as html2pdf from 'html2pdf.js'; // Assicurati che html2pdf.js sia stato installato correttamente e che il percorso sia corretto

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit { 
  @Input()
  userId!: number;

  user!: UserDTO;

  formattedBirthDate: string = "";
  formattedDateIngIta: string = "";
  formattedDateIngStrut: string = "";


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    // Ottieni l'ID utente dai parametri della route
    this.userId = this.route.snapshot.params['n'];

    // Ottieni i dettagli dell'utente utilizzando l'ID utente
    this.read(this.userId);
  }

  read(userId: number): void {
    this.userService.read(userId).subscribe({
      next: (res: UserDTO) => {
          this.user = res;
          this.formatDates();
      }
    });
  }

  formatDates() {
    if (this.user.birthDate) {
      this.formattedBirthDate = this.datePipe.transform(this.user.birthDate, 'dd/MM/yyyy') || '';
    }
    if (this.user.dateIngIta) {
      this.formattedDateIngIta = this.datePipe.transform(this.user.dateIngIta, 'dd/MM/yyyy') || '';
    }
    if (this.user.dateIngStrut) {
      this.formattedDateIngStrut = this.datePipe.transform(this.user.dateIngStrut, 'dd/MM/yyyy') || '';
    }
  }

  convert(){
    const options ={
      filename: this.user.name+' '+this.user.surname+'.pdf',
      image: {type: 'jpeg'},
      html2canvas:{},
      jsPDF:{orientation: 'portrait',
              format: 'a4'}
    };
    const content: Element | null = document.getElementById('scheda'); // Modifica il tipo di content
  
    if (content) { // Verifica se content non è null
      html2pdf()
        .from(content)
        .set(options)
        .save();
    } else {
      console.error('Elemento con ID "scheda" non trovato'); // Gestisci il caso in cui l'elemento non è stato trovato
    }
  }
}
