import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionVideoComponent } from './admin/gestion-video/gestion-video.component';
import { GestionRegimeComponent } from './admin/gestion-regime/gestion-regime.component';
import { AcceuilAdminComponent } from './admin/acceuil-admin/acceuil-admin.component';
import { GestionUserComponent } from './admin/gestion-user/gestion-user.component';
import { AuthentificationComponent } from './auth/authentification/authentification.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageProposComponent } from './page-propos/page-propos.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PageRegimeComponent } from './page-regime/page-regime.component';
import { HearderFooterComponent } from './hearder-footer/hearder-footer.component';
import { PageacceuilComponent } from './Admin-general/AcceuilAdminG/pageacceuil.component';
import { CategorieComponent } from './Admin-general/categorie/categorie.component';
import { GestionCoachsComponent } from './Admin-general/gestion-coachs/gestion-coachs.component';
import { GestionCommantaireComponent } from './Admin-general/gestion-commantaire/gestion-commantaire.component';
import { FooterComponent } from './footer/footer.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { ScripteComponent } from './scripte/scripte.component';
import { FormsModule } from '@angular/forms';
import { BodySculptComponent } from './body-sculpt/body-sculpt.component';
import { YogaComponent } from './yoga/yoga.component';





@NgModule({
  declarations: [
    AppComponent,
    AcceuilAdminComponent,
   AuthentificationComponent,
   GestionUserComponent,
    GestionVideoComponent,
    GestionRegimeComponent,
    AcceuilAdminComponent,
    GestionUserComponent,
    AuthentificationComponent,
    PageAcceuilComponent,
    PageProposComponent,
    PageContactComponent,
    PageServiceComponent,
    PageRegimeComponent,
    HearderFooterComponent,
    PageacceuilComponent,
    CategorieComponent,
    GestionCoachsComponent,
    GestionCommantaireComponent,
    FooterComponent,
    DetailVideoComponent,
    AuthentificationComponent,
    ScripteComponent,
    BodySculptComponent,
    YogaComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
