<script setup>
definePageMeta({
    layout: 'checkout',
});

const paymentMethods = [
    {
        name: "Paypal",
        fees: "2.50$",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        name: "Credit Card",
        fees: "2.50$",
        desciption: "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. Your information is securely encrypted and protected for a safe and seamless transaction experience. For any assistance or inquiries, our customer support team is available 24/7."
    },
    {
        name: "Apple/Google Pay",
        fees: "2.50$",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
];

const paymentIndex = ref(0);
</script>

<template>
    <div class="payment">
        <h1 class="checkout_title">Payment</h1>
        <div class="payment_methods">
            <template v-for="(payment, index) in paymentMethods" :key="index">
                <div class="payment_methods-method" :class="paymentIndex == index ? 'active' : ''"
                    @click="paymentIndex = index">{{ payment.name }}</div>
            </template>
        </div>
        <div class="payment_fees">Fees: {{ paymentMethods[paymentIndex].fees }}</div>
        <div class="payment_description">
            {{ paymentMethods[paymentIndex].desciption }}
        </div>
    </div>
</template>