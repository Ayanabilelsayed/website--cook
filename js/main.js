// Main Application Logic

class CookieWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.loadComponents();
        this.setupEventListeners();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupNewsletterForm();
    }

    loadComponents() {
        this.loadRecipes();
        this.loadTips();
        this.loadTestimonials();
    }

    loadRecipes() {
        const recipesGrid = document.getElementById('recipes-grid');
        if (recipesGrid) {
            recipesGrid.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
        }
    }

    loadTips() {
        const tipsGrid = document.getElementById('tips-grid');
        if (tipsGrid) {
            tipsGrid.innerHTML = tips.map(tip => createTipCard(tip)).join('');
        }
    }

    loadTestimonials() {
        const testimonialsGrid = document.getElementById('testimonials-grid');
        if (testimonialsGrid) {
            testimonialsGrid.innerHTML = testimonials.map(testimonial => createTestimonialCard(testimonial)).join('');
        }
    }

    setupEventListeners() {
        // Add scroll animations
        this.setupScrollAnimations();
        
        // Add intersection observer for fade-in animations
        this.setupIntersectionObserver();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = anchor.getAttribute('href').substring(1);
                if (sectionId) {
                    this.scrollToSection(sectionId);
                }
            });
        });
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('mobile-menu-open');
            });

            // Close mobile menu when clicking on links
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('mobile-menu-open');
                });
            });
        }
    }

    setupNewsletterForm() {
        const form = document.getElementById('newsletter-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubmission(form);
            });
        }
    }

    setupScrollAnimations() {
        window.addEventListener('scroll', () => {
            this.handleScrollAnimations();
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all cards
        document.querySelectorAll('.cookie-card, .tip-card, .testimonial-card').forEach(card => {
            observer.observe(card);
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    handleScrollAnimations() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-section');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    }

    async handleNewsletterSubmission(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = createLoadingSpinner() + ' جاري الإرسال...';
        submitBtn.disabled = true;

        try {
            // Simulate API call
            await this.simulateAPICall();
            
            // Show success message
            this.showMessage('تم الاشتراك بنجاح! ستصلك أول رسالة قريباً.', 'success');
            form.reset();
            
        } catch (error) {
            // Show error message
            this.showMessage('حدث خطأ أثناء الاشتراك. يرجى المحاولة مرة أخرى.', 'error');
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    simulateAPICall() {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }

    showMessage(message, type) {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50';
        
        if (type === 'success') {
            messageContainer.innerHTML = createSuccessMessage(message);
        } else {
            messageContainer.innerHTML = createErrorMessage(message);
        }
        
        document.body.appendChild(messageContainer);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}

// Recipe viewing function
function viewRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        // Store recipe data for potential recipe page
        localStorage.setItem('currentRecipe', JSON.stringify(recipe));
        
        // For now, show an alert (you can replace this with navigation to recipe page)
        alert(`عرض وصفة: ${recipe.name}\n\nهذه الميزة ستكون متاحة قريباً!`);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CookieWebsite();
});

// Global scroll function for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}