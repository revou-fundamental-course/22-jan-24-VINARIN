function validateForm() {
    var nameInput = document.getElementById('nameInput').value;
    var emailInput = document.getElementById('emailInput').value;
    var interestSelect = document.getElementById('interestSelect').value;
  
 
    if (nameInput === '' || emailInput === '' || interestSelect === '') {
      alert('Please fix your form. All fields are required.');
    } else {
      alert('Message has been sent.');
    
    }
  }
  
function showAlert() {
    alert('Welcome to the club!'); 
}



const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showNextImage() {
    const currentImage = images[currentIndex];
    currentImage.classList.remove('fade');

    currentIndex = (currentIndex + 1) % images.length;

    const nextImage = images[currentIndex];
    nextImage.classList.add('fade');
}

setInterval(showNextImage, 3000); 
