document.addEventListener('DOMContentLoaded', function() {
// Mobile Navigation
    const navLinks = document.getElementById('navLinks');
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');

    openMenu.addEventListener('click', function() {
        navLinks.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });

// Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

// Reviews Slider
    const reviewCards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');
    let currentIndex = 0;

    function showReview(index) {
        reviewCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        reviewCards[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    prevBtn.addEventListener('click', function() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = reviewCards.length - 1;
        showReview(newIndex);
    });

    nextBtn.addEventListener('click', function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= reviewCards.length) newIndex = 0;
        showReview(newIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showReview(index);
        });
    });

// Auto slide reviews
    setInterval(function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= reviewCards.length) newIndex = 0;
        showReview(newIndex);
    }, 5000);

// Form Submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

// Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

// In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, phone, message });

// Show success message
        alert('Thank you for your message! We will get back to you soon.');

// Reset form
        contactForm.reset();
    });

// Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

// Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.backgroundColor = 'var(--background-light)';
            nav.style.boxShadow = '0 2px 10px var(--shadow-color)';
        }
    });
});