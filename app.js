const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("✔️ Submitted successfully! We’ll get back to you soon.");

        form.reset();
    });
});
