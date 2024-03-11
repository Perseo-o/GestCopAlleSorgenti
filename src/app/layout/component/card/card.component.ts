import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../../../models/user.model';
import { DatePipe } from '@angular/common';

export interface Star {
  position: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent{

  @Input() user!: UserDTO;
  formattedBirthDate: string = "";

  constructor(private router: Router, private datePipe: DatePipe) {}

  ngOnInit() {
    this.formatDates();
  }

  formatDates() {
    if (this.user.birthDate) {
      this.formattedBirthDate = this.datePipe.transform(this.user.birthDate, 'dd/MM/yyyy') || '';
    }
  }

  goToDetail() {
    this.router.navigate(['GestCopAlleSorgenti/user-detail', this.user.id]);
  }
}
