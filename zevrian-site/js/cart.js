/* Zevrian Checkout Modal & Cart */

(function() {
  'use strict';

  var modalHTML = '' +
    '<div class="modal-overlay" id="checkout-modal">' +
    '  <div class="modal">' +
    '    <div class="modal-header">' +
    '      <h3>Checkout</h3>' +
    '      <button class="modal-close" id="modal-close-btn" aria-label="Close">&times;</button>' +
    '    </div>' +
    '    <div class="modal-body">' +
    '      <div class="modal-product-info" id="modal-product-info">' +
    '        <div class="product-thumb" id="modal-thumb"></div>' +
    '        <div>' +
    '          <div class="modal-product-name" id="modal-product-name"></div>' +
    '          <div class="modal-product-price" id="modal-product-price"></div>' +
    '        </div>' +
    '      </div>' +
    '      <form id="checkout-form">' +
    '        <div class="card-form-group">' +
    '          <label class="card-input-label" for="card-name">Cardholder Name</label>' +
    '          <input type="text" class="card-input" id="card-name" placeholder="John Doe" autocomplete="cc-name">' +
    '        </div>' +
    '        <div class="card-form-group">' +
    '          <label class="card-input-label" for="card-number">Card Number</label>' +
    '          <input type="text" class="card-input" id="card-number" placeholder="1234 5678 9012 3456" maxlength="19" autocomplete="cc-number">' +
    '        </div>' +
    '        <div class="card-form-row">' +
    '          <div class="card-form-group">' +
    '            <label class="card-input-label" for="card-expiry">Expiry</label>' +
    '            <input type="text" class="card-input" id="card-expiry" placeholder="MM/YY" maxlength="5" autocomplete="cc-exp">' +
    '          </div>' +
    '          <div class="card-form-group">' +
    '            <label class="card-input-label" for="card-cvv">CVV</label>' +
    '            <input type="password" class="card-input" id="card-cvv" placeholder="***" maxlength="4" autocomplete="cc-csc">' +
    '          </div>' +
    '        </div>' +
    '        <button type="submit" class="btn btn-primary btn-full btn-lg" id="btn-complete-purchase">Complete Purchase</button>' +
    '      </form>' +
    '      <div class="divider">or</div>' +
    '      <button class="btn-paypal" id="btn-paypal">PayPal</button>' +
    '    </div>' +
    '  </div>' +
    '</div>';

  // Inject modal HTML into page
  function injectModal() {
    if (document.getElementById('checkout-modal')) return;
    var div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div.firstElementChild);
    initModalEvents();
  }

  // Format card number with spaces
  function formatCardNumber(value) {
    var cleaned = value.replace(/\D/g, '');
    var groups = [];
    for (var i = 0; i < cleaned.length && i < 16; i += 4) {
      groups.push(cleaned.substring(i, i + 4));
    }
    return groups.join(' ');
  }

  // Format expiry as MM/YY
  function formatExpiry(value) {
    var cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  }

  // Validate card form
  function validateCardForm() {
    var isValid = true;
    var name = document.getElementById('card-name');
    var number = document.getElementById('card-number');
    var expiry = document.getElementById('card-expiry');
    var cvv = document.getElementById('card-cvv');

    // Reset errors
    [name, number, expiry, cvv].forEach(function(el) {
      el.classList.remove('error');
    });

    if (!name.value.trim()) {
      name.classList.add('error');
      isValid = false;
    }

    var cardDigits = number.value.replace(/\D/g, '');
    if (cardDigits.length < 13 || cardDigits.length > 16) {
      number.classList.add('error');
      isValid = false;
    }

    var expiryDigits = expiry.value.replace(/\D/g, '');
    if (expiryDigits.length !== 4) {
      expiry.classList.add('error');
      isValid = false;
    } else {
      var month = parseInt(expiryDigits.substring(0, 2), 10);
      if (month < 1 || month > 12) {
        expiry.classList.add('error');
        isValid = false;
      }
    }

    var cvvDigits = cvv.value.replace(/\D/g, '');
    if (cvvDigits.length < 3 || cvvDigits.length > 4) {
      cvv.classList.add('error');
      isValid = false;
    }

    return isValid;
  }

  // Open checkout modal
  function openCheckoutModal(product) {
    injectModal();
    var overlay = document.getElementById('checkout-modal');
    var thumb = document.getElementById('modal-thumb');
    var nameEl = document.getElementById('modal-product-name');
    var priceEl = document.getElementById('modal-product-price');

    // Set product info
    thumb.className = 'product-thumb ' + product.categorySlug;
    nameEl.textContent = product.name;
    priceEl.textContent = window.formatPrice ? window.formatPrice(product.price) : ('$' + product.price.toFixed(2));

    // Reset form
    var form = document.getElementById('checkout-form');
    if (form) form.reset();
    overlay.querySelectorAll('.card-input').forEach(function(el) {
      el.classList.remove('error');
    });

    // Show modal
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close checkout modal
  function closeCheckoutModal() {
    var overlay = document.getElementById('checkout-modal');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Initialize modal event listeners
  function initModalEvents() {
    var overlay = document.getElementById('checkout-modal');
    if (!overlay) return;

    // Close button
    var closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeCheckoutModal);
    }

    // Click outside
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeCheckoutModal();
      }
    });

    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeCheckoutModal();
      }
    });

    // Card number formatting
    var cardNumber = document.getElementById('card-number');
    if (cardNumber) {
      cardNumber.addEventListener('input', function() {
        var cursorPos = this.selectionStart;
        var oldLength = this.value.length;
        this.value = formatCardNumber(this.value);
        var newLength = this.value.length;
        var newPos = cursorPos + (newLength - oldLength);
        this.setSelectionRange(newPos, newPos);
      });
    }

    // Expiry formatting
    var cardExpiry = document.getElementById('card-expiry');
    if (cardExpiry) {
      cardExpiry.addEventListener('input', function() {
        this.value = formatExpiry(this.value);
      });
    }

    // CVV - only allow numbers
    var cardCvv = document.getElementById('card-cvv');
    if (cardCvv) {
      cardCvv.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
      });
    }

    // Form submission
    var form = document.getElementById('checkout-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateCardForm()) {
          var btn = document.getElementById('btn-complete-purchase');
          btn.textContent = 'Processing...';
          btn.disabled = true;
          setTimeout(function() {
            closeCheckoutModal();
            btn.textContent = 'Complete Purchase';
            btn.disabled = false;
            if (window.showToast) {
              window.showToast('Order placed successfully! Thank you for your purchase.', 'success');
            }
          }, 1500);
        } else {
          if (window.showToast) {
            window.showToast('Please check your card details and try again.', 'error');
          }
        }
      });
    }

    // PayPal button
    var paypalBtn = document.getElementById('btn-paypal');
    if (paypalBtn) {
      paypalBtn.addEventListener('click', function() {
        if (window.showToast) {
          window.showToast('PayPal checkout coming soon.', 'info');
        }
      });
    }
  }

  // Expose globally
  window.openCheckoutModal = openCheckoutModal;
  window.closeCheckoutModal = closeCheckoutModal;

})();
