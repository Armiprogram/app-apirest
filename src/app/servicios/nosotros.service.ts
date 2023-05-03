import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private http: HttpClient) { }
  private API_NOSOTROS="http://localhost:3000/administrativo"

  getNosotros(): Observable <any>{
    return this.http.get(this.API_NOSOTROS)
  }

postNosotros(user:any): Observable<any>{
  return this.http.post(this.API_NOSOTROS,user )
}

putNosotros(user: any, id:number): Observable<any>{
  this.API_NOSOTROS=`${this.API_NOSOTROS}/${id}`
  return this.http.put(this.API_NOSOTROS,user)
}

deleteNosotros(id:number): Observable<any>{
  this.API_NOSOTROS=`${this.API_NOSOTROS}/${id}`
  return this.http.delete(this.API_NOSOTROS)
}

}
