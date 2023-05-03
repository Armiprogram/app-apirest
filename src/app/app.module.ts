import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/personal/personal.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import {HttpClientModule} from "@angular/common/http";
import { TablaComponent } from './components/tabla/tabla.component';
import { AdministracionComponent } from './components/administracion/administracion.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonalComponent,
    NosotrosComponent,
    TablaComponent,
    AdministracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
