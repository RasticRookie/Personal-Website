/* .js files add interaction to your website */

function toggleImage() {
  var image = document.getElementById('toggleImage');
  if (image.src.endsWith('Doggo2.PNG')) {
    image.src = 'assets/Doggo1.PNG'; // Path to the new image
  } else {
    image.src = 'assets/Doggo2.PNG'; // Path to the original image
  }
}