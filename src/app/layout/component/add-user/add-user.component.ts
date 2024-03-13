import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site, UserDTO } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit { 
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
 
  }

  add(): void {
    /*this.userService.create(
      {
        id: 1,
        site: Site.COP_SORG_IGL,
        name: '',
        surname:'',
        nationState:'',
        nationality:'',
        birthDate:'',
        codFiscal:'',
        dateIngIta:'',
        dateIngStrut:'',
        legalSituation:'',
        idVestanet:'',
        lawyers:LowyerDTO[],
        externalStructures: ExternalStructureDTO[]
      }).subscribe()*/
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

}
