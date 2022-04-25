class Test {
  constructor(test){
    this.test = test
  }

  getTest(){
    const lightbox = document.querySelectorAll(".lightbox-activate");
    lightbox.forEach((btn) => btn.addEventListener("click", openLightbox));
    function openLightbox(){
      console.log('test');
    }
  }

}