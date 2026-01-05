// Payment Modal Functionality - Restored Selection Modal + Two-Column Checkout

class PaymentModal {
    constructor() {
        this.selectedMethod = null;
        this.currentProduct = {
            name: 'SneaK Product',
            price: '€0.00',
            priceNumeric: 0,
            desc: ''
        };
        this.quantity = 1;
        this.init();
    }

    init() {
        this.createModalHTML();
        this.attachEventListeners();
        this.attachPurchaseButtons();
    }

    createModalHTML() {
        const modalHTML = `
            <!-- Payment Method Selection Modal (Restored Original Design) -->
            <div id="paymentModalOverlay" class="payment-modal-overlay">
                <div id="paymentModal" class="payment-modal">
                    <div class="payment-modal-header">
                        <h2>Choose Payment Method</h2>
                        <button id="paymentModalClose" class="payment-modal-close">×</button>
                    </div>
                    <div class="payment-methods">
                        <button id="paypalMethod" class="payment-method-btn" data-method="paypal">
                            <div class="payment-method-content">
                                <div class="payment-method-icon">
                                    <img src="assets/images/logos/paypal.png" alt="PayPal">
                                </div>
                                <div class="payment-method-name">
                                    <strong>PayPal</strong>
                                    <small>Fast and secure payment</small>
                                </div>
                            </div>
                            <div class="payment-method-arrow">→</div>
                        </button>
                        <button id="mbwayMethod" class="payment-method-btn" data-method="mbway">
                            <div class="payment-method-content">
                                <div class="payment-method-icon">
                                    <img src="assets/images/logos/mbway.png" alt="MB WAY">
                                </div>
                                <div class="payment-method-name">
                                    <strong>MB WAY</strong>
                                    <small>Portuguese mobile payment</small>
                                </div>
                            </div>
                            <div class="payment-method-arrow">→</div>
                        </button>
                    </div>
                    <div class="payment-modal-footer">
                        <button id="paymentModalCancel" class="btn-cancel">Cancel</button>
                        <button id="paymentModalProceed" class="btn-proceed" disabled>Proceed</button>
                    </div>
                </div>
            </div>

            <!-- Payment Screen / Checkout Page (Two-Column Layout) -->
            <div id="paymentScreen" class="payment-screen">
                <div class="payment-screen-container">
                    <div class="payment-screen-header">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <button id="paymentScreenBack" class="payment-screen-back">←</button>
                            <h2>Checkout</h2>
                        </div>
                        <button id="paymentScreenClose" class="payment-screen-close">×</button>
                    </div>

                    <div id="checkoutForm" class="payment-form">
                        <div class="checkout-layout-grid">
                            <!-- Left Column: Order Details & Buttons -->
                            <div class="checkout-column-left">
                                <div class="checkout-section">
                                    <h3>Order Details</h3>
                                    <div class="product-info">
                                        <div class="product-info-image"><img src="assets/images/logo.ico" alt="Logo"></div>
                                        <div class="product-info-details">
                                            <div class="product-info-name" id="productName">-</div>
                                            <div class="product-info-desc" id="productDesc">-</div>
                                            <div class="product-info-price" id="productPrice">-</div>
                                        </div>
                                    </div>
                                    <div class="quantity-selector">
                                        <label for="quantityInput">Quantity:</label>
                                        <input type="number" id="quantityInput" min="1" max="10" value="1">
                                    </div>
                                </div>
                                
                                <div class="payment-actions-left">
                                    <button class="btn-pay" id="completePaymentBtn">I've Completed the Payment</button>
                                    <button class="btn-cancel" id="checkoutBackBtn">Back</button>
                                </div>
                            </div>

                            <!-- Right Column: Order Summary & Payment Info -->
                            <div class="checkout-column-right">
                                <div class="checkout-section">
                                    <h3>Order Summary</h3>
                                    <div class="order-summary">
                                        <div class="summary-row"><span>Product Price</span><span id="summaryPrice">-</span></div>
                                        <div class="summary-row"><span>Quantity</span><span id="summaryQuantity">1</span></div>
                                        <div class="summary-row total-row">
                                            <span>Total</span><span id="summaryTotal">-</span>
                                        </div>
                                    </div>
                                </div>

                                <div id="paypalSection" class="checkout-section" style="display: none;">
                                    <h3>Send Payment To</h3>
                                    <div class="payment-details">
                                        <div class="payment-detail-item">
                                            <div style="flex: 1;">
                                                <div class="payment-detail-label">PayPal Email Address</div>
                                                <div class="payment-detail-value" id="paypalEmailDisplay">sneakbypass@gmail.com</div>
                                            </div>
                                            <button class="payment-detail-copy" onclick="window.paymentModal.copyToClipboard('paypalEmailDisplay')">Copy</button>
                                        </div>
                                    </div>
                                    <div class="payment-instructions">
                                        <strong>Instructions:</strong><br>
                                        1. Send the amount to the PayPal email.<br>
                                        2. Take a screenshot of the confirmation.<br>
                                        3. Open a ticket on Discord with proof.
                                    </div>
                                </div>

                                <div id="mbwaySection" class="checkout-section" style="display: none;">
                                    <div class="payment-instructions">
                                        <strong>Instructions:</strong><br>
                                        1. Join our <strong>Discord Server.</strong><br>
                                        2. Open a Support Ticket.<br>
                                        3. Follow the Instructions Given.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="paymentSuccess" class="payment-success">
                        <div class="payment-success-icon">✓</div>
                        <h3>Payment Submitted!</h3>
                        <p>Thank you for your purchase. Your payment has been submitted.</p>
                        <div class="payment-success-steps">
                            <div class="success-step"><div class="success-step-number">1</div><div class="success-step-text">Join our <strong>Discord Server.</strong></div></div>
                            <div class="success-step"><div class="success-step-number">2</div><div class="success-step-text">Open a <strong>Support Ticket</strong> with <strong>Payment Confirmation.</strong></div></div>
                            <div class="success-step"><div class="success-step-number">3</div><div class="success-step-text">Our team will verify the payment and send the <strong>loader.</strong></div></div>
                        </div>
                        <button class="btn-done" id="successDoneBtn">Done</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    attachEventListeners() {
        const overlay = document.getElementById('paymentModalOverlay');
        const screen = document.getElementById('paymentScreen');
        const paypalBtn = document.getElementById('paypalMethod');
        const mbwayBtn = document.getElementById('mbwayMethod');
        const proceedBtn = document.getElementById('paymentModalProceed');
        const quantityInput = document.getElementById('quantityInput');

        document.getElementById('paymentModalClose').onclick = () => this.closeModal();
        document.getElementById('paymentModalCancel').onclick = () => this.closeModal();
        document.getElementById('paymentScreenClose').onclick = () => this.closeAll();
        document.getElementById('paymentScreenBack').onclick = () => this.goBack();
        document.getElementById('checkoutBackBtn').onclick = () => this.goBack();
        document.getElementById('successDoneBtn').onclick = () => this.closeAll();

        paypalBtn.onclick = () => {
            this.selectedMethod = 'paypal';
            paypalBtn.classList.add('active');
            mbwayBtn.classList.remove('active');
            proceedBtn.disabled = false;
        };

        mbwayBtn.onclick = () => {
            this.selectedMethod = 'mbway';
            mbwayBtn.classList.add('active');
            paypalBtn.classList.remove('active');
            proceedBtn.disabled = false;
        };

        proceedBtn.onclick = () => {
            overlay.classList.remove('active');
            screen.classList.add('active');
            this.updateUI();
        };

        quantityInput.oninput = () => {
            this.quantity = parseInt(quantityInput.value) || 1;
            this.updateUI();
        };

        document.getElementById('completePaymentBtn').onclick = () => {
            document.getElementById('checkoutForm').style.display = 'none';
            document.getElementById('paymentSuccess').classList.add('active');
        };
    }

    attachPurchaseButtons() {
        document.querySelectorAll('.product-cta .btn').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const card = btn.closest('.product-card');
                const name = card.querySelector('.title').childNodes[0].textContent.trim();
                const priceStr = card.querySelector('.amount').textContent.trim();
                const desc = card.querySelector('.desc').textContent.trim();
                
                this.currentProduct = {
                    name: name,
                    price: priceStr,
                    priceNumeric: parseFloat(priceStr.replace('€', '').replace(',', '.')),
                    desc: desc
                };
                this.quantity = 1;
                document.getElementById('quantityInput').value = 1;
                document.getElementById('paymentModalOverlay').classList.add('active');
            };
        });
    }

    updateUI() {
        if (!this.currentProduct) return;

        document.getElementById('productName').textContent = this.currentProduct.name;
        document.getElementById('productDesc').textContent = this.currentProduct.desc;
        document.getElementById('productPrice').textContent = this.currentProduct.price;
        
        const total = this.currentProduct.priceNumeric * this.quantity;
        document.getElementById('summaryPrice').textContent = this.currentProduct.price;
        document.getElementById('summaryQuantity').textContent = this.quantity;
        document.getElementById('summaryTotal').textContent = `€${total.toFixed(2)}`;

        const paypalSec = document.getElementById('paypalSection');
        const mbwaySec = document.getElementById('mbwaySection');

        if (this.selectedMethod === 'paypal') {
            paypalSec.style.display = 'block';
            mbwaySec.style.display = 'none';
        } else {
            mbwaySec.style.display = 'block';
            paypalSec.style.display = 'none';
        }
    }

    goBack() {
        document.getElementById('paymentScreen').classList.remove('active');
        document.getElementById('paymentModalOverlay').classList.add('active');
    }

    closeModal() {
        document.getElementById('paymentModalOverlay').classList.remove('active');
    }

    closeAll() {
        document.getElementById('paymentScreen').classList.remove('active');
        document.getElementById('paymentModalOverlay').classList.remove('active');
        document.getElementById('checkoutForm').style.display = 'block';
        document.getElementById('paymentSuccess').classList.remove('active');
    }

    copyToClipboard(id) {
        const text = document.getElementById(id).textContent;
        navigator.clipboard.writeText(text).then(() => {
            const btn = event.target;
            const old = btn.textContent;
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = old, 2000);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.paymentModal = new PaymentModal();
});
