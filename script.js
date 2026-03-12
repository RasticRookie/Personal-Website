/* .js files add interaction to your website */

function toggleImage() {
  var image = document.getElementById('toggleImage');
  if (image.src.endsWith('Doggo2.PNG')) {
    image.src = 'assets/Doggo1.PNG'; // Path to the new image
  } else {
    image.src = 'assets/Doggo2.PNG'; // Path to the original image
  }
}

// Enter button function
function enterButton() {

  let userName = document.getElementById("userName").value;
  let userOccupation = document.getElementById("userOccupation").value;
  let popup = document.getElementById("myPopup");

  if (userName.trim() !== "" && userOccupation.trim() !== "") {
    console.log("Name: " + userName + "; Occupation: " + userOccupation);

    popup.classList.remove("show");

    // clear inputs
    document.getElementById("userName").value = "";
    document.getElementById("userOccupation").value = "";
  } 
  else {
    alert("Please fill in both fields!");
  }
}

function myBackground() {
  document.body.classList.toggle("animate-bg");
}

function myPopUp () {
  document.getElementById("myPopUp");
  popup.classList.toggle("show");
}


