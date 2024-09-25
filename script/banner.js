const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
let currentIndex = 0;

function changeImage() {
    const bannerImage = document.getElementById("banner-image");
    currentIndex = (currentIndex + 1) % images.length;
    bannerImage.src = images[currentIndex];
}

setInterval(changeImage, 5000); // Troca a imagem a cada 5 segundos
