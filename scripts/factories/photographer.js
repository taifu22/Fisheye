//fonction factory pour l'affichage de la page d'accueil et de la page photographe

function photographerFactory(data, data1) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

//Affichage des cards dans la page d'accuei
  function getUserCardDOM() {
    const article = document.createElement("article");
    article.innerHTML = `<a href="photographer.html?${id}">
        <img src="${picture}" alt="${name}"><h2>${name}</h2>
        </a>
        <p class="p-country">${country}, ${city}</p>
        <p class="p-tagline">${tagline}</p>
        <p class="p-price">${price} + Є/jour</p>`;
    return article;
  }
  
//affichage du header de la page photographe
  async function getPagePhotographe() {
    const { id1, photographerId, title, image, likes, date, price1 } = data1;

    const url_id = window.location.search;
    const url_slice = url_id.slice(1);

    let array = [];
    await fetch(`http://localhost:5500/data/photographers.json`)
      .then((res) => res.json())
      .then((res) => {
        const result = res.photographers.find((el) => {
          if (el.id == url_slice) {
            return el;
          }
        });
        array.push(result);
      });

    const picturePhotographe = `assets/photographers/${array[0].portrait}`;
    const articlePhotographe = document.querySelector(".photographer-header");
    articlePhotographe.innerHTML = `<div>
    <h1 class="h1-page-photographer">${array[0].name}</h1>
    <p class="p-country-city">${array[0].city} ${array[0].country}</p>
    <p>${array[0].tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img src="${picturePhotographe}" alt="${array[0].name}">`;

//Affichage du nom dans la modale de contacte
    const h2Contact = document.querySelector(".h2-modal-contact");
    h2Contact.innerHTML = `Contactez-moi<br>${array[0].name}`;

//Affichage des photos et videos dans la page photographe
    const PhotosMedias = document.querySelector(".photos-medias");

//utilisation du tableau pour stocker les images du photographe lié à l'url-slice
    let arrayImages = [];
    data1.map((element) => {
      if (element.photographerId == url_slice && element.image) {
        const images = element.image;
        arrayImages.push(images);
      }
    });

//utilisation du tableau pour stocker les videos du photographe lié à l'url-slice
    var arrayVideos = [];
    data1.map((element) => {
      if (element.photographerId == url_slice && element.video) {
        const videos = element.video;
        arrayVideos.push(videos);
      }
    });

//utilisation du tableau pour stocker les titles des medias du photographe lié à l'url-slice
    var arrayTitles = [];
    data1.map((element) => {
      if (element.photographerId == url_slice && element.title) {
        const title = element.title;
        arrayTitles.push(title);
      }
    });

//utilisation du tableau pour stocker les likes des medias du photographe lié à l'url-slice
    var arrayLikes = [];
    data1.map((element) => {
      if (element.photographerId == url_slice && element.likes) {
        const likes = element.likes;
        arrayLikes.push(likes);
      }
    });      

//on map notre array avec les photo et on créé pour chaque élément une balise img, pour l'afficher dans le navigateur
   let index = 0; let like = 0;
   arrayImages.map((el) => {
      const photo = document.createElement("div");
      photo.setAttribute('class', 'card-photo')
      photo.innerHTML = `<img src="/assets/images/${array[0].name}/${el}" class="lightbox-activate images-photographers"
                          style="cursor:pointer;" alt="${el}">
                          <div class="p-heart">
                          <p>${arrayTitles[index]}</p>
                          <div class="heart"><p class="p-like">${arrayLikes[like]}</p><i class="fa-solid fa-heart"></i></div>
                          </div>`
      PhotosMedias.appendChild(photo);
      index += 1
      like += 1
    });

//fonction pour ajouter et enlever le like pour chaque media

// function clickLike(e) {
//   let pLike = document.querySelectorAll('.p-like');
//   let string = parseInt(e.currentTarget.textContent)
//   console.log(arrayLikes.indexOf(string));
//     pLike.forEach(btn => {
//       let numero = parseInt(btn.textContent);
//       if (numero === string && arrayLikes.includes(string)) {
//         btn.innerHTML = numero+1 
//       } 
//     })
// } 

function clickLike() {
  let pLike = document.querySelector('.p-like');
  let numero = parseInt(pLike.textContent);
   if (checkLike) {
     console.log('ciao +');
      pLike.innerHTML = numero+1 
   } else {
     console.log('ciao -');
      pLike.innerHTML = numero-1
   }
}

//evenement pour déclancher la fonction créé en haut concernant les likes de chaque media
const eventLikes = document.querySelectorAll('.heart')
eventLikes.forEach((btn) => btn.addEventListener("click", clickLike));

//affichage des totals like dans la div fixed
//let likesMedias += arrayLikes[arrayLikes.length] 
const likeTotal = document.querySelector('.like-fixed')
likeTotal.innerHTML = ``

//on map notre array avec les videos et on créé pour chaque élément une balise video, pour l'afficher dans le navigateur
    arrayVideos.map((el) => {
      const video = document.createElement("div");
      video.innerHTML = `<video class="images-photographers" controls> 
                     <source src="/assets/images/${array[0].name}/${el}" type="video/mp4">
                     </video>
                     <div class="p-heart">
                     <p>${arrayTitles[index]}</p>
                     <div class="heart"><p>${arrayLikes[like]}</p><i class="fa-solid fa-heart"></i></div>
                     </div>`;
      video.setAttribute("class", "lightbox-activate card-photo");
      video.style.cursor = "pointer";
      PhotosMedias.appendChild(video);
    });

//fusion du tableau des photo avec celui des videos pour l'affichage en lightbox
    let arrayMedias = arrayImages.concat(arrayVideos);

//function pour afficher la lightbox
    let photo1 = null;
    let photo1Index = null;
    const lightboxShow = document.querySelector(".lightbox");
    let h2 = document.createElement("h2");
    function openLightbox(e) {
      photo1 = e.currentTarget.cloneNode(true);
      lightboxShow.style.display = "block";
      photo1.setAttribute("class", "image-lightbox");
      lightboxShow.append(photo1);
      photo1Index = arrayMedias.indexOf(photo1.alt);
      h2.textContent = arrayTitles[photo1Index];
      lightboxShow.append(h2);
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
        video1.setAttribute('autoplay', '');
        source.setAttribute(
          "src",
          `/assets/images/${array[0].name}/${arrayMedias[photo1Index]}`
        );
        source.setAttribute("type", "video/mp4");
        video1.appendChild(source);
        lightboxShow.appendChild(video1);
        h2.textContent = arrayTitles[photo1Index];
        console.log(video1);
      } else if (arrayMedias[photo1Index].includes(".jpg")) {
        console.log(arrayMedias[photo1Index]);
        video1.remove();
        photo1.style.display = "block";
        photo1 = document.querySelector(".image-lightbox");
        photo1.src = `/assets/images/${array[0].name}/${arrayMedias[photo1Index]}`;
        h2.textContent = arrayTitles[photo1Index];
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
  return { getUserCardDOM, getPagePhotographe };
}
