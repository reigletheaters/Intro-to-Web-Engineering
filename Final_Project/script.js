// Get all subscribe buttons
const subscribeButtons = document.querySelectorAll('.subscribe-button');

// Add click event listener to each subscribe button
subscribeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the 'blurred' class on the photo container
    toggleBlur(button.parentElement);

    // Update the button text
    const buttonText = button.parentElement.querySelector('img').classList.contains('blurred') ? 'Subscribe' : 'Unsubscribe';
    button.textContent = buttonText;
  });
});

// Function to toggle the 'blurred' class on the photo container
function toggleBlur(photoContainer) {
  const photoImage = photoContainer.querySelector('img'); // Get the img element inside the photo container
  photoImage.classList.toggle('blurred');
}
