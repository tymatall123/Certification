import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionRegimeService {
  getRegime: any;

  constructor(private http:HttpClient) { 
  }


  // Methode pour ajouter regime
  addRegime(user: any){
    return this.http.post(`https://swagger.imaletbenji.com/api/post`, this.addRegime)
  }

  // methode pour ajouter des regimes avec le token
  addRegim(user: any)
  {
    const Token = localStorage.getItem('access_token');
    return Token?
    this.http.post<any>( `https://swagger.imaletbenji.com/api/post`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer {Token} `})
    }) : of(null);
  }

  // methode pour modifier regime
  // editRegime(id: any, regime: any)
  // {
  //   const Token = localStorage.getItem('access_token');
  //   return Token?
  //   this.http.post<any>( `https://swagger.imaletbenji.com/api/post/{id}`, {
  //     headers: new HttpHeaders({ 'Authorization': `Bearer {Token} `})
  //   }) : of(null);
  // }

  editRegime(id: any, regime: any): Observable<any> {
    
    const token = localStorage.getItem('access_token');

    if (token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

      // Assurez-vous d'envoyer les données que vous souhaitez mettre à jour dans le corps de la requête
      return this.http.post<any>(`https://swagger.imaletbenji.com/api/post/${id}`, regime, { headers });
    } else {
      // Si le token n'est pas disponible, retournez une observable avec null
      return of(null);
    }
  }


}
