import { Component } from '@angular/core';

@Component({
  selector: 'app-scripte',
  templateUrl: './scripte.component.html',
  styleUrls: ['./scripte.component.css']
})
export class ScripteComponent {
  nom: string="" ;
  prenom: string ="";
  role: string ="";
  email: string ="";
  password: string ="";
  authService: any;
  route: any;


  
  ngOnInit() {

  }
  
  
  
  inscription(){
  if (this.nom=='' || this.prenom=='' || this.nom=='' || this.email=='' || this.password=='' )  {
    this.showMessage("error", "Oops","Veuillez renseigner tous les champs");
   
  }
  else {
  const   user={
    prenon:this.prenom,
    nom:this.nom,
    email:this.email,
    password:this.password,

    
  }
  this.authService.register(user).subscribe(
    (response:any) => {
     
      console.log(response)
      this.showMessage('success','Felicitation','Bienvenu dans Fit-Together')
      this.route.navigate(['/authentification'])
    },
    (error:any) => {
      // Gérez les erreurs d'inscription.
      console.error('Erreur d\'inscription :', error);
    }
  )}
}
  showMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

connexion(){
  if(this.email=='' || this.password==''){
    this.showMessage("error", "Oops","Veuillez renseigner tous les champs");

  } else{
    const credentials={
      email:this.email,
      password:this.password
    }
    this.authService.login(credentials).subscribe(
      (response:any) => {
        // Stocker le service dans le token ou dans le local storage.
        console.log(response)
        console.log(response.data.role)
        localStorage.setItem('userOnline', response.token)
        localStorage.setItem('userInfo', response.data)
        if(response.token){
          
          if(response.data.role=='  user'){
            this.route.navigate(['/Acceuil'])
            
          }else if(response.data.role=='coach'){
            this.route.navigate(['/acceuil-dasboard'])

          }
          else{
            this.showMessage('error','Oops', 'Ce compte n/existe pas veuiller vous inscrire ')
          }
          }
      },
      (error:any) => {
        console.error('Erreur de connexion :', error);
      }
    );
  }
}



  

}
