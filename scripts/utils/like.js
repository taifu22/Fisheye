class Likes {
    constructor(arrayLikes, arrayIdMedia, array){
        this.arrayLikes = arrayLikes;
        this.arrayIdMedia = arrayIdMedia;
        this.array = array
    }

    getLikes() {
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
		let arrayIdMedia = this.arrayIdMedia
		  //ici on récupère tous les coeur pour pouvoir changer la class selon le like plus ou moins
		  let fasHeart = document.querySelectorAll(".fas"); 

          function clickLike(e) {
			
			let plike = document.querySelectorAll(".p-like");
			let plikeTotaleLikes = document.querySelector(".plike-totale");
			let currentImage = e.currentTarget.cloneNode(true);
			console.log(currentImage);
			photo1Index = arrayIdMedia.indexOf(parseInt(currentImage.id));
			plike.forEach((btn) => {
				let numeroid = btn.id;
				if (numeroid === currentImage.id && parseInt(btn.textContent) === parseInt(arrayLikes1[photo1Index])) {
					numero = parseInt(btn.textContent);
					totale = parseInt(document.querySelector(".plike-totale").textContent);
					btn.innerHTML = numero + 1;
					plikeTotaleLikes.innerHTML = totale + 1;
					fasHeart.forEach((btn) => {
						if (btn.id === numeroid) {
							btn.classList.add("fas-click");
						}
					});
				} else if (numeroid === currentImage.id && btn.textContent != parseInt(arrayLikes1[photo1Index])) {
					numero = parseInt(btn.textContent);
					totale = parseInt(document.querySelector(".plike-totale").textContent);
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

        //EventListener permettant d'effectuer des actions à l'aide du clavier au niveau des likes
        eventLikes.forEach((btn) => btn.addEventListener("keydown", (event) => {
		   checkLikeKeyboard(event);
	    }))

		//Function pour permettre d'ajouter ou enlever les likes via le clavier
		function checkLikeKeyboard(event) {

			//Touche enter pour l'ouverture de la lightbox
			if (event.keyCode === 13) {
			  clickLike(event)
			}
		}	

    }
}