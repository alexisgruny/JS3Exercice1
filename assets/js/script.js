function mouseOver(){
  var img = document.getElementById('image1');
  //Bordure rouge 3px
  img.style.borderColor = "red";
  img.border = "3px";
}

function reset(){
  document.getElementById('image1').border = 0;
}
