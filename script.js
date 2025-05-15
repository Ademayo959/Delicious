const phoneNavBtn = document.querySelector('.phone-nav-btn');
const phoneNavbar = document.querySelector('.phone-navbar')
phoneNavBtn.addEventListener('click', () => {
    if (phoneNavbar.style.display === 'block') {
        phoneNavbar.style.display = 'none';
    } else {
        phoneNavbar.style.display = 'block';
    }
});