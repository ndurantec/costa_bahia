<script>
let currentIndex = 0;
const banners = document.querySelectorAll('.banner-item');

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.classList.toggle('active', i === index);
    });
}

function moveBanner(direction) {
    currentIndex = (currentIndex + direction + banners.length) % banners.length;
    showBanner(currentIndex);
}

// Exibe o primeiro banner inicialmente
showBanner(currentIndex);
</script>
