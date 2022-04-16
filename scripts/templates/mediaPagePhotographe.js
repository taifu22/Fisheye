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
      photo.innerHTML = `<img src="/assets/images/${this.array[0].name}/${el}" class="lightbox-activate images-photographers"
                         style="cursor:pointer;" alt="${el}">
                         <div class="p-heart">
                         <p>${this.arrayTitles[index]}</p>
                         <div id="${this.arrayIdMedias[id]}" class="heart"><p id="${this.arrayIdMedias[id]}" class="p-like">${this.arrayLikes[like]}</p><i class="fa-solid fa-heart"></i></div>
                         </div>`;
      this.photosMedias.appendChild(photo);
      index += 1;
      like += 1;
      id += 1;
    });

    //on map notre array avec les videos et on créé pour chaque élément une balise video, pour l'afficher dans le navigateur
    this.arrayVideos.map((el) => {
      const video = document.createElement("div");
      video.innerHTML = `<video class="images-photographers" controls> 
                   <source src="/assets/images/${this.array[0].name}/${el}" type="video/mp4">
                   </video>
                   <div class="p-heart">
                   <p>${this.arrayTitles[index]}</p>
                   <div id="${this.arrayIdMedias[id]}" class="heart"><p>${this.arrayLikes[like]}</p><i class="fa-solid fa-heart"></i></div>
                   </div>`;
      video.setAttribute("class", "lightbox-activate card-photo");
      video.style.cursor = "pointer";
      this.photosMedias.appendChild(video);
    });

    //fonction pour ajouter et enlever le like pour chaque media
    //let checkLike = true;
    let numero = 0
    let arrayLikes1 = this.arrayLikes
    let photo1Index = null;
    function clickLike(e) {
      let plike = document.querySelectorAll(".p-like");
      let currentImage = e.currentTarget.cloneNode(true);
      let currentIndex = currentImage.querySelector('p').textContent;
      //numero = parseInt(document.querySelector('.p-like').textContent);
      photo1Index = arrayLikes1.indexOf(parseInt(currentIndex))
      console.log(photo1Index);
      plike.forEach(btn => {
        let numeroid = btn.id
        if (numeroid === currentImage.id && btn.textContent == arrayLikes1[photo1Index]) {
          numero = parseInt(btn.textContent);
          console.log("ca marche en plus");
          btn.innerHTML = numero + 1;
        } else if (numeroid === currentImage.id && btn.textContent != arrayLikes1[photo1Index]) {
          numero = parseInt(btn.textContent);
          console.log("ca marche en moins");
          btn.innerHTML = numero - 1;
          //checkLike = true;
        } 
      })   
    }

    //evenement pour déclancher la fonction créé en haut concernant les likes de chaque media
    const eventLikes = document.querySelectorAll(".heart");
    //eventLikes.addEventListener("click", clickLike)
    eventLikes.forEach((btn) => btn.addEventListener("click", clickLike));
  }
}
