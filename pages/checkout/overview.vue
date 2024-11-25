<script setup>
definePageMeta({
    layout: 'checkout',
});
</script>

<template>
    <div class="overview">
        <h1 class="checkout_title">Overview</h1>
        <div class="overview_container">
            <div class="overview_accordion">
                <UIAccordion>
                    <!-- address -->
                    <UIAccordion-item>
                        <template #accordion-trigger>
                            <div class="overview_heading">
                                <span class="links">Address</span>
                            </div>
                        </template>
                        <template #accordion-content>
                            <div class="overview_accordion-address">
                                <div class="overview_accordion-address-container">
                                    <h3 class="overview_accordion-address-title">Shipping Address</h3>
                                    <address>
                                        Mr John Doe <br>
                                        mail@to.me <br>
                                        Stree 45 <br>
                                        12345 City <br>
                                        Germany
                                    </address>
                                </div>
                                <div class="overview_accordion-address-container">
                                    <h3 class="overview_accordion-address-title">Billing Address</h3>
                                    <address>
                                        Mr John Doe <br>
                                        mail@to.me <br>
                                        Stree 45 <br>
                                        12345 City <br>
                                        Germany
                                    </address>
                                </div>
                            </div>
                        </template>
                    </UIAccordion-item>

                    <!-- products -->
                    <UIAccordion-item>
                        <template #accordion-trigger>
                            <div class="overview_heading">
                                <span class="links">Products</span>
                            </div>
                        </template>
                        <template #accordion-content>
                            <div class="overview_accordion-products">
                                <div class="overview_accordion-products-name">
                                    Hermann D. Strauss Chair
                                </div>
                                <div class="overview_accordion-products-price">
                                    <span>x2</span>
                                    <span>75.00$</span>
                                </div>
                            </div>
                        </template>
                    </UIAccordion-item>

                    <!-- payment -->
                    <UIAccordion-item>
                        <template #accordion-trigger>
                            <div class="overview_heading">
                                <span class="links">Payment</span>
                            </div>
                        </template>
                        <template #accordion-content>
                            <div class="overview_accordion-payment">
                                <div class="overview_accordion-payment-name">
                                    Credit Card
                                </div>
                                <div class="overview_accordion-payment-price">
                                    <span>5.00$</span>
                                </div>
                            </div>
                        </template>
                    </UIAccordion-item>
                </UIAccordion>
            </div>
            <div class="overview_address">
                <div class="overview_heading">
                    <span class="links">Address</span>
                </div>
                <div class="overview_accordion-address">
                    <div class="overview_accordion-address-container">
                        <h3 class="overview_accordion-address-title">Shipping Address</h3>
                        <address>
                            Mr John Doe <br>
                            mail@to.me <br>
                            Stree 45 <br>
                            12345 City <br>
                            Germany
                        </address>
                    </div>
                    <div class="overview_accordion-address-container">
                        <h3 class="overview_accordion-address-title">Billing Address</h3>
                        <address>
                            Mr John Doe <br>
                            mail@to.me <br>
                            Stree 45 <br>
                            12345 City <br>
                            Germany
                        </address>
                    </div>
                </div>
            </div>
            <div class="overview_product">
                <div class="overview_heading">
                    <span class="links">Products</span>
                </div>
                <div class="overview_accordion-products">
                    <div class="overview_accordion-products-name">
                        Hermann D. Strauss Chair
                    </div>
                    <div class="overview_accordion-products-price">
                        <span>x2</span>
                        <span>75.00$</span>
                    </div>
                </div>
            </div>
            <div class="overview_payment">
                <span>Credit Card</span>
                <span>5.00$</span>
            </div>
            <div class="overview_shipping">
                <span>Shipping</span>
                <span>5.00$</span>
            </div>
            <div class="overview_total">
                <span class="overview_total-desc">Total</span>
                <span class="overview_total-amount">150.00$</span>
            </div>
            <div class="overview_legal">
                <a class="overview_legal-tt">
                    <svg class="overview_legal-tt_icon">
                        <use href="~/assets/svg/icons.svg#download" />
                    </svg>
                    <div class="overview_legal-tt-text">Terms & conditions</div>
                </a>
                <div class="overview_legal-accept">
                    <label>
                        <input type="checkbox">
                        <span class="space" />I accept all Terms and Conditions
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>