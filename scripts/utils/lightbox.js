class Lightbox {
  constructor(arrayTitles, array) {
    this.arrayTitles = arrayTitles;
    this.array = array;
  }

  getLightbox(arrayR) {
    //fonction pour retrouver la value du select par rapport au tri pour afficher nos medias dans la lightbox
    //let arrayR = this.arrayMedias;
    let arrayM = []
    arrayR.forEach(btn => {
      arrayM.push(btn.firstElementChild)
    })
    let arrayM2 = [];
    arrayM.forEach((btn) => {
      arrayM2.push(btn.alt);
    });

    //function pour afficher la lightbox
    let photo1;
    let photo1Index = null;
    let h2 = document.createElement("h2");
    const lightboxShow = document.querySelector(".lightbox");
    const lightboxShowContent = document.querySelector(".lightbox-content")
    function openLightbox(e) {
      photo1 = e.currentTarget.cloneNode(true);
      lightboxShow.style.display = "flex";
      lightboxShow.style.justifyContent = 'center';
      lightboxShow.style.alignItems = 'center';
      lightboxShowContent.style.display = "flex";
      lightboxShowContent.style.flexDirection = 'column-reverse';
      lightboxShowContent.style.justifyContent = 'center';
      lightboxShowContent.style.alignItems = 'center';
      photo1.setAttribute("class", "image-lightbox");
      photo1Index = arrayM2.indexOf(photo1.alt);
      h2.textContent = arrayM2[photo1Index];
      lightboxShowContent.append(photo1, h2);
      console.log(arrayM);
    }

    //événement pour afficher la lightbox
    const lightbox = document.querySelectorAll(".lightbox-activate");
    lightbox.forEach((btn) => btn.addEventListener("click", openLightbox));


    //fonction pour passer à la photo suivante
    function switchNext() {
      if (photo1Index === arrayM.length - 1) {
        photo1Index = 0;
        photo1.remove();
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        h2.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, h2);
      } else {
        photo1Index += 1;
        photo1.remove();
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        h2.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, h2);
      }
    }
 
    //evenement pour changer d'image dans la lightbox coté Right (lié à la fonction qu'on vient de créer)
    const lightboxRight = document.querySelector(".fa-chevron-right");
    lightboxRight.addEventListener("click", switchNext);

    //fonction pour passer à la photo precedente
    function switchPrevious() {
      if (photo1Index === 0) {
        photo1Index = arrayM.length - 1;
        photo1.remove()
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        h2.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, h2);
      } else {
        photo1Index -= 1;
        photo1.remove()
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        h2.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, h2);
      }
    }
        
    //evenement pour changer d'image dans la lightbox coté Left (lié à la fonction qu'on vient de créer)
    const lightboxLeft = document.querySelector(".fa-chevron-left");
    lightboxLeft.addEventListener("click", switchPrevious);

    //fonction pour fermer la lightbox
    function closeLightbox() {
      const lightboxShow = document.querySelector(".lightbox");
      const imgDelete = document.querySelector(".image-lightbox");
      imgDelete.remove()
      console.log(imgDelete);
      lightboxShow.style.display = "none";
      lightboxShowContent.removeChild(photo1)
    }

    //evenement pour fermer la lightbox (lié à la fonction qu'on vient de créer)
    const closelightbox = document.querySelector(".fa-xmark");
    closelightbox.addEventListener("click", closeLightbox);

    //EventListener permettant d'effectuer des actions au clique ou à l'aide du clavier
    document.addEventListener("keyup", (event) => {
      checkLightboxKeyboard(event);
    });

    //Function pour permettre la navigation avec le clavier au niveau de la lightbox
    function checkLightboxKeyboard(event) {
      //Touches 'D', '6' (pad num.), '►' permettent de faire défiller les publications suivantes
      if (
        event.keyCode === 68 ||
        event.keyCode === 102 ||
        event.keyCode === 39
      ) {
        switchNext();
      }
      //Touches 'Q', '4' (pad num.), '◄' permettent de faire défiller les publications précédentes
      if (
        event.keyCode === 81 ||
        event.keyCode === 100 ||
        event.keyCode === 37
      ) {
        switchPrevious();
      }
      //La touche 'Échap' permet de fermer la lightbox
      if (event.keyCode === 27) {
        closeLightbox();
      }
    }
  }
}
