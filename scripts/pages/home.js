

//class qui gére l'affichage de la page d'accueil grace au fichier photographer.js dans le dossier factories
class AppPageHome {
  constructor() {
    this.photographersSection = document.querySelector(".photographer_section");
    this.apiPhoto = new PhotographerApi("data/photographers.json");
  }

  async displayData() {
    const photographers = await this.apiPhoto.getPhotographers();

    photographers.photographers.map((photographer) => {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      this.photographersSection.appendChild(userCardDOM);
    });
  }
}

const app = new AppPageHome();
app.displayData();
