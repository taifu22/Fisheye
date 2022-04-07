//fonction factory pour l'affichage de la page d'accueil et de la page photographe

function photographerFactory(data, data1) {
    const { name, portrait, country, city, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

//Affichage des cards dans la page d'accueil

    function getUserCardDOM() {
        const article = document.createElement('article')
        article.innerHTML = `<a href="photographer.html?${id}">
        <img src="${picture}" alt="${name}"><h2>${name}</h2>
        </a>
        <p class="p-country">${country}, ${city}</p>
        <p class="p-tagline">${tagline}</p>
        <p class="p-price">${price} + Є/jour</p>`
        return (article);
    }
    
//affichage du header de la page photographe 

    async function getPagePhotographe() {
       const { id1, photographerId, title, image, likes, date, price1} = data1

       const url_id = window.location.search;
       const url_slice = url_id.slice(1)
       let array = [];
                 
       await fetch(`http://localhost:5500/data/photographers.json`)
                    .then(res => res.json())
                    .then(res => {
                        const result = res.photographers.find(el => {
                             if (el.id == url_slice) {
                                 return el
                             }
                         })     
                         array.push(result)
                    })       
       
       const picturePhotographe = `assets/photographers/${array[0].portrait}`;             
       const articlePhotographe = document.querySelector('.photograph-header')
       articlePhotographe.innerHTML = `<div>
       <h1 class="h1-page-photographer">${array[0].name}</h1>
       <p class="p-country-city">${array[0].city} ${array[0].country}</p>
       <p>${array[0].tagline}</p>
       </div>
       <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
       <img src="${picturePhotographe}" alt="${array[0].name}">`
       
//Affichage des photos media dans la page photographe 

       const PhotosMedias = document.querySelector('.photos-medias');
       let arrayImages = [];
       const resultMedias = data1.map(element => {
        if (element.photographerId == url_slice) {
            console.log(element.image);
            const images = element.image 
            arrayImages.push(images)
            return images    
        }      
       })
       //var extensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
       arrayImages.map(el => {
        const photo = document.createElement('img')
        photo.setAttribute('src',`/assets/images/${array[0].name}/${el}`)
        photo.setAttribute('alt', `${title}`)
        photo.setAttribute('class', 'images-photographers')
        PhotosMedias.appendChild(photo)
    })
       return resultMedias
    }

    return { getUserCardDOM, getPagePhotographe }
}


























































































































































































































































































































































































































































// } 


























































































































































































































































































































































































































































