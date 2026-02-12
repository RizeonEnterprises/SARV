document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuRow = document.querySelector('.menu-row');

    if (hamburger && menuRow) {
        hamburger.addEventListener('click', () => {
            // Menu toggle karne ke liye simple active class use karein
            menuRow.classList.toggle('active');
            
            // Icon badalne ke liye (optional: bars se X banana)
            const icon = hamburger.querySelector('i');
            if (menuRow.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Link par click karte hi menu close ho jaye
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1200) {
                menuRow.classList.remove('active');
            }
        });
    });
});

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close menu on click (mobile)
                if (window.innerWidth <= 768 && navMenu) {
                    navMenu.style.display = 'none';
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuRow = document.querySelector('.menu-row');

    if (hamburger && menuRow) {
        hamburger.addEventListener('click', () => {
            menuRow.classList.toggle('active');
        });
    }
    
    // Optional: Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1200) {
                menuRow.classList.remove('active');
            }
        });
    });
});
