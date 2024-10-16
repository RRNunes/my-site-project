// Dark Mode e Light Mode
const toggleDarkMode = () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
};

// traduzir Português e Inglês (falta add botao na pagina)
const toggleLanguage = () => {
    const langToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach((element) => {
        const translations = {
            'pt': {
                'home': 'Início',
                'about': 'Sobre',
                'projects': 'Projetos',
                'contact': 'Contato',
                'developer': 'Desenvolvedora Backend Java',
                'my-projects': 'Meus Projetos',
                'stack': 'Stack',
                'contact-me': 'Você pode me encontrar nas redes sociais:',
            },
            'en': {
                'home': 'Home',
                'about': 'About',
                'projects': 'Projects',
                'contact': 'Contact',
                'developer': 'Backend Java Developer',
                'my-projects': 'My Projects',
                'stack': 'Stack',
                'contact-me': 'You can find me on social media:',
            },
        };

        const currentLang = body.dataset.lang || 'pt';
        const newLang = currentLang === 'pt' ? 'en' : 'pt';

        body.dataset.lang = newLang;
        const translationKey = element.dataset.translate;
        element.textContent = translations[newLang][translationKey];
    });

    langToggle.textContent = body.dataset.lang === 'en' ? 'Português' : 'English';
};

// scrolled
const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};

// scroll suave entre seções
const smoothScroll = () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// animação
const handleSectionAnimations = () => {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
};

//  funcionalidades quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    // dark/light mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // português e inglês
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', toggleLanguage);

    // Scroll suave 
    smoothScroll();

    // efeito de animação nas seções ao rolar a página
    handleSectionAnimations();

    // scrolled
    window.addEventListener("scroll", handleScroll);
});
