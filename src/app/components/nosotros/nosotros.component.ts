import { Component } from '@angular/core';
import { NosotrosService } from 'src/app/servicios/nosotros.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  constructor(private servicio:NosotrosService){

  }
  dataNosotros:any={};
  ngOnInit(){
    this.servicio.getNosotros().subscribe(nosotros => {
      this.dataNosotros=nosotros;
    })
  }

}
