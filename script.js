// Adicionando animações para os ícones sociais e o formulário de newsletter
sr.reveal('.social-icons', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.newsletter-form', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});