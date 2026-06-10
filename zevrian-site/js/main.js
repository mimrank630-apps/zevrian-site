/* Zevrian Main JavaScript */

(function() {
  'use strict';

  // --- Utility Functions ---

  function formatPrice(price) {
    return '$' + price.toFixed(2);
  }

  function renderStarRating(rating) {
    var html = '<div class="star-rating">';
    var fullStars = Math.floor(rating);
    var hasHalf = (rating - fullStars) >= 0.5;
    var emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    for (var i = 0; i < fullStars; i++) {
      html += '<svg class="star-filled" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    if (hasHalf) {
      html += '<svg class="star-filled" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5"/></svg>';
    }
    for (var j = 0; j < emptyStars; j++) {
      html += '<svg class="star-empty" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    html += '</div>';
    return html;
  }

  function renderProductCard(product) {
    var html = '<div class="product-card">';
    html += '<div class="product-card-image ' + product.categorySlug + '">';
    html += '<span>' + product.category + '</span>';
    html += '</div>';
    html += '<div class="product-card-body">';
    html += '<h3 class="product-card-name"><a href="/shop/product/?id=' + product.id + '">' + product.name + '</a></h3>';
    html += '<div class="product-card-rating">';
    html += renderStarRating(product.rating);
    html += '<span class="review-count">(' + product.reviewCount + ')</span>';
    html += '</div>';
    html += '<div class="product-card-price">' + formatPrice(product.price) + '</div>';
    html += '<div class="product-card-actions">';
    html += '<button class="btn btn-primary btn-amazon" data-product-id="' + product.id + '">Buy on Amazon</button>';
    html += '<button class="btn btn-secondary btn-buy-direct" data-product-id="' + product.id + '">Buy Direct</button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  function showToast(message, type) {
    type = type || 'success';
    var container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(function() {
      toast.style.animation = 'toastSlideOut 0.3s ease forwards';
      setTimeout(function() {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3000);
  }

  // --- Mobile Navigation ---

  function initMobileNav() {
    var hamburger = document.querySelector('.hamburger');
    var mobileNav = document.querySelector('.mobile-nav');
    var overlay = document.querySelector('.mobile-nav-overlay');

    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    if (overlay) {
      overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }

  // --- Newsletter Form ---

  function initNewsletter() {
    var form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var emailInput = form.querySelector('input[type="email"]');
      var email = emailInput.value.trim();

      if (!email) {
        showToast('Please enter your email address.', 'error');
        return;
      }

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      showToast('Thank you for subscribing! Welcome to Zevrian.', 'success');
      emailInput.value = '';
    });
  }

  // --- Product Grid Rendering ---

  function initProductGrids() {
    var products = window.zevProducts;
    if (!products) return;

    // Featured products on homepage (2 from each category)
    var featuredGrid = document.querySelector('[data-product-grid="featured"]');
    if (featuredGrid) {
      var categories = ['kitchen-dining', 'home-organization', 'travel-outdoor'];
      var featured = [];
      categories.forEach(function(cat) {
        var catProducts = products.filter(function(p) { return p.categorySlug === cat; });
        featured.push(catProducts[0], catProducts[1]);
      });
      featuredGrid.innerHTML = featured.map(renderProductCard).join('');
    }

    // All products grid
    var allGrid = document.querySelector('[data-product-grid="all"]');
    if (allGrid) {
      allGrid.innerHTML = products.map(renderProductCard).join('');
    }

    // Category-specific grids
    var categoryGrid = document.querySelector('[data-product-grid="category"]');
    if (categoryGrid) {
      var categorySlug = categoryGrid.getAttribute('data-category');
      var catProducts = products.filter(function(p) { return p.categorySlug === categorySlug; });
      categoryGrid.innerHTML = catProducts.map(renderProductCard).join('');
    }
  }

  // --- Buy Direct Button Handler ---

  function initBuyButtons() {
    document.addEventListener('click', function(e) {
      var buyDirectBtn = e.target.closest('.btn-buy-direct');
      if (buyDirectBtn) {
        var productId = buyDirectBtn.getAttribute('data-product-id');
        var products = window.zevProducts;
        if (products && window.openCheckoutModal) {
          var product = products.find(function(p) { return p.id === productId; });
          if (product) {
            window.openCheckoutModal(product);
          }
        }
        return;
      }

      var amazonBtn = e.target.closest('.btn-amazon');
      if (amazonBtn) {
        var productId = amazonBtn.getAttribute('data-product-id');
        var products = window.zevProducts;
        if (products) {
          var product = products.find(function(p) { return p.id === productId; });
          if (product && product.amazonUrl) {
            window.open(product.amazonUrl, '_blank', 'noopener,noreferrer');
          }
        }
      }
    });
  }

  // --- Contact Forms ---

  function initContactForms() {
    var forms = document.querySelectorAll('[data-contact-form]');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var isValid = true;
        var requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(function(field) {
          var group = field.closest('.form-group');
          if (!field.value.trim()) {
            isValid = false;
            if (group) group.classList.add('has-error');
          } else {
            if (group) group.classList.remove('has-error');
          }

          if (field.type === 'email' && field.value.trim()) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value.trim())) {
              isValid = false;
              if (group) group.classList.add('has-error');
            }
          }
        });

        if (isValid) {
          showToast('Your message has been sent successfully! We will get back to you soon.', 'success');
          form.reset();
        } else {
          showToast('Please fill in all required fields correctly.', 'error');
        }
      });
    });
  }

  // --- Initialize ---

  function init() {
    initMobileNav();
    initNewsletter();
    initProductGrids();
    initBuyButtons();
    initContactForms();
  }

  // Expose utilities globally
  window.showToast = showToast;
  window.renderProductCard = renderProductCard;
  window.renderStarRating = renderStarRating;
  window.formatPrice = formatPrice;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
