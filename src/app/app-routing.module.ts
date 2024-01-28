import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageProposComponent } from './page-propos/page-propos.component';
import { PageRegimeComponent } from './page-regime/page-regime.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { AuthentificationComponent } from './auth/authentification/authentification.component';
import { AcceuilAdminComponent } from './admin/acceuil-admin/acceuil-admin.component';
import { GestionRegimeComponent } from './admin/gestion-regime/gestion-regime.component';
import { GestionUserComponent } from './admin/gestion-user/gestion-user.component';
import { GestionVideoComponent } from './admin/gestion-video/gestion-video.component';
import { HearderFooterComponent } from './hearder-footer/hearder-footer.component';
import { FooterComponent } from './footer/footer.component';
import { CategorieComponent } from './Admin-general/categorie/categorie.component';
import { GestionCoachsComponent } from './Admin-general/gestion-coachs/gestion-coachs.component';
import { GestionCommantaireComponent } from './Admin-general/gestion-commantaire/gestion-commantaire.component';

const routes: Routes = [
  // utilisateur
  { path: 'Acceuil', component:PageAcceuilComponent },
  { path: 'contact', component:PageContactComponent},
  { path: 'propos', component:PageProposComponent },
  { path: 'Regime', component:PageRegimeComponent },
  { path: 'Service', component:PageServiceComponent },
  { path: 'Auth', component:AuthentificationComponent},
  // Admin
  { path: 'Acceuil-admin', component:AcceuilAdminComponent },
  { path: 'gestion-regime', component:GestionRegimeComponent},
  { path: 'gestion-user', component:GestionUserComponent },
  { path: 'gestion-video', component:GestionVideoComponent },
  { path: 'herader-footer', component:HearderFooterComponent },
  { path: 'footer', component:FooterComponent },
  { path: 'categorie', component:CategorieComponent },
  { path: 'coach', component:GestionCoachsComponent },
  { path: 'page-acceuil', component:PageAcceuilComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
