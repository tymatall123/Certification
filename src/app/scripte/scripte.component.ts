import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servic/auth.service';
@Component({
  selector: 'app-scripte',
  templateUrl: './scripte.component.html',
  styleUrls: ['./scripte.component.css']
})
export class ScripteComponent {
  nom: string = "";
  prenom: string = "";
  // role: string = "hbj";
  email: string = "";
  password: string = "";
  // authService: any;
  route: any;
  register: any;


  constructor(private router:Router, private authService : AuthService){}

  ngOnInit() {
    this.inscription();
  }



  inscription() {
    if (this.nom == '' || this.prenom == '' || this.nom == '' || this.email == '' || this.password == '') {
      this.showMessage("error", "Oops", "Veuillez renseigner tous les champs");
    }
    else {
      const user = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,

      }

      // console.error(user);
      
      // console.log(user)
      this.authService.register(user).subscribe(
        (data) => {
          console.log("la reponse du service est :",data);
          this.showMessage('success', 'Felicitation', 'Bienvenu dans Fit-Together')
          this.route.navigate(['/authentification'])
        }
      )
    }
  }
  user(user: any) {
    throw new Error('Method not implemented.');
  }
  showMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

}
