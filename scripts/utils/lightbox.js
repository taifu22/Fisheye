//class qui gère l'affichage de la lightbox
class Lightbox {
  constructor(mediatri, mediatriDate, mediatriPopularite, mediatriTitle) {
    this.mediatri = mediatri;
    this.mediatriDate = mediatriDate;
    this.mediatriPopularite = mediatriPopularite;
    this.mediatriTitle = mediatriTitle;
  }

  getLightbox() {
    //on récupere et on stocke dans check la value du select par rapport au tri pour afficher nos medias dans la lightbox
    let check;
    document
      .getElementById("filter-select")
      .addEventListener("change", function () {
        check = this.value;
        console.log(check);
      });

    //variables à utiliser dans la condition qui me triera la lightbox selon le tableau associé à la value du select, et la fonction pour ouvrir la lightbox
    let arrayM2;
    let arrayM;
    let photo1 = null;
    let photo1Index = null;
    let lightboxShow = null;
    let lightboxShowContent = null;
    let pTitle = null;
    let mediatri = this.mediatriDate;
    let mediatriDate = this.mediatriDate;
    let mediatriPopularite = this.mediatriPopularite;
    let mediatriTitle = this.mediatriTitle;

    //fonction pour ouvrir la lightbox
    function openLightbox(e) {
      //conditions pour utiliser le bon tableau dans la fonction selon le tri et du coup la value du select
      function checkCondition(arrayMediatri) {
        //tableau avec chaque élément media img ou video de mon photographe
        arrayM = [];
        arrayMediatri.forEach((btn) => {
          arrayM.push(btn.firstElementChild);
        });
        //tableau avec les title de chaque media
        arrayM2 = [];
        arrayM.forEach((btn) => {
          arrayM2.push(btn.id);
        });
      }

      if (check === "date") {
        checkCondition(mediatriDate);
      } else if (check === "popularite") {
        checkCondition(mediatriPopularite);
      } else if (check === "titre") {
        checkCondition(mediatriTitle);
      } else {
        checkCondition(mediatri);
      }

      //affichage de la lightbox selon le tableau choisi avec la condition juste en haut
      lightboxShow = document.querySelector(".lightbox");
      lightboxShowContent = document.querySelector(".lightbox-content");
      pTitle = document.createElement("p");
      photo1 = e.path[0].cloneNode(true);
      lightboxShow.setAttribute(
        "style",
        "display: flex; justify-content: center; align-items: center;"
      );
      lightboxShowContent.setAttribute(
        "style",
        "display: flex; justify-content: center; align-items: center; flex-direction: column;"
      );
      photo1.setAttribute("class", "image-lightbox");
      photo1Index = arrayM2.indexOf(photo1.id);
      pTitle.textContent = arrayM2[photo1Index];
      lightboxShowContent.append(photo1, pTitle);
    }

    //evenement pour ouvrir la lightbox au click sur chaque image dans la gallerie du photographe
    const lightbox = document.querySelectorAll(".lightbox-activate");
    lightbox.forEach((btn) => btn.addEventListener("click", openLightbox));

    //fonctioin pour changer les photo coté right
    function switchNext() {
      if (photo1Index === arrayM.length - 1) {
        photo1Index = 0;
        photo1.remove();
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        pTitle.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, pTitle);
      } else {
        photo1Index += 1;
        photo1.remove();
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        pTitle.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, pTitle);
      }
    }

    //evenement pour changer d'image dans la lightbox coté Right (lié à la fonction qu'on vient de créer)
    const lightboxRight = document.querySelector(".fa-chevron-right");
    lightboxRight.addEventListener("click", switchNext);

    //fonctioin pour changer les photo coté left
    function switchPrevious() {
      if (photo1Index === 0) {
        photo1Index = arrayM.length - 1;
        photo1.remove();
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        pTitle.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, pTitle);
      } else {
        photo1Index -= 1;
        photo1.remove();
        photo1 = arrayM[photo1Index].cloneNode(true);
        photo1.setAttribute("class", "image-lightbox");
        pTitle.textContent = arrayM2[photo1Index];
        lightboxShowContent.append(photo1, pTitle);
      }
    }

    //evenement pour changer d'image dans la lightbox coté Left (lié à la fonction qu'on vient de créer)
    const lightboxLeft = document.querySelector(".fa-chevron-left");
    lightboxLeft.addEventListener("click", switchPrevious);

    //fonction pour fermer la lightbox
    function closeLightbox() {
      const lightboxShow = document.querySelector(".lightbox");
      const imgDelete = document.querySelector(".image-lightbox");
      lightboxShow.style.display = "none";
      lightboxShowContent.removeChild(pTitle);
      lightboxShowContent.removeChild(photo1);
    }

    //evenement pour fermer la lightbox (lié à la fonction qu'on vient de créer)
    const closelightbox = document.querySelector(".fa-xmark");
    closelightbox.addEventListener("click", closeLightbox);

    //EventListener permettant d'effectuer des actions au clique ou à l'aide du clavier
    lightbox.forEach((btn) =>
      btn.addEventListener("keydown", (event) => {
        checkLightboxKeyboard(event);
      })
    );

    //Function pour permettre la navigation avec le clavier au niveau de la lightbox
    function checkLightboxKeyboard(event) {
      //Touche enter pour l'ouverture de la lightbox
      if (event.keyCode === 13) {
        openLightbox(event);
      }
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
