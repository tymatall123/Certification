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
  duree:any;
  sous_categorie_id:any;

  
     
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

ajouterVideo(): void {
  if (!this.selectedVideoFile) {
    console.error("Veuillez sélectionner un fichier vidéo.");
    return;
  }

  this.videoService.uploadVideo(this.selectedVideoFile).subscribe(
    (uploadData: any) => {
      // Utilisez l'ID de la vidéo uploadée dans votre ajout de vidéo.
      const videoId = uploadData.videoId;

      const videoToAdd = {
        titre: this.fomdata.titre,
        duree: this.fomdata.duree,
        sous_categorie_id: this.fomdata.sous_categorie_id,
        path_video: this.fomdata.path_video,
        updated_at: this.fomdata.updated_at,
        created_at: this.fomdata.created_at,
      };
        console.log(videoToAdd)
      this.videoService.addvideo(videoToAdd).subscribe(
        (data) => {
          console.log("Ajout réussi", data);
          window.location.reload();
        },
        (error) => {
          console.error("Erreur lors de l'ajout:", error);
        }
      );
    },
    (uploadError) => {
      console.error("Erreur lors de l'upload de la vidéo:", uploadError);
    }
  );
}
sendVideo(){
  let formData=new FormData();
  formData.set('titre',this.titre);
  formData.set('duree',this.duree);
  formData.set('sous_categorie_id',this.sous_categorie_id);
  formData.set('path_video',this.path_video);
  this.videoService.addvideo(formData).subscribe(
    (data: any) => {
      console.log("Ajout réussi", data);
      // window.location.reload();
    },
    (error) => {
      console.error("Erreur lors de l'ajout:", error);
    }
  );
}


// Méthode pour uploader une vidéo
selectedVideoFile: File | null = null;

onFileSelected(event: any): void {
  const file = event.target.files[0];
  this.selectedVideoFile = file;
  this.path_video=file;
}


// méthode pour modifier une vidéo

// modifierVideo(videoId: string): void {
//   const videoToUpdate = {
//     titre: this.fomdata.titre,
//     duree: this.fomdata.duree,
//     sous_categorie_id: this.fomdata.sous_categorie_id,
//     path_video: this.fomdata.path_video,
//     updated_at: this.fomdata.updated_at,
//     created_at: this.fomdata.created_at,
//   };

//   this.videoService.updateVideo(videoId, videoToUpdate).subscribe(
//     (data: any) => {
//       console.log("Modification réussie", data);
//       window.location.reload();
//     },
//     (error) => {
//       console.error("Erreur lors de la modification:", error);
//     }
//   );
// }




}

