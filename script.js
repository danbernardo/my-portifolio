let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const intervalTime = 3000; // Tempo em milissegundos (3 segundos)
let autoSlideInterval;

function showSlide(index) {
    // Remove active class from all items
    items.forEach(item => {
        item.classList.remove('active');
        item.style.transform = 'translateX(100%)';
    });
    
    // Add active class to current item
    items[index].classList.add('active');
    items[index].style.transform = 'translateX(0)';
    
    // Position previous item
    const prevIndex = (index - 1 + totalItems) % totalItems;
    items[prevIndex].style.transform = 'translateX(-100%)';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Inicializa o carrossel
showSlide(currentIndex);
startAutoSlide();

// Pausa o slide automático quando o usuário interage com os controles
document.querySelectorAll('.carousel-control').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        stopAutoSlide();
        if (button.classList.contains('next')) {
            nextSlide();
        } else {
            prevSlide();
        }
        setTimeout(startAutoSlide, intervalTime);
    });
});

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de contato
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});