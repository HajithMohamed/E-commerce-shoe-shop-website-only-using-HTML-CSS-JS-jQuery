const images = [
    'slider-images/home-shoe.png',
    'slider-images/pngwing.com (4).png',
    'slider-images/pngwing.com.png',
    'slider-images/pngwing.com (6).png'
];

let currentIndex = 0;

function changeSlide(index) {
    const sliderImage = document.getElementById('slider-image');
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[index];
        sliderImage.style.opacity = 1;
    }, 500);
    currentIndex = index;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide(currentIndex);
}, 5000);