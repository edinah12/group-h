let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % slides.length; // Loop back to the first image
}

setInterval(showSlide, 3000); // Change slide every 3 seconds
showSlide(); // Initial call

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function nextTestimonial() {
        testimonials.forEach((t, i) => {
            t.classList.remove("active"); // Hide all testimonials
        });

        testimonials[index].classList.add("active"); // Show only one
        index = (index + 1) % testimonials.length; // Loop back to start
    }

    // Initialize first testimonial
    testimonials[0].classList.add("active");

    setInterval(nextTestimonial, 4000); // Change every 4 seconds
});