if (photo.src === arrayLightbox0.src) {
    lightboxShow.removeChild(photo)
    newarrayLightbox1 = arrayLightbox1.cloneNode(true);
    newarrayLightbox1.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox1)
  } else if (photo.src === arrayLightbox1.src || newarrayLightbox1.src === arrayLightbox1.src) {
    console.log(newarrayLightbox1.src);
    console.log(arrayLightbox1.src);
    lightboxShow.removeChild(newarrayLightbox1)
    newarrayLightbox2 = arrayLightbox2.cloneNode(true);
    newarrayLightbox2.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox2)
  } else if (photo.src === arrayLightbox2.src || newarrayLightbox2.src === arrayLightbox2.src) {
    lightboxShow.removeChild(photo)
    newarrayLightbox3 = arrayLightbox3.cloneNode(true);
    newarrayLightbox3.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox3)
  } else if (photo.src === arrayLightbox3.src || newarrayLightbox3.src === arrayLightbox3.src) {
    lightboxShow.removeChild(photo)
    newarrayLightbox4 = arrayLightbox4.cloneNode(true);
    newarrayLightbox4.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox4)
  } else if (photo.src === arrayLightbox4.src || newarrayLightbox4.src === arrayLightbox4.src) {
    lightboxShow.removeChild(photo)
    newarrayLightbox5 = arrayLightbox5.cloneNode(true);
    newarrayLightbox5.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox5)
  } else if (photo.src === arrayLightbox5.src || newarrayLightbox5.src === arrayLightbox5.src) {
    lightboxShow.removeChild(photo)
    let newarrayLightbox6 = arrayLightbox6.cloneNode(true);
    newarrayLightbox6.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox6)
  } else if (photo.src === arrayLightbox6.src) {
    lightboxShow.removeChild(photo)
    let newarrayLightbox7 = arrayLightbox7.cloneNode(true);
    newarrayLightbox7.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox7)
  } else if (photo.src === arrayLightbox7.src) {
    lightboxShow.removeChild(photo)
    let newarrayLightbox8 = arrayLightbox8.cloneNode(true);
    newarrayLightbox8.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox8)
  } else if (photo.src === arrayLightbox8.src) {
    lightboxShow.removeChild(photo)
    let newarrayLightbox9 = arrayLightbox9.cloneNode(true);
    newarrayLightbox9.setAttribute('class', 'image-lightbox')
    lightboxShow.appendChild(newarrayLightbox9)
  }


  let [arrayLightbox0, arrayLightbox1, arrayLightbox2, arrayLightbox3, arrayLightbox4, arrayLightbox5, arrayLightbox6, arrayLightbox7, arrayLightbox8] = arrayLightbox
  let newarrayLightbox0,newarrayLightbox1,newarrayLightbox2,newarrayLightbox3,newarrayLightbox4,newarrayLightbox5,newarrayLightbox6,newarrayLightbox7,newarrayLightbox8 = null



   //       if (arrayImages.includes(photo1.alt) && document.body.contains(photo1)) {
    //         lightboxShow.removeChild(photo1) 
    //         newImage = document.createElement('img');
    //         newImage.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(photo1.alt)+1]}`);
    //         newImage.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage.setAttribute('alt', `${arrayImages[arrayImages.indexOf(photo1.alt)+1]}`)
    //         lightboxShow.appendChild(newImage);
    //         console.log(newImage);
    //       } else if (arrayImages.includes(newImage.alt) && document.body.contains(newImage)) {
    //         lightboxShow.removeChild(newImage) 
    //         newImage2 = document.createElement('img');
    //         newImage2.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage.alt)+1]}`);
    //         newImage2.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage2.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage.alt)+1]}`)
    //         lightboxShow.appendChild(newImage2);
    //         console.log(newImage2);
    //       } else if (arrayImages.includes(newImage2.alt) && document.body.contains(newImage2)) {
    //         lightboxShow.removeChild(newImage2) 
    //         newImage3 = document.createElement('img');
    //         newImage3.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage2.alt)+1]}`);
    //         newImage3.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage3.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage2.alt)+1]}`)
    //         lightboxShow.appendChild(newImage3);
    //         console.log(newImage3);
    //       } else if (arrayImages.includes(newImage3.alt) && document.body.contains(newImage3)) {
    //         lightboxShow.removeChild(newImage3) 
    //         newImage4 = document.createElement('img');
    //         newImage4.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage3.alt)+1]}`);
    //         newImage4.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage4.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage3.alt)+1]}`)
    //         lightboxShow.appendChild(newImage4);
    //         console.log(newImage4);
    //       } else if (arrayImages.includes(newImage4.alt) && document.body.contains(newImage4)) {
    //         lightboxShow.removeChild(newImage4) 
    //         newImage5 = document.createElement('img');
    //         newImage5.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage4.alt)+1]}`);
    //         newImage5.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage5.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage4.alt)+1]}`)
    //         lightboxShow.appendChild(newImage5);
    //         console.log(newImage5);
    //       } else if (arrayImages.includes(newImage5.alt) && document.body.contains(newImage5)) {
    //         lightboxShow.removeChild(newImage5) 
    //         newImage6 = document.createElement('img');
    //         newImage6.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage5.alt)+1]}`);
    //         newImage6.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage6.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage5.alt)+1]}`)
    //         lightboxShow.appendChild(newImage6);
    //         console.log(newImage6);
    //       } else if (arrayImages.includes(newImage6.alt) && document.body.contains(newImage6)) {
    //         lightboxShow.removeChild(newImage6) 
    //         newImage7 = document.createElement('img');
    //         newImage7.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage6.alt)+1]}`);
    //         newImage7.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage7.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage6.alt)+1]}`)
    //         lightboxShow.appendChild(newImage7);
    //         console.log(newImage7);
    //       }  else if (arrayImages.includes(newImage7.alt) && document.body.contains(newImage7)) {
    //         lightboxShow.removeChild(newImage7) 
    //         newImage8 = document.createElement('img');
    //         newImage8.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(newImage7.alt)+1]}`);
    //         newImage8.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage8.setAttribute('alt', `${arrayImages[arrayImages.indexOf(newImage7.alt)+1]}`)
    //         lightboxShow.appendChild(newImage8);
    //         console.log(newImage8);
    //       }  else if (arrayImages.includes(newImage8.alt) && document.body.contains(newImage8)) {
    //         console.log(photo1);
    //         lightboxShow.removeChild(newImage8) 
    //         newImage9 = document.createElement('img');
    //         newImage9.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[0]}`);
    //         newImage9.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
    //         newImage9.setAttribute('alt', `${arrayImages[0]}`)
    //         lightboxShow.appendChild(newImage9);
    //       }   


    if (arrayImages.includes(photo1.alt) && document.body.contains(photo1)) {
      nextPhoto(photo1, newImage);
    } else if (arrayImages.includes(newImage.alt) && document.body.contains(newImage)) {
      nextPhoto(newImage, newImage2)
    } else if (arrayImages.includes(newImage2.alt) && document.body.contains(newImage2)) {
      
    } else if (arrayImages.includes(newImage3.alt) && document.body.contains(newImage3)) {
      
    } else if (arrayImages.includes(newImage4.alt) && document.body.contains(newImage4)) {
      
    } else if (arrayImages.includes(newImage5.alt) && document.body.contains(newImage5)) {
      
    } else if (arrayImages.includes(newImage6.alt) && document.body.contains(newImage6)) {
      
    }  else if (arrayImages.includes(newImage7.alt) && document.body.contains(newImage7)) {
      
    }  else if (arrayImages.includes(newImage8.alt) && document.body.contains(newImage8)) {
      
    } 


    function nextPhoto(photo, photoNew) {
      //lightboxShow.removeChild(photo1);
      lightboxShow.removeChild(photo)
      // photoNew = document.createElement('div');
      // photoNew.innerHTML = `<img src="/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(photo1.alt)+1]}" 
      //                       alt="${arrayImages[arrayImages.indexOf(photo1.alt)+1]}"
      //                       class="lightbox-activate image-lightbox images-photographers">`
      photoNew = document.createElement('img');
      photoNew.setAttribute('src', `/assets/images/${array[0].name}/${arrayImages[arrayImages.indexOf(photo.alt)+1]}`);
      photoNew.setAttribute('class', 'lightbox-activate image-lightbox images-photographers');
      photoNew.setAttribute('alt', `${arrayImages[arrayImages.indexOf(photo.alt)+1]}`)
      lightboxShow.appendChild(photoNew);
      console.log(photoNew);
    }
