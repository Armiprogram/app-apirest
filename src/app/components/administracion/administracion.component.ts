import { Component } from '@angular/core';
import { NosotrosService } from 'src/app/servicios/nosotros.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {

constructor(private servicio:NosotrosService){}
  guardarNosotros(id: string, nom: string,ape:string,email:string, gen:string, auto:string){
const ide:number=parseInt(id)
    const temp={
  "id": ide,
  "first_name":nom,
  "last_name":ape,
  "email":email,
  "gender":gen,
  "car_model":auto
}

this.servicio.postNosotros(temp).subscribe(u=>{})
  }

actualizarNosotros(id: string, nom: string,ape:string,email:string, gen:string, auto:string){
const ide:number=parseInt(id)
    const temp={
  "id": ide,
  "first_name":nom,
  "last_name":ape,
  "email":email,
  "gender":gen,
  "car_model":auto
}
this.servicio.putNosotros(temp, ide).subscribe(u=>{})
 }
 eliminarNosotros(id:string){
  const ide:number=parseInt(id)
  this.servicio.deleteNosotros(ide).subscribe(u=>{})
 }
}
