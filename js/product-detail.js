/* Zevrian Product Detail Page */

(function() {
  'use strict';

  // --- Utility Functions (local copies in case globals not available) ---

  function formatPrice(price) {
    if (window.formatPrice) return window.formatPrice(price);
    return '$' + price.toFixed(2);
  }

  function renderStarRating(rating) {
    if (window.renderStarRating) return window.renderStarRating(rating);
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

  // --- Get product from URL ---

  function getProductIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  function findProduct(productId) {
    var products = window.zevProducts || [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        return products[i];
      }
    }
    return null;
  }

  // --- Get category URL ---

  function getCategoryUrl(categorySlug) {
    return '/shop/' + categorySlug + '/';
  }

  // --- Render breadcrumb ---

  function renderBreadcrumb(product) {
    var html = '<nav class="breadcrumb" aria-label="Breadcrumb">';
    html += '<ol class="breadcrumb-list">';
    html += '<li class="breadcrumb-item"><a href="/">Home</a></li>';
    html += '<li class="breadcrumb-item"><a href="/shop/">Shop</a></li>';
    html += '<li class="breadcrumb-item"><a href="' + getCategoryUrl(product.categorySlug) + '">' + product.category + '</a></li>';
    html += '<li class="breadcrumb-item breadcrumb-current">' + product.name + '</li>';
    html += '</ol>';
    html += '</nav>';
    return html;
  }

  // --- Render product image placeholder ---

  function renderProductImage(product) {
    var html = '<div class="product-detail-image ' + product.categorySlug + '">';
    html += '<span class="product-detail-image-label">' + product.category + '</span>';
    html += '</div>';
    return html;
  }

  // --- Render features list ---

  function renderFeatures(features) {
    var html = '<ul class="product-features-list">';
    for (var i = 0; i < features.length; i++) {
      html += '<li class="product-feature-item">';
      html += '<svg class="feature-checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
      html += '<span>' + features[i] + '</span>';
      html += '</li>';
    }
    html += '</ul>';
    return html;
  }

  // --- Render quantity selector ---

  function renderQuantitySelector() {
    var html = '<div class="quantity-selector">';
    html += '<label class="quantity-label" for="product-quantity">Quantity</label>';
    html += '<select class="quantity-select form-select" id="product-quantity">';
    for (var i = 1; i <= 10; i++) {
      html += '<option value="' + i + '">' + i + '</option>';
    }
    html += '</select>';
    html += '</div>';
    return html;
  }

  // --- Render related products ---

  function renderRelatedProducts(product) {
    var products = window.zevProducts || [];
    var related = [];

    for (var i = 0; i < products.length; i++) {
      if (products[i].categorySlug === product.categorySlug && products[i].id !== product.id) {
        related.push(products[i]);
      }
      if (related.length >= 3) break;
    }

    if (related.length === 0) return '';

    var html = '<section class="related-products">';
    html += '<h2 class="related-products-title">Related Products</h2>';
    html += '<div class="related-products-grid">';

    for (var j = 0; j < related.length; j++) {
      var p = related[j];
      html += '<a href="/shop/product/?id=' + p.id + '" class="related-product-card">';
      html += '<div class="related-product-image ' + p.categorySlug + '">';
      html += '<span>' + p.category + '</span>';
      html += '</div>';
      html += '<div class="related-product-body">';
      html += '<h4 class="related-product-name">' + p.name + '</h4>';
      html += '<div class="related-product-rating">';
      html += renderStarRating(p.rating);
      html += '<span class="review-count">(' + p.reviewCount + ')</span>';
      html += '</div>';
      html += '<div class="related-product-price">' + formatPrice(p.price) + '</div>';
      html += '</div>';
      html += '</a>';
    }

    html += '</div>';
    html += '</section>';
    return html;
  }

  // --- Render full product detail ---

  function renderProductDetail(product) {
    var html = '';

    // Breadcrumb
    html += renderBreadcrumb(product);

    // Product detail layout
    html += '<div class="product-detail-layout">';

    // Image column
    html += '<div class="product-detail-col-image">';
    html += renderProductImage(product);
    html += '</div>';

    // Info column
    html += '<div class="product-detail-col-info">';
    html += '<h1 class="product-detail-name">' + product.name + '</h1>';

    // Rating
    html += '<div class="product-detail-rating">';
    html += renderStarRating(product.rating);
    html += '<span class="product-detail-review-count">(' + product.reviewCount + ' reviews)</span>';
    html += '</div>';

    // Price
    html += '<div class="product-detail-price">' + formatPrice(product.price) + '</div>';

    // Description
    html += '<p class="product-detail-description">' + product.description + '</p>';

    // Features
    html += '<div class="product-detail-features">';
    html += '<h3 class="product-detail-features-title">Features</h3>';
    html += renderFeatures(product.features);
    html += '</div>';

    // Quantity selector
    html += renderQuantitySelector();

    // Action buttons
    html += '<div class="product-detail-actions">';
    html += '<a href="' + (product.amazonUrl || 'https://www.amazon.com/dp/PLACEHOLDER_ASIN') + '" class="btn btn-primary btn-lg btn-amazon-detail" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>';
    html += '<button class="btn btn-secondary btn-lg btn-buy-direct-detail" data-product-id="' + product.id + '">Buy Direct</button>';
    html += '</div>';

    html += '</div>'; // close info column
    html += '</div>'; // close layout

    // Related products
    html += renderRelatedProducts(product);

    return html;
  }

  // --- Render not found ---

  function renderNotFound() {
    var html = '<div class="product-not-found">';
    html += '<h1>Product Not Found</h1>';
    html += '<p>Sorry, we could not find the product you are looking for.</p>';
    html += '<a href="/shop/" class="btn btn-primary">Back to Shop</a>';
    html += '</div>';
    return html;
  }

  // --- Set meta tags ---

  function setMetaTags(product) {
    // Update page title
    document.title = product.name + ' | Zevrian';

    // Set og:title
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', product.name + ' | Zevrian');
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', product.name + ' | Zevrian');
      document.head.appendChild(ogTitle);
    }

    // Set og:description
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', product.description);
    } else {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      ogDesc.setAttribute('content', product.description);
      document.head.appendChild(ogDesc);
    }

    // Update standard description meta
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', product.description);
    }
  }

  // --- Initialize Buy Direct button handler ---

  function initBuyDirectButton() {
    var btn = document.querySelector('.btn-buy-direct-detail');
    if (!btn) return;

    btn.addEventListener('click', function() {
      var productId = this.getAttribute('data-product-id');
      var product = findProduct(productId);
      if (product && window.openCheckoutModal) {
        window.openCheckoutModal(product);
      }
    });
  }

  // --- Main init ---

  function init() {
    var container = document.getElementById('product-detail-container');
    if (!container) return;

    var productId = getProductIdFromUrl();

    if (!productId) {
      container.innerHTML = renderNotFound();
      document.title = 'Product Not Found | Zevrian';
      return;
    }

    var product = findProduct(productId);

    if (!product) {
      container.innerHTML = renderNotFound();
      document.title = 'Product Not Found | Zevrian';
      return;
    }

    // Render the product detail
    container.innerHTML = renderProductDetail(product);

    // Set meta tags
    setMetaTags(product);

    // Initialize buy direct button
    initBuyDirectButton();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
