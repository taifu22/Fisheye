//Mettre le code JavaScript lié à la page photographer.html 



class AppPagePhotographer {
    constructor() {
        this.apiMedia = new MediaApi('/data/photographers.json');
        this.apiPhoto2 = new PhotographerApi('/data/photographers.json');
    }

    async getApi(){

       const media = await this.apiMedia.getMedias()
       const photo = await this.apiPhoto2.getPhotographers()
       
       const location = photographerFactory(photo)
       const locationPhoto = location.getPagePhotographe()
    }

}

const app2 = new AppPagePhotographer();
app2.getApi();

