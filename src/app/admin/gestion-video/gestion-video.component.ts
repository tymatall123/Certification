import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionVideoService } from 'src/app/servic/gestion-video.service';

@Component({
  selector: 'app-gestion-video',
  templateUrl: './gestion-video.component.html',
  styleUrls: ['./gestion-video.component.css']
})
export class GestionVideoComponent implements OnInit {
  
    fomdata =  {
      titre: '',
      path_video :'',
      duree : '',
      sous_categorie_id :'',
      updated_at:'',
      created_at:'',
      // videos: Video[],
    }
  titre: any;
  path_video: any;
  created_at: any;
  updated_at: any;
  videos:any;
  
     
  constructor(private router:Router, private videoService : GestionVideoService){}
  ngOnInit(): void {
    this.listeVideo();
  }
listeVideo(){
  this.videoService.getvideos().subscribe((reponse:any)=>{
    console.log(reponse)
    this.videos=reponse.Videos
    console.log(this.videos)
  })

}
// Méthode pour ajouter une vidéo

ajouterVideo (): void{
  this.ajouterVideo,{
   titre :this.titre,
    path_video:this.path_video,
    updated_at:this.created_at,
    created_at:this.updated_at
  };

  this.videoService.addvideo(this.ajouterVideo).subscribe((datavideo : any) =>{
    console.log("ajout", datavideo);
    window.location.reload();
  }),
  console.error('Erreur lors de l/ajout:', 
  )
  
}

// méthode pour modifier une vidéo
Modifiervideo() : void{
  this.Modifiervideo,{
    titre:this.titre,
    path_video:this.path_video,
  }
}


}

