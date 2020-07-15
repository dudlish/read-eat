// Open the Modal
function openLightboxModal() {
    document.getElementById("lightbox-modal").style.display = "block";
}

// Close the Modal
function closeLightboxModal() {
    document.getElementById("lightbox-modal").style.display = "none";
}

let lightboxSlideIndex = 1;
lightboxShowSlides(lightboxSlideIndex);

// Next/previous controls
function lightboxPlusSlides(n) {
    lightboxShowSlides(lightboxSlideIndex += n);
}

// Thumbnail image controls
function lightboxCurrentSlide(n) {
    lightboxShowSlides(lightboxSlideIndex = n);
}

function lightboxShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("lightboxSlides");
    let dots = document.getElementsByClassName("lightboxDemo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { lightboxSlideIndex = 1 }
    if (n < 1) { lightboxSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" lightbox-active", "");
    }
    slides[lightboxSlideIndex - 1].style.display = "block";
    dots[lightboxSlideIndex - 1].className += " lightbox-active";
    captionText.innerHTML = dots[lightboxSlideIndex - 1].alt;
}

// let slide = document.querySelectorAll(".lightboxSlides")
// slide.addEventListener("click", function () {
//     alert("Hello World");
// });
