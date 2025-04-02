
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const closeButton = document.querySelector(".close");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

//Open lightbox when an image is clicked
    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImage.src = this.src;
        });
    });

    // this is to close lightbox when clicking the close button
    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // this is to close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImage) {
            lightbox.style.display = "none";
        }
    });
  });
