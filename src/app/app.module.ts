import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/component/home/home.component';
import { CardComponent } from './layout/component/card/card.component';
import { AngularMaterialModule } from './utils/metrial-module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { UserDetailComponent } from './layout/component/user-detail/user-detail.component';
import { AddUserComponent } from './layout/component/add-components/add-user/add-user.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddLawyerComponent } from './layout/component/add-components/add-lawyer/add-lawyer.component';
import { AddGeneralComponent } from './layout/component/add-general/add-general.component';
import { UpdateUserComponent } from './layout/component/update-user/update-user.component';
import { AddDoctorComponent } from './layout/component/add-components/add-doctor/add-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavBarComponent,
    UserDetailComponent,
    AddUserComponent,
    AddLawyerComponent,
    AddDoctorComponent,
    AddGeneralComponent,
    UpdateUserComponent,
    AddDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatInputModule, 
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
