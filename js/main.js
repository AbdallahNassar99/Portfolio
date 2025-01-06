const navLinks = document.querySelectorAll('.link');
const dropDown = document.getElementById('drop-down');
const bars = document.getElementById('bars');
const sections = document.querySelectorAll('section');
const footer = document.getElementById('footer');

bars.addEventListener('click', () => {
    dropDown.classList.toggle('d-none');
    bars.classList.toggle('fa-xmark');
});

navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        navLinks.forEach((link) => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
        if (dropDown) {
            dropDown.classList.add('d-none');
            bars.classList.remove('fa-xmark');
        }
    });
});

window.addEventListener('scroll', () => {
    let currentSection = null;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
            link.classList.add('active');
        }
    });
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#footer') {
                link.classList.add('active');
            }
        });
    }
});
