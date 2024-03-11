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
import { UserDetailComponent } from './layout/component/user-detail/user-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavBarComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
