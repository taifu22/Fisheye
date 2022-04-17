class MediaPagePhotographe {
  constructor(
    arrayImages,
    arrayVideos,
    arrayLikes,
    arrayTitles,
    arrayIdMedias,
    array,
    url_slice
  ) {
    this.arrayImages = arrayImages;
    this.arrayVideos = arrayVideos;
    this.arrayLikes = arrayLikes;
    this.arrayTitles = arrayTitles;
    this.arrayIdMedias = arrayIdMedias;
    this.array = array;
    this.url_slice = url_slice;
    this.photosMedias = document.querySelector(".photos-medias");
  }

  getPhotosMedias() {
    //on map notre array avec les photo et on créé pour chaque élément une balise img, pour l'afficher dans le navigateur
    let index = 0;
    let like = 0;
    let id = 0;
    this.arrayImages.map((el) => {
      const photo = document.createElement("div");
      photo.setAttribute("class", "card-photo");
      photo.innerHTML = `<img src="assets/images/${this.array[0].name}/${el}" class="lightbox-activate images-photographers"
                         style="cursor:pointer;" alt="${el}">
                         <div class="p-heart">
                         <p>${this.arrayTitles[index]}</p>
                         <div id="${this.arrayIdMedias[id]}" style="cursor:pointer;" class="heart">
                         <p id="${this.arrayIdMedias[id]}" class="p-like">${this.arrayLikes[like]}</p>
                         <i id="${this.arrayIdMedias[id]}" class="fas fa-heart"></i>
                         </div>
                         </div>`;
      this.photosMedias.appendChild(photo);
      index += 1;
      like += 1;
      id += 1;
    });

    //on map notre array avec les videos et on créé pour chaque élément une balise video, pour l'afficher dans le navigateur
    this.arrayVideos.map((el) => {
      const video = document.createElement("div");
      video.innerHTML = `<video style="cursor:pointer;" class="images-photographers lightbox-activate" controls> 
                   <source src="assets/images/${this.array[0].name}/${el}" type="video/mp4">
                   </video>
                   <div class="p-heart">
                   <p>${this.arrayTitles[index]}</p>
                   <div id="${this.arrayIdMedias[id]}" style="cursor:pointer;" class="heart">
                   <p id="${this.arrayIdMedias[id]}" class="p-like">${this.arrayLikes[like]}</p>
                   <i id="${this.arrayIdMedias[id]}" class="fas fa-heart"></i>
                   </div>
                   </div>`;
      video.setAttribute('class', 'card-photo')             
      this.photosMedias.appendChild(video);
    });

    //calcule totale des likes dans le tableau arrayLikes (result contiendra notre totale)
    let arrayLikes1 = this.arrayLikes
    let result = 0;
    for (let i = 0; i < arrayLikes1.length; i++) {
      let numero = arrayLikes1[i];
      result += numero 
    }

    //affichage des likes totales des medias dans chaque page photographe
    const likeTotale = document.querySelector('.like-fixed');
    likeTotale.innerHTML = `<div><p class="plike-totale">${result}</p><i class="fa-solid fa-heart"></i></div>
                             <p class="plike-price">${this.array[0].price}Є  / jour</p>`;

    //fonction pour ajouter et enlever le like pour chaque media
    let numero = 0;
    let totale = 0;
    let photo1Index = null;
    let fasHeart = document.querySelectorAll('.fas');
      
      
      
    function clickLike(e) {
      let plike = document.querySelectorAll(".p-like");
      let plikeTotaleLikes = document.querySelector('.plike-totale');
      let currentImage = e.currentTarget.cloneNode(true);
      let currentIndex = currentImage.querySelector('p').textContent;
      photo1Index = arrayLikes1.indexOf(parseInt(currentIndex))
      
      plike.forEach(btn => {
        let numeroid = btn.id
        if (numeroid === currentImage.id && btn.textContent == arrayLikes1[photo1Index]) {
          numero = parseInt(btn.textContent);
          totale = parseInt(document.querySelector('.plike-totale').textContent)
          btn.innerHTML = numero + 1;
          plikeTotaleLikes.innerHTML = totale + 1; 
          fasHeart.forEach(btn => {
            if (btn.id === numeroid) {
              btn.classList.add('fas-click')
            }
          })
        } else if (numeroid === currentImage.id && btn.textContent != arrayLikes1[photo1Index]) {
          numero = parseInt(btn.textContent);
          totale = parseInt(document.querySelector('.plike-totale').textContent)
          btn.innerHTML = numero - 1;
          plikeTotaleLikes.innerHTML = totale - 1; 
          fasHeart.forEach(btn => {
            if (btn.id === numeroid) {
              btn.classList.remove('fas-click')
            }
          })  
        } 
      })   
    }

      
    
    //evenement pour déclancher la fonction créé en haut concernant les likes de chaque media
    const eventLikes = document.querySelectorAll(".heart");
    eventLikes.forEach((btn) => btn.addEventListener("click", clickLike));
    
  }
}
