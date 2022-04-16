class HeaderPagePhotographe {
    constructor(data, array, url_slice){
        this.data = data.photographers
        this.array = array
        this.url_slice = url_slice
        this.headerPhotographe = document.querySelector('.photographer-header')
    }

    createHeader(){

          const picturePhotographe = `assets/photographers/${this.array[0].portrait}`;
          const articlePhotographe = document.querySelector(".photographer-header");
          articlePhotographe.innerHTML = `<div>
          <h1 class="h1-page-photographer">${this.array[0].name}</h1>
           <p class="p-country-city">${this.array[0].city} ${this.array[0].country}</p>
          <p>${this.array[0].tagline}</p>
          </div>
          <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
          <img src="${picturePhotographe}" alt="${this.array[0].name}">`;

          //Affichage du nom dans la modale de contacte
          const h2Contact = document.querySelector(".h2-modal-contact");
          h2Contact.innerHTML = `Contactez-moi<br>${this.array[0].name}`;
    }
}  