function openModal(){
  document.getElementById('myLightbox').style.display = "block";
  document.getElementById('myLightbox').style.zIndex = 2000;
}

function closeModal(){
  document.getElementById('myLightbox').style.display = "none";
  document.getElementById('myLightbox').style.zIndex = -1;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("imgCaption");
  var imgCountText = document.getElementById("imgCount");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex = slides.length;
  }
  for (i=0; i<slides.length;i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  
  /*get caption text from alt attribute of image*/
  captionText.innerHTML = slides[slideIndex-1].getElementsByTagName("img")[0].alt;
  /*imgCountText.innerHTML = slideIndex + " of " + slides.length;*/
}