document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const translateButton = document.getElementById('translate-page');

    const translations = {
        "pt": {
            "Início": "Home",
            "Sobre": "About",
            "Projetos": "Projects",
            "Contato": "Contact",
            "Meus Projetos": "My Projects",
            "Texto sobre mim e minha carreira.": "Text about me and my career.",
            "Você pode me encontrar nas redes sociais:": "You can find me on social media:",
            "Modo Escuro": "Dark Mode",
            "Modo Claro": "Light Mode",
            "EN/PT": "EN/PT",
            "Desenvolvedora Backend Java": "Backend Java Developer"
        },
        "en": {
            "Home": "Início",
            "About": "Sobre",
            "Projects": "Projetos",
            "Contact": "Contato",
            "My Projects": "Meus Projetos",
            "Text about me and my career.": "Texto sobre mim e minha carreira.",
            "You can find me on social media:": "Você pode me encontrar nas redes sociais:",
            "Dark Mode": "Modo Escuro",
            "Light Mode": "Modo Claro",
            "EN/PT": "EN/PT",
            "Backend Java Developer": "Desenvolvedora Backend Java"
        }
    };

    let currentLang = "pt";

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const modeText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
        toggleDarkModeButton.innerText = translations[currentLang][modeText];
    };

    const translatePage = () => {
        currentLang = currentLang === "pt" ? "en" : "pt";
        document.querySelectorAll('a, h1, p, li, button').forEach(element => {
            const text = element.innerText.trim();
            if (translations[currentLang][text]) {
                element.innerText = translations[currentLang][text];
            }
        });
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

    toggleDarkModeButton.addEventListener('click', toggleDarkMode);
    translateButton.addEventListener('click', translatePage);
});

