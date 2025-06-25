document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById("imagen_card");
    const texto = card ? card.querySelector('.texto-hover') : null;
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        if (texto) {
            texto.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }

        // Sombra dinámica
        const shadowX = ((x - centerX) / centerX) * 30;
        const shadowY = ((y - centerY) / centerY) * 30;
        card.style.boxShadow = `${-shadowX}px ${-shadowY}px 40px 0 rgba(0,0,0,0.25)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.boxShadow = '0 10px 30px 0 rgba(0,0,0,0.15)';
        if (texto) {
            texto.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
        }
    });

    // Sombra inicial
    card.style.boxShadow = '0 10px 30px 0 rgba(0,0,0,0.15)';
});