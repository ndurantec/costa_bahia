let currentIndex = 0;
const banners = document.querySelectorAll('.banner-item');
const bannerContainer = document.getElementById('banner');

function moveBanner(direction) {
    // Calcular o novo índice
    currentIndex += direction * 3;
    
    // Certificar-se de que o índice permanece dentro dos limites
    if (currentIndex >= banners.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = banners.length - 3; // Assumindo que sempre haverá múltiplos de 3 banners
    }

    // Calcular a nova posição de rolagem
    const newTransform = -currentIndex * 100 / 3; // Dividindo por 3 pois estamos mostrando 3 itens por vez
    
    // Aplicar o movimento do banner
    bannerContainer.style.transform = `translateX(${newTransform}%)`;
}

// Set the initial position
moveBanner(0);


