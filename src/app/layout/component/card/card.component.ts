import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../../../models/user.model';

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


  constructor(private router: Router) {
  }

  goToDetail() {
    this.router.navigate(['GetCopAlleSorgenti/user-detail', this.user.id]);
  }

}
