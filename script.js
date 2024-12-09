const card = document.getElementById('card');

card.addEventListener('click', () => {
    card.classList.add('active')
    setTimeout(() => {
        card.classList.remove('active');
    }, 200);
})