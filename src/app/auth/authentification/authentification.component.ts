import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servic/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {


  // nom: string="" ;
  // prenom: string ="";
  // role: string ="";
  // email: string ="";
  // password: string ="";
  // route: any;
  

  fomdata = {
    email : '',
    password : '',
  }
 

  constructor(private router:Router, private authservice : AuthService){}


  ngOnInit() {
    // this.connexion();
  }



  connexion() : void{
    console.log("data", this.fomdata)
   const datainput = {
    email: this.fomdata.email,
    password :this.fomdata.password,
   }
   this.authservice.login(datainput).subscribe((response : any)=>{
    console.log("voir info", response)
    this.router.navigate(['/Acceuil'])
   })
   
}
}
