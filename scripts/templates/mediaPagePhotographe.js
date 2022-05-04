//class qui gère les medias de la page photographer, du coup la gallerie avec les photo/videos, les likes, et le déclanchement de la Lightbox
class MediaPagePhotographe {
  constructor(
    arrayImages,
    arrayVideos,
    arrayLikes,
    arrayTitles,
    arrayIdMedias,
    arrayDate,
    array,
    url_slice
  ) {
    this.arrayImages = arrayImages;
    this.arrayVideos = arrayVideos;
    this.arrayLikes = arrayLikes;
    this.arrayTitles = arrayTitles;
    this.arrayIdMedias = arrayIdMedias;
    this.arrayDate = arrayDate;
    this.array = array;
    this.url_slice = url_slice;
    this.photosMedias = document.querySelector(".photos-medias");
  }

  getPhotosMedias() {
    //on map notre array avec les photo et on créé pour chaque élément une balise img, pour l'afficher dans le navigateur
    //ces balises img ensuite on les stocke dans le array mediatri qu'on utilisera pour trier et afficher les images au bon ordre dans la lightbox
    let index = 0;
    let like = 0;
    let id = 0;
    let mediatri = [];
    let photo = null;
    this.arrayImages.map((el) => {
      photo = document.createElement("article");
      photo.setAttribute("class", "card-photo");
      photo.setAttribute("id", `${this.arrayDate[index]}`);
      photo.setAttribute("aria-label", "photo photographer");
      photo.innerHTML = `<img src="assets/images/${this.array[0].name}/${el}" class="images-photographers lightbox-activate"
                         style="cursor:pointer;" id="${this.arrayTitles[index]}" alt="${this.arrayTitles[index]}" tabindex="0">
                         <div class="p-heart">
                         <p>${this.arrayTitles[index]}</p>
                         <div id="${this.arrayIdMedias[id]}" style="cursor:pointer;" class="heart">
                         <p id="${this.arrayIdMedias[id]}" class="p-like">${this.arrayLikes[like]}</p>
                         <span id="${this.arrayIdMedias[id]}" class="fas fa-heart" role="button" tabindex="0"></span>
                         </div>
                         </div>`;
      this.photosMedias.appendChild(photo);
      mediatri.push(photo);
      index += 1;
      like += 1;
      id += 1;
    });

    //on map notre array avec les videos et on créé pour chaque élément une balise video, pour l'afficher dans le navigateur
    //ces balises video ensuite on les stocke dans le array mediatri qu'on utilisera pour trier et afficher les images au bon ordre dans la lightbox
    this.arrayVideos.map((el) => {
      const video = document.createElement("article");
      video.setAttribute("id", `${this.arrayDate[index]}`);
      video.setAttribute("class", "card-photo");
      video.setAttribute("aria-label", "video photographer");
      video.innerHTML = `<video style="cursor:pointer;" class="images-photographers lightbox-activate" controls id="${this.arrayTitles[index]}"> 
                   <source src="assets/images/${this.array[0].name}/${el}" type="video/mp4" tabindex="0">
                   </video>
                   <div class="p-heart">
                   <p>${this.arrayTitles[index]}</p>
                   <div id="${this.arrayIdMedias[id]}" style="cursor:pointer;" class="heart" tabindex="0"							>
                   <p id="${this.arrayIdMedias[id]}" class="p-like">${this.arrayLikes[like]}</p>
                   <span id="${this.arrayIdMedias[id]}" class="fas fa-heart" role="button"></span>
                   </div>
                   </div>`;
      video.setAttribute("class", "card-photo");
      this.photosMedias.appendChild(video);
      mediatri.push(video);
    });

    //je fait 3 clone de mon tableau mediatri pour pouvoir l'utiliser dans mes 3 conditions au niveau des tries
    let mediatriDate = [...mediatri];
    let mediatriPopularite = [...mediatri];
    let mediatriTitle = [...mediatri];

    //evenement pour trier les medias via la date, la popularite et le titre (ordre alphabetique)
    const formFilter = document.querySelector(".filter-form");
    formFilter.addEventListener("change", changeFilter);

    const photosMedias = this.photosMedias;

    //fonction avec les 3 conditions de tri
    function changeFilter(e) {
      if (e.target.value === "date") {
        mediatriDate.sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
        mediatriDate.forEach((btn) => {
          return photosMedias.appendChild(btn);
        });
      } else if (e.target.value === "popularite") {
        mediatriPopularite.sort((a, b) => {
          return parseInt(
            a.lastElementChild.lastElementChild.firstElementChild.textContent
          ) <
            parseInt(
              b.lastElementChild.lastElementChild.firstElementChild.textContent
            )
            ? 1
            : -1;
        });
        mediatriPopularite.forEach((btn) => {
          return photosMedias.appendChild(btn);
        });
      } else if (e.target.value === "titre") {
        mediatriTitle.sort((a, b) => {
          return a.lastElementChild.firstElementChild.textContent >
            b.lastElementChild.firstElementChild.textContent
            ? 1
            : -1;
        });
        mediatriTitle.forEach((btn) => {
          return photosMedias.appendChild(btn);
        });
      }
    }

    //on instancie un objet de la class Lightbox, et on lui envoie nos 4 tableau, pour l'ordre d'affichage de l'images selon le tri
    let triLightbox = new Lightbox(
      mediatri,
      mediatriDate,
      mediatriPopularite,
      mediatriTitle
    );
    triLightbox.getLightbox();

    //on instancie un nouvel objet de la classe Likes pour ajouter et enlever les likes sur chaque media, et voir le totale
    let likes = new Likes(this.arrayLikes, this.arrayIdMedias, this.array);
    likes.getLikes();
  }
}
