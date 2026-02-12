document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuRow = document.querySelector('.menu-row');
    const icon = hamburger ? hamburger.querySelector('i') : null;

    if (hamburger && menuRow) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the menu container
            menuRow.classList.toggle('active');
            
            // Toggle icon between 'bars' and 'times' (X)
            if (icon) {
                if (menuRow.classList.contains('active')) {
                    icon.classList.replace('fa-bars', 'fa-times');
                } else {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    }

    // Close the menu automatically when a link is clicked
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
