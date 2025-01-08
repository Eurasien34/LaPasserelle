let currentIndex = 0;
let images = document.querySelectorAll("#carrouselTraiteur .card");

function arrangeCards() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('prev', 'next', 'active');
    }

    images[(currentIndex - 1 + images.length) % images.length].classList.add('prev');
    images[currentIndex].classList.add('active');
    images[(currentIndex + 1) % images.length].classList.add('next');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    arrangeCards();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    arrangeCards();
}

arrangeCards();
setInterval(nextImage, 5000);
