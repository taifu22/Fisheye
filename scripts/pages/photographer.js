//Class qui gère l'affichage de la page photographer
class AppPagePhotographer {
    constructor() {
        this.apiPhoto = new PhotographerApi('data/photographers.json');
    }

    async getPagePhotographe(){  

    //recuperation des infos du photographe du fichier json
    const photo = await this.apiPhoto.getPhotographers()

    //recuperation de l'id du photographe dans la page photographers
       const url_id = window.location.search;
       const url_slice = url_id.slice(1);   

    //creation du tableau qui stocke les informations du photographe
    let array = [];
        const result = photo.photographers.find((el) => {
            if (el.id == url_slice) {
              return el;
            }
          }); 
          array.push(result);
          
       
    //utilisation du tableau pour stocker les images du photographe lié à l'url-slice
    let arrayImages = [];
    photo.media.map((element) => {
      if (element.photographerId == url_slice && element.image) {
        const images = element.image;
        arrayImages.push(images);
      }
    });

    //utilisation du tableau pour stocker les videos du photographe lié à l'url-slice
    var arrayVideos = [];
    photo.media.map((element) => {
      if (element.photographerId == url_slice && element.video) {
        const videos = element.video;
        arrayVideos.push(videos);
      }
    });

    //utilisation du tableau pour stocker les titles des medias du photographe lié à l'url-slice
    var arrayTitles = [];
    photo.media.map((element) => {
      if (element.photographerId == url_slice && element.title) {
        const title = element.title;
        arrayTitles.push(title);
      }
    });

    //utilisation du tableau pour stocker les likes des medias du photographe lié à l'url-slice
    var arrayLikes = [];
    photo.media.map((element) => {
      if (element.photographerId == url_slice && element.likes) {
        const likes = element.likes;
        arrayLikes.push(likes);
      }
    }); 

    //utilisation du tableau pour stocker les id des medias du photographe lié à l'url-slice
    var arrayIdMedias = [];
    photo.media.map((element) => {
      if (element.photographerId == url_slice && element.id) {
        const id = element.id;
        arrayIdMedias.push(id);
      }
    }); 

    //utilisation du tableau pour stocker les dates des medias du photographe lié à l'url-slice
    var arrayDate = [];
    photo.media.map((element) => {
      if (element.photographerId == url_slice && element.date) {
        const date = element.date;
        arrayDate.push(date);
      }
    }); 

       const showcards = new HeaderPagePhotographe(photo, array, url_slice)
       const showcardsPhotographers = showcards.createHeader()
       const showMedias = new MediaPagePhotographe(arrayImages, arrayVideos, arrayLikes, arrayTitles, arrayIdMedias,arrayDate, array, url_slice)
       const showMediasPhotographe = showMedias.getPhotosMedias()
       
       return {showcardsPhotographers, showMediasPhotographe }
    }
 
}

const app = new AppPagePhotographer();
app.getPagePhotographe(); 
