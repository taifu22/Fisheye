class Lightbox {
  constructor(arrayImages, arrayVideos, arrayTitles, array) {
    this.arrayImages = arrayImages;
    this.arrayVideos = arrayVideos;
    this.arrayTitles = arrayTitles;
    this.array = array;
  }

  getLightbox() {
    //fusion du tableau des photo avec celui des videos pour l'affichage en lightbox
    let arrayMedias = this.arrayImages.concat(this.arrayVideos);

    //function pour afficher la lightbox
    let photo1 = null;
    let photo1Index = null;
    let h2 = document.createElement("h2");
    const lightboxShow = document.querySelector(".lightbox");
    let arrayTitles1 = this.arrayTitles;
    let array1 = this.array;
    function openLightbox(e) {
      photo1 = e.currentTarget.cloneNode(true);
      lightboxShow.style.display = "block";
      photo1.setAttribute("class", "image-lightbox");
      lightboxShow.append(photo1);
      photo1Index = arrayMedias.indexOf(photo1.alt);
      h2.textContent = arrayTitles1[photo1Index];
      lightboxShow.prepend(h2);
    }

    //événement pour afficher la lightbox
    const lightbox = document.querySelectorAll(".lightbox-activate");
    lightbox.forEach((btn) => btn.addEventListener("click", openLightbox));

    //function pour la création des medias dans la lightbox pour passer à la photo suivante ou precedente
    let video1 = document.createElement("video");
    let source = document.createElement("source");

    function createPhotoLightbox() {
      if (arrayMedias[photo1Index].includes(".mp4")) {
        console.log(arrayMedias[photo1Index]);
        photo1.style.display = "none";
        video1.setAttribute("controls", "");
        video1.setAttribute("class", "image-lightbox");
        video1.setAttribute("autoplay", "");
        source.setAttribute(
          "src",
          `/assets/images/${array1[0].name}/${arrayMedias[photo1Index]}`
        );
        source.setAttribute("type", "video/mp4");
        video1.appendChild(source);
        lightboxShow.appendChild(video1);
        h2.textContent = arrayTitles1[photo1Index];
      } else if (arrayMedias[photo1Index].includes(".jpg")) {
        console.log(arrayMedias[photo1Index]);
        video1.remove();
        photo1.style.display = "block";
        photo1 = document.querySelector(".image-lightbox");
        photo1.src = `/assets/images/${array1[0].name}/${arrayMedias[photo1Index]}`;
        h2.textContent = arrayTitles1[photo1Index];
        photo1.alt = `${arrayMedias[photo1Index]}`;
      }
    }

    //fonction pour passer à la photo suivante
    function switchNext() {
      if (photo1Index === arrayMedias.length - 1) {
        photo1Index = 0;
        createPhotoLightbox();
      } else {
        photo1Index += 1;
        createPhotoLightbox();
      }
    }

    //evenement pour changer d'image dans la lightbox coté Right (lié à la fonction qu'on vient de créer)
    const lightboxRight = document.querySelector(".fa-chevron-right");
    lightboxRight.addEventListener("click", switchNext);

    //fonction pour passer à la photo precedente
    function switchPrevious() {
      if (photo1Index === 0) {
        photo1Index = arrayMedias.length - 1;
        createPhotoLightbox();
      } else {
        photo1Index -= 1;
        createPhotoLightbox();
      }
    }

    //evenement pour changer d'image dans la lightbox coté Left (lié à la fonction qu'on vient de créer)
    const lightboxLeft = document.querySelector(".fa-chevron-left");
    lightboxLeft.addEventListener("click", switchPrevious);

    //fonction pour fermer la lightbox
    function closeLightbox() {
      const lightboxShow = document.querySelector(".lightbox");
      const imgDelete = document.querySelector(".image-lightbox");
      imgDelete.remove();
      lightboxShow.style.display = "none";
    }

    //evenement pour fermer la lightbox (lié à la fonction qu'on vient de créer)
    const closelightbox = document.querySelector(".fa-xmark");
    closelightbox.addEventListener("click", closeLightbox);

    //EventListener permettant d'effectuer des actions au clique ou à l'aide du clavier
    document.addEventListener('keyup', (event) => {checkLightboxKeyboard(event)})

    //Function pour permettre la navigation avec le clavier au niveau de la lightbox 
    function checkLightboxKeyboard(event){
       //Touches 'D', '6' (pad num.), '►' permettent de faire défiller les publications suivantes
       if(event.keyCode === 68 || event.keyCode === 102 || event.keyCode === 39){
           switchNext()
       }
       //Touches 'Q', '4' (pad num.), '◄' permettent de faire défiller les publications précédentes
       if(event.keyCode === 81 || event.keyCode === 100 || event.keyCode === 37){
           switchPrevious()
       }
       //La touche 'Échap' permet de fermer la lightbox
       if(event.keyCode === 27){
           closeLightbox()
       }
     }
  }
}
