/**
 * ANQR Theme - Main JavaScript
 * Based on Figma design at https://siren-door-11288878.figma.site/
 */

(function() {
  'use strict';

  /**
   * Mobile Navigation Toggle
   */
  function initMobileNav() {
    const toggleButton = document.querySelector('[data-mobile-toggle]');
    const mobileNav = document.querySelector('[data-mobile-nav]');
    
    if (!toggleButton || !mobileNav) return;
    
    toggleButton.addEventListener('click', function() {
      const isOpen = mobileNav.classList.contains('is-open');
      
      if (isOpen) {
        mobileNav.classList.remove('is-open');
        toggleButton.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.classList.add('is-open');
        toggleButton.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }

  /**
   * Intersection Observer for Animations
   */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
  }

  /**
   * Product Card Hover Effects
   */
  function initProductCardHover() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      const primaryImage = card.querySelector('.product-card__image--primary');
      const secondaryImage = card.querySelector('.product-card__image--secondary');
      
      if (!secondaryImage) return;
      
      card.addEventListener('mouseenter', () => {
        secondaryImage.style.opacity = '1';
      });
      
      card.addEventListener('mouseleave', () => {
        secondaryImage.style.opacity = '0';
      });
    });
  }

  /**
   * Newsletter Form Handler
   */
  function initNewsletterForm() {
    const forms = document.querySelectorAll('.newsletter__form');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        // Form submission is handled by Shopify
        // This is just for potential client-side validation
        const email = form.querySelector('input[type="email"]');
        
        if (!email.value.trim()) {
          e.preventDefault();
          email.focus();
        }
      });
    });
  }

  /**
   * Color Swatch Hover Effect
   */
  function initColorSwatches() {
    const swatches = document.querySelectorAll('.color-swatches__item');
    
    swatches.forEach(swatch => {
      const swatchCircle = swatch.querySelector('.color-swatches__swatch');
      
      swatch.addEventListener('mouseenter', () => {
        swatchCircle.style.transform = 'scale(1.1)';
      });
      
      swatch.addEventListener('mouseleave', () => {
        swatchCircle.style.transform = 'scale(1)';
      });
    });
  }

  /**
   * Lazy Load Images
   */
  function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      return;
    }
    
    // Fallback for browsers without native lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Initialize all components
   */
  function init() {
    initMobileNav();
    initSmoothScroll();
    initScrollAnimations();
    initProductCardHover();
    initNewsletterForm();
    initColorSwatches();
    initLazyLoading();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
