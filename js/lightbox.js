function openLightboxModal(){
  document.getElementById('myLightbox').style.display = "block";
  document.getElementById('myLightbox').style.zIndex = 2000;
}

function closeLightboxModal(){
  document.getElementById('myLightbox').style.display = "none";
  document.getElementById('myLightbox').style.zIndex = -1;
}

function jumpImages(n){
  showImage(imgIndex+=n);
}

function currentImage(n){
  showImage(imgIndex=n);
}

function showImage(n){
  var i;
  var imgs = document.getElementsByClassName("myImages"); //get all images in group

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
  if (imgs[imgIndex-1]){
    imgs[imgIndex-1].style.display = "block";
  }
}

var imgIndex = 1;
showImage(imgIndex);