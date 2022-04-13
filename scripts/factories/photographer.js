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
    
    //on map notre array avec les photo et on créé pour chaque élément une balise img, pour l'afficher dans le navigateur
    const arrayLightbox = [];
    arrayImages.map((el) => {
      const photo = document.createElement("img");
      photo.setAttribute('src', `/assets/images/${array[0].name}/${el}` )
      photo.setAttribute('class', ' image-lightbox lightbox-activate images-photographers')
      photo.setAttribute('alt', `${el}`)
      photo.style.cursor = 'pointer';
      PhotosMedias.appendChild(photo);
      arrayLightbox.push(photo)
    });
const arrayLightboxClone = arrayLightbox.concat();

    //on map notre array avec les videos et on créé pour chaque élément une balise video, pour l'afficher dans le navigateur
    arrayVideos.map((el) => {
      const video = document.createElement("a");
      video.innerHTML = `<video class="images-photographers" controls> 
                         <source src="/assets/images/${array[0].name}/${el}" type="video/mp4">
                         </video>`;
      video.setAttribute('class', 'lightbox-activate')
      video.style.cursor = 'pointer';
      PhotosMedias.appendChild(video);
    });
    
    //function pour afficher la lightbox
    let photo1 = null
    let photo1Clone = null
    const lightboxShow = document.querySelector('.lightbox')
    function openLightbox(e) {
      photo1 = e.currentTarget.cloneNode(true)
      lightboxShow.style.display = 'block'
      photo1.setAttribute('class', 'image-lightbox lightbox-activate images-photographers')
      lightboxShow.appendChild(photo1)
      photo1Clone = photo1.cloneNode(true)
    }
    
    //événement pour afficher la lightbox
    const lightbox = document.querySelectorAll('.lightbox-activate')
    lightbox.forEach(btn => btn.addEventListener('click', openLightbox));

    //evenement pour changer d'image dans la lightbox coté Right
    const lightboxRight = document.querySelector('.fa-chevron-right');
    let newImage,newImage2,newImage3,newImage4,newImage5,newImage6,newImage7,newImage8, newImage9, newImage10 = null;
     lightboxRight.addEventListener('click', () => {
          if ((arrayImages.includes(photo1.alt) && document.body.contains(photo1)) ) {     
            lightboxShow.removeChild(photo1) 
            newImage = document.createElement('img');
            newImage.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(photo1.alt)+1]}`);
            newImage.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage.setAttribute('alt', `${arrayImages[arrayImages.indexOf(photo1.alt)+1]}`)
            lightboxShow.appendChild(newImage);
            console.log(newImage);
          } else if (arrayImages.includes(newImage.alt) && document.body.contains(newImage)) {
            lightboxShow.removeChild(newImage) 
            newImage2 = document.createElement('img');
            newImage2.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage.alt)+1]}`);
            newImage2.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage2.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage.alt)+1]}`)
            lightboxShow.appendChild(newImage2);
            console.log(newImage2);
          } else if (arrayImages.includes(newImage2.alt) && document.body.contains(newImage2)) {
            lightboxShow.removeChild(newImage2) 
            newImage3 = document.createElement('img');
            newImage3.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage2.alt)+1]}`);
            newImage3.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage3.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage2.alt)+1]}`)
            lightboxShow.appendChild(newImage3);
            console.log(newImage3);
          } else if (arrayImages.includes(newImage3.alt) && document.body.contains(newImage3)) {
            lightboxShow.removeChild(newImage3) 
            newImage4 = document.createElement('img');
            newImage4.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage3.alt)+1]}`);
            newImage4.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage4.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage3.alt)+1]}`)
            lightboxShow.appendChild(newImage4);
            console.log(newImage4);
          } else if (arrayImages.includes(newImage4.alt) && document.body.contains(newImage4)) {
            lightboxShow.removeChild(newImage4) 
            newImage5 = document.createElement('img');
            newImage5.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage4.alt)+1]}`);
            newImage5.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage5.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage4.alt)+1]}`)
            lightboxShow.appendChild(newImage5);
            console.log(newImage5);
          } else if (arrayImages.includes(newImage5.alt) && document.body.contains(newImage5)) {
            lightboxShow.removeChild(newImage5) 
            newImage6 = document.createElement('img');
            newImage6.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage5.alt)+1]}`);
            newImage6.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage6.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage5.alt)+1]}`)
            lightboxShow.appendChild(newImage6);
            console.log(newImage6);
          } else if (arrayImages.includes(newImage6.alt) && document.body.contains(newImage6)) {
            lightboxShow.removeChild(newImage6) 
            newImage7 = document.createElement('img');
            newImage7.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage6.alt)+1]}`);
            newImage7.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage7.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage6.alt)+1]}`)
            lightboxShow.appendChild(newImage7);
            console.log(newImage7);
          }  else if (arrayImages.includes(newImage7.alt) && document.body.contains(newImage7)) {
            lightboxShow.removeChild(newImage7) 
            newImage8 = document.createElement('img');
            newImage8.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage7.alt)+1]}`);
            newImage8.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage8.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage7.alt)+1]}`)
            lightboxShow.appendChild(newImage8);
            console.log(newImage8);
          }  else if (arrayImages.includes(newImage8.alt) && document.body.contains(newImage8)) {
            console.log(photo1);
            lightboxShow.removeChild(newImage8) 
            newImage9 = document.createElement('img');
            newImage9.setAttribute('src', `/assets/images/${arrayImages[arrayImages.indexOf(newImage8.alt)+1]}`);
            newImage9.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage9.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage8.alt)+1]}`)
            lightboxShow.appendChild(newImage9);
          }  else if (arrayImages.includes(newImage9.alt) && document.body.contains(newImage9)) {
            console.log(photo1);
            lightboxShow.removeChild(newImage9) 
            newImage10 = document.createElement('img');
            newImage10.setAttribute('src', `/assets/images/${arrayImages[arrayImages.indexOf(newImage9.alt)+1]}`);
            newImage10.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
            newImage10.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage9.alt)+1]}`)
            lightboxShow.appendChild(newImage10);
          }  
     })

    //fermer la lightbox
    const closelightbox = document.querySelector('.fa-xmark');
    closelightbox.addEventListener('click', () => {
      const lightboxShow = document.querySelector('.lightbox');
      const imgDelete = document.querySelector('.image-lightbox');
      imgDelete.remove();
      lightboxShow.style.display = 'none';

    })
      
  }
    
  return { getUserCardDOM, getPagePhotographe };
}

