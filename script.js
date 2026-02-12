document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuRow = document.querySelector('.menu-row');
    const icon = hamburger ? hamburger.querySelector('i') : null;

    if (hamburger && menuRow) {
        hamburger.addEventListener('click', () => {
            // CSS class 'active' ko toggle karega
            menuRow.classList.toggle('active');
            
            // Icon ko badlega (Bars to X)
            if (icon) {
                if (menuRow.classList.contains('active')) {
                    icon.classList.replace('fa-bars', 'fa-times');
                } else {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    }

    // Link click hote hi menu band ho jaye
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1200) {
                menuRow.classList.remove('active');
                if (icon) icon.classList.replace('fa-times', 'fa-bars');
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
