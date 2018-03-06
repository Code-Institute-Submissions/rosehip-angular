function openLightboxModal(){
  document.getElementById('myLightbox').style.display = "block";
  document.getElementById('myLightbox').style.zIndex = 2000;
}

function closeLightboxModal(){
  document.getElementById('myLightbox').style.display = "none";
  document.getElementById('myLightbox').style.zIndex = -1;
}

var imgIndex = 1;
showImages(imgIndex);

function jumpImages(n){
  showImages(imgIndex+=n);
}

function currentImage(n){
  showImages(imgIndex=n);
}

function showImages(n){
  var i;
  var imgs = document.getElementsByClassName("myImages");

  //reached end of slides, go back to 1
  if (n > imgs.length) {
    imgIndex = 1;
  }
  //reached beginning of slides, go back to end
  if (n < 1){
    imgIndex = imgs.length;
  }
  
  //hide images
  for (i=0; i<imgs.length;i++){
    imgs[i].style.display = "none";
  }

  //show THIS image
  imgs[imgIndex-1].style.display = "block";
  
}

/*document.getElementById('myLightbox').addEventListener("keydown",processKey);

function processKey() {
  console.log("keydown");
}*/