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
    const resultMediasPhotos = data1.map((element) => {
      if (element.photographerId == url_slice && element.image) {
        const images = element.image;
        arrayImages.push(images);
      }
    });

    //utilisation du tableau pour stocker les videos du photographe lié à l'url-slice
    let arrayVideos = [];
    const resultMediasVideos = data1.map((element) => {
      if (element.photographerId == url_slice && element.video) {
        const videos = element.video;
        arrayVideos.push(videos);
      }
    });

    //on map notre array avec les photo et on créé pour chaque élément une balise img, pour l'afficher dans le navigateur
    arrayImages.map((el) => {
      const photo = document.createElement("a");
      photo.innerHTML = `<img src="/assets/images/${array[0].name}/${el}" alt="${el}" class="images-photographers">`
      //photo.setAttribute('onclick', 'openLightbox()')
      photo.setAttribute('class', 'lightbox-activate')
      photo.style.cursor = 'pointer';
      PhotosMedias.appendChild(photo);
    });

    //on map notre array avec les videos et on créé pour chaque élément une balise video, pour l'afficher dans le navigateur
    arrayVideos.map((el) => {
      const video = document.createElement("a");
      video.innerHTML = `<video class="images-photographers" controls> 
                         <source src="/assets/images/${array[0].name}/${el}" type="video/mp4">
                         </video>`;
      //video.setAttribute('onclick', 'openLightbox()')
      video.setAttribute('class', 'lightbox-activate')
      video.style.cursor = 'pointer';
      PhotosMedias.appendChild(video);
    });
console.log(arrayImages[0]);
    //affichage de la lightbox
    const lightbox = document.querySelectorAll('.lightbox-activate')
    function openLightbox() {
      const lightboxShow = document.querySelector('.lightbox')
      lightboxShow.style.display = 'block'
      const imagesLightbox = document.createElement('img');
      imagesLightbox.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[0]}`)
      lightboxShow.appendChild(imagesLightbox)
    }
    lightbox.forEach( btn => btn.addEventListener('click', openLightbox))

    //fermer la lightbox
    const closelightbox = document.querySelector('.fa-xmark');
    closelightbox.addEventListener('click', () => {
      const lightboxShow = document.querySelector('.lightbox');
      lightboxShow.style.display = 'none';
    })
       
    //function openLightbox() {
        //const lightbox = document.querySelector('.lightbox')
       // lightbox.style.display = 'block'
      //const imagesLightbox = document.createElement('img');
      //imagesLightbox.setAttribute('src', `/assets/images/${array2[0].name}/${arrayImages2[0]}`)
    //} 
    
  }

  return { getUserCardDOM, getPagePhotographe };
}

