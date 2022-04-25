//fonction factory pour l'affichage de la page d'accueil et de la page photographe

function photographerFactory(data) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

//Affichage des cards dans la page d'accuei
  function getUserCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("aria-label", "Photographer Profil")
    article.innerHTML = `<a href="photographer.html?${id}">
        <img src="${picture}" alt="${name}"><h2>${name}</h2>
        </a>
        <p class="p-country">${country}, ${city}</p>
        <p class="p-tagline">${tagline}</p>
        <p class="p-price">${price}Є / jour</p>`;
    return article;
  }
 
  return { getUserCardDOM };
}
