import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/component/home/home.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { UserDetailComponent } from './layout/component/user-detail/user-detail.component';
import { AddUserComponent } from './layout/component/add-user/add-user.component';

const routes: Routes = [{ path: '', redirectTo: 'GestCopAlleSorgenti/home', pathMatch: 'full' },
{
  path: 'GestCopAlleSorgenti',
  component: NavBarComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'user-detail/:n', component: UserDetailComponent },
    { path: 'add-user', component: AddUserComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
