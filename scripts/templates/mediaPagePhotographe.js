class MediaPagePhotographe {
	constructor(
		arrayImages, arrayVideos, arrayLikes, arrayTitles, arrayIdMedias, arrayDate, array, url_slice) {
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
		let index = 0;
		let like = 0;
		let id = 0;
		let mediatri = [];
		let photo = null;
		this.arrayImages.map((el) => {
			photo = document.createElement("div");
			photo.setAttribute("class", "card-photo");
			photo.setAttribute("id", `${this.arrayDate[index]}`);
			photo.innerHTML = `<img src="assets/images/${this.array[0].name}/${el}" class="images-photographers lightbox-activate"
                         style="cursor:pointer;" id="${this.arrayTitles[index]}" tabindex="0" >
                         <div class="p-heart">
                         <p>${this.arrayTitles[index]}</p>
                         <div id="${this.arrayIdMedias[id]}" style="cursor:pointer;" class="heart">
                         <p id="${this.arrayIdMedias[id]}" class="p-like">${this.arrayLikes[like]}</p>
                         <i id="${this.arrayIdMedias[id]}" class="fas fa-heart" role="button" tabindex="0"></i>
                         </div>
                         </div>`;
			this.photosMedias.appendChild(photo);
			mediatri.push(photo);
			index += 1;
			like += 1;
			id += 1;
		});

		//on map notre array avec les videos et on créé pour chaque élément une balise video, pour l'afficher dans le navigateur
		this.arrayVideos.map((el) => {
			const video = document.createElement("div");
			video.setAttribute("id", `${this.arrayDate[index]}`);
			video.setAttribute("class", "card-photo");
			video.innerHTML = `<video style="cursor:pointer;" class="images-photographers lightbox-activate" controls id="${this.arrayTitles[index]}"> 
                   <source src="assets/images/${this.array[0].name}/${el}" type="video/mp4">
                   </video>
                   <div class="p-heart">
                   <p>${this.arrayTitles[index]}</p>
                   <div id="${this.arrayIdMedias[id]}" style="cursor:pointer;" class="heart">
                   <p id="${this.arrayIdMedias[id]}" class="p-like">${this.arrayLikes[like]}</p>
                   <i id="${this.arrayIdMedias[id]}" class="fas fa-heart" role="button"></i>
                   </div>
                   </div>`;
			video.setAttribute("class", "card-photo");
			this.photosMedias.appendChild(video);
			mediatri.push(video);
		});

		//je fait 4 clone de mon tableau mediatrie pour pouvoir l'utiliser dans mes 3 conditions au niveau des tries
		let mediatriDate = [...mediatri];
		let mediatriPopularite = [...mediatri];
		let mediatriTitle = [...mediatri];
	
		//evenement pour trier les medias via la date, la popularite et le titre (ordre alphabetique)
		const formFilter = document.querySelector(".filter-form");
		console.log(formFilter.lastElementChild.value);
		formFilter.addEventListener("change", changeFilter);

		const photosMedias = this.photosMedias
	    function changeFilter(e) {

			if (e.target.value === "date") {

				mediatriDate.sort((a, b) => {
					return a.id > b.id ? 1 : -1;
				});
				mediatriDate.forEach((btn) => {
					return photosMedias.appendChild(btn)
				});

			} else if (e.target.value === "popularite") {

				mediatriPopularite.sort((a, b) => {
					return parseInt(a.lastElementChild.lastElementChild.firstElementChild.textContent) < parseInt(b.lastElementChild.lastElementChild.firstElementChild.textContent) ? 1 : -1;
				});
				mediatriPopularite.forEach((btn) => {
					return photosMedias.appendChild(btn)
				});

			} else if (e.target.value === "titre") {

				mediatriTitle.sort((a, b) => {
					return a.lastElementChild.firstElementChild.textContent > b.lastElementChild.firstElementChild.textContent ? 1 : -1;
				})
				mediatriTitle.forEach(btn => {
					return photosMedias.appendChild(btn)
				});
			}
		}
        
		let triLightbox = new Lightbox(mediatri, mediatriDate, mediatriPopularite, mediatriTitle);
		triLightbox.getLightbox()
		
		//calcule totale des likes dans le tableau arrayLikes (result contiendra notre totale)
		let arrayLikes1 = this.arrayLikes;
		let result = 0;
		for (let i = 0; i < arrayLikes1.length; i++) {
			let numero = arrayLikes1[i];
			result += numero;
		}

		//affichage des likes totales des medias dans chaque page photographe
		const likeTotale = document.querySelector(".like-fixed");
		likeTotale.innerHTML = `<div><p class="plike-totale">${result}</p><i class="fa-solid fa-heart" aria-label='likes'></i></div>
                             <p class="plike-price">${this.array[0].price}Є  / jour</p>`;

		//fonction pour ajouter et enlever le like pour chaque media
		let numero = 0;
		let totale = 0;
		let photo1Index = null;
		let fasHeart = document.querySelectorAll(".fas");

		function clickLike(e) {
			let plike = document.querySelectorAll(".p-like");
			let plikeTotaleLikes = document.querySelector(".plike-totale");
			let currentImage = e.currentTarget.cloneNode(true);
			let currentIndex = currentImage.querySelector("p").textContent;
			photo1Index = arrayLikes1.indexOf(parseInt(currentIndex));

			plike.forEach((btn) => {
				let numeroid = btn.id;
				if (
					numeroid === currentImage.id &&
					btn.textContent == arrayLikes1[photo1Index]
				) {
					numero = parseInt(btn.textContent);
					totale = parseInt(
						document.querySelector(".plike-totale").textContent
					);
					btn.innerHTML = numero + 1;
					plikeTotaleLikes.innerHTML = totale + 1;
					fasHeart.forEach((btn) => {
						if (btn.id === numeroid) {
							btn.classList.add("fas-click");
						}
					});
				} else if (
					numeroid === currentImage.id &&
					btn.textContent != arrayLikes1[photo1Index]
				) {
					numero = parseInt(btn.textContent);
					totale = parseInt(
						document.querySelector(".plike-totale").textContent
					);
					btn.innerHTML = numero - 1;
					plikeTotaleLikes.innerHTML = totale - 1;
					fasHeart.forEach((btn) => {
						if (btn.id === numeroid) {
							btn.classList.remove("fas-click");
						}
					});
				}
			});
		}

		//evenement pour déclancher la fonction créé en haut concernant les likes de chaque media
		const eventLikes = document.querySelectorAll(".heart");
		eventLikes.forEach((btn) => btn.addEventListener("click", clickLike));
	}
}