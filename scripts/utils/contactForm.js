//Ouverture et fermeture de la modale
function displayModal() {
  const modal = document.getElementById("contact_modal");
modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const btnValidate = document.getElementById('validate-form')

// constantes des erreurs au niveau des inputs
//const error = document.querySelector(".error");
const errorPrenom = document.querySelector('.prenom');
const errorNom = document.querySelector('.nom');
const errorEmail = document.querySelector('.email');
const errorTextArea = document.querySelector('.textarea');

// Contantes regex
const regExMail = /[a-zA-Z0-9-.-_]+[@]{1}[a-zA-Z0-9-.-_]+[.]{1}[a-z]{2,6}$/gm;
const regexName = /^(?:[^\d\W][\-\s\']{0,1}){2,20}$/;
const regexTextArea = /^(?:[^\d\W][\-\s\']{0,1}){20,200}$/;

const arrayForm = []

//function pour controler/tester le prenom dans le formulaire d'envoie
function checkPrenom() {
  const prenom = document.querySelector('#first').value;
  arrayForm.push(prenom)
    const isPrenomValide = regexName.test(prenom);
  
    if (isPrenomValide) {
      errorPrenom.classList.remove('error');
      errorPrenom.style.display = 'none';
    } else {
      errorPrenom.classList.add('error');
      errorPrenom.style.display = 'block';
    }
    return isPrenomValide;
  }

  //function pour controler/tester le nom dans le formulaire d'envoie
  function checkNom() {
    const nom = document.querySelector('#last').value;
    arrayForm.push(nom)
    const isNomValide = regexName.test(nom);
  
    if (isNomValide) {
      errorNom.classList.remove('error');
      errorNom.style.display = 'none';
    } else {
      errorNom.classList.add('error');
      errorNom.style.display = 'block';
    }
    return isNomValide;
  }

  //function pour controler/tester l'email dans le formulaire d'envoie
  function checkEmail() {
    const email = document.querySelector('#email').value
    arrayForm.push(email)
    const isEmailValide = regExMail.test(email);
    if (isEmailValide) {
     errorEmail.classList.remove('error');
     errorEmail.style.display = 'none'
    } else {
     errorEmail.classList.add('error');
     errorEmail.style.display = 'block';
    }
    return isEmailValide;
  }

  //function pour controler/tester le nom dans le formulaire d'envoie
  function checkTextArea() {
    const textArea = document.querySelector('#textArea').value;
    arrayForm.push(textArea)
    const isNomValide = regexTextArea.test(textArea);
  
    if (isNomValide) {
      errorTextArea.classList.remove('error');
      errorTextArea.style.display = 'none'; 
    } else {
      errorTextArea.classList.add('error');
      errorTextArea.style.display = 'block';
    }
    return isNomValide;
  }

  //validation du formulaire avec envoie des values en console log
    btnValidate.addEventListener('submit', (e) => { 
      e.preventDefault();
       const isFormValid = () => checkPrenom() && checkNom() && checkEmail() && checkTextArea();
       if (isFormValid()) {
         closeModal();
         console.log(`Prenom : ${arrayForm[0]}, Nom : ${arrayForm[1]}, Email : ${arrayForm[2]}, Message : ${arrayForm[3]}`);
       }
    })
