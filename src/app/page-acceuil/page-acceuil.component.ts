import { Component } from '@angular/core';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent {



  // pagination
  articlesParPage = 8; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle
  listeEmployes: any;


// / pagination

getArticlesPage(): any[] {
 const indexFin = (this.pageActuelle - 1) * this.articlesParPage + this.articlesParPage;
 return this.listeEmployes.slice(((this.pageActuelle - 1) * this.articlesParPage), indexFin);
}
  // Méthode pour générer la liste des pages
  get pages(): number[] {
   const totalPages = Math.ceil(this. listeEmployes.length / this.articlesParPage);
   return Array(totalPages).fill(0).map((_, index) => index + 1);
 }

 // Méthode pour obtenir le nombre total de pages
 get totalPages(): number {
   return Math.ceil(this. listeEmployes.length / this.articlesParPage);
 }
}
