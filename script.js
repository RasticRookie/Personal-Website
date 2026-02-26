/* .js files add interaction to your website */

function toggleImage() {
  var image = document.getElementById('toggleImage');
  if (image.src.endsWith('Doggo2.PNG')) {
    image.src = 'assets/Doggo1.PNG'; // Path to the new image
  } else {
    image.src = 'assets/Doggo2.PNG'; // Path to the original image
  }
}

const logo = document.querySelector('.floating-image');
const modal = document.getElementById('myPopUp');
const closeButton = document.querySelector('.close-button');

logo.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopUp");
  popup.classList.toggle("show");
}


