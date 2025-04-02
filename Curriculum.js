// Get all accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-button');

// Add click event listener to each button
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the active class to change the button's style
    button.classList.toggle('active');

    // Get the content associated with the button
    const content = button.nextElementSibling;

    // Toggle the display of the content (expand or collapse)
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});