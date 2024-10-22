const carouselInner = document.querySelector('.carousel-inner');
const cards = document.querySelectorAll('.card');
const cardsToShow = 5; // Número de cards a serem mostrados
const totalCards = cards.length;
let currentPage = 0;

// Avançar automaticamente a cada 3 segundos
const autoMove = setInterval(() => moveCarousel(), 3000);

const moveCarousel = (next = true) => {
    if (next) {
        currentPage += cardsToShow;
        if (currentPage >= totalCards) {
            currentPage = 0; // Reiniciar se atingir o final
        }
    } else {
        currentPage -= cardsToShow;
        if (currentPage < 0) {
            currentPage = totalCards - cardsToShow; // Voltar ao último conjunto de cards
        }
    }
    const translateXValue = -((currentPage * 100) / totalCards);
    carouselInner.style.transform = `translateX(${translateXValue}%)`;
};

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoMove); // Pausa a passagem automática
    moveCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoMove); // Pausa a passagem automática
    moveCarousel(false);
});
