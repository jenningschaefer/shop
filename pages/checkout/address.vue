<script setup>
definePageMeta({
    layout: 'checkout',
});
</script>

<template>
    <div class="address">
        <h1 class="checkout_title">Address</h1>
        <UIAddress-tabs>
            <UIAddress-item active="true" title="Billing"> 
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
            </UIAddress-item>
            <UIAddress-item title="Shipping">
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
            </UIAddress-item>
        </UIAddress-tabs>
    </div>
</template>