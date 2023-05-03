import { Component } from '@angular/core';
import { PersonalService } from 'src/app/servicios/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  constructor(private servicio: PersonalService){

  }
dataPersonal: any={};
ngOInit(){
  this.servicio.getPersonal().subscribe( personal => {
    this.dataPersonal=personal;
  })
}

}
