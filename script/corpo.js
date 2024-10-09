const carouselInner = document.querySelector('.carousel-inner');
const cards = document.querySelectorAll('.card');
const cardsToShow = 5; // Número de cards a serem mostrados
const totalCards = cards.length;
const totalPages = Math.ceil(totalCards / cardsToShow);
let currentPage = 0;

// Avançar automaticamente a cada 3 segundos
const autoMove = setInterval(moveCarousel, 3000);


const moveCarousel = () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
    } else {
        currentPage = 0; // Reiniciar se atingir o final
    }
    carouselInner.style.transform = `translateX(-${(currentPage * 100) / totalPages}%)`;
};



document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoMove); // Pausa a passagem automática
    moveCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoMove); // Pausa a passagem automática
    if (currentPage > 0) {
        currentPage--;
    } else {
        currentPage = totalPages - 1; // Voltar ao último se estiver no início
    }
    carouselInner.style.transform = `translateX(-${(currentPage * 100) / totalPages}%)`;
});
