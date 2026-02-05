document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle mobile menu visibility
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                // Apply mobile styles dynamically
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px'; // Adjust based on your navbar height
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#ffffff';
                navMenu.style.padding = '20px 0';
                navMenu.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                navMenu.style.zIndex = '1000';
                navMenu.style.textAlign = 'center';
            }
        });
    }

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
