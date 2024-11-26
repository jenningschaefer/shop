<script setup>
definePageMeta({
    layout: 'checkout',
});
</script>

<template>
    <div class="address">
        <h1 class="checkout_title">Address</h1>
        <div class="address-container">
            <UIAddress-tabs>
                <UIAddress-item active="true" title="Shipping">
                    <template #heading>Shipping</template>
                    <template #content>
                        <form action="">
                            <div class="login_forms-group">
                                <input class="" type="text" placeholder="First Name">
                                <input class="" type="text" placeholder="Name">
                                <input class="" type="email" placeholder="E-Mail Address">
                                <input class="" type="text" placeholder="Country">
                                <input class="" type="text" placeholder="Street">
                                <input class="" type="text" placeholder="House No.">
                                <input class="" type="text" placeholder="Zip Code">
                                <input class="" type="text" placeholder="City">
                                <!-- TODO Vorwahl + Phone -->
                            </div>
                        </form>
                    </template>
                </UIAddress-item>
                <UIAddress-item title="Billing">
                    <template #heading>Billing</template>
                    <template #content>
                        <form action="">
                            <div class="login_forms-group">
                                <label>
                                    <input type="checkbox">
                                    Same as Billing
                                </label>
                                <input class="" type="text" placeholder="First Name">
                                <input class="" type="text" placeholder="Name">
                                <input class="" type="email" placeholder="E-Mail Address">
                                <input class="" type="text" placeholder="Country">
                                <input class="" type="text" placeholder="Street">
                                <input class="" type="text" placeholder="House No.">
                                <input class="" type="text" placeholder="Zip Code">
                                <input class="" type="text" placeholder="City">
                                <!-- TODO Vorwahl + Phone -->
                            </div>
                        </form>
                    </template>
                </UIAddress-item>
            </UIAddress-tabs>
        </div>
    </div>
</template>