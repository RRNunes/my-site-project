document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const modeText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
        toggleDarkModeButton.innerText = translations[currentLang][modeText];
    };

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    toggleDarkModeButton.addEventListener('click', toggleDarkMode);;
});
