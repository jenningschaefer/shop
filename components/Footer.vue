<script setup>
</script>

<template>
    <div class="footer">
        <div class="footer_link-container">
            <div class="footer_links">
                <NuxtLink to="/" class="footer_links_link">
                    <p class="links">Service</p>
                    <svg class="footer_links_link_icon">
                        <use href="~/assets/svg/icons.svg#link"/>
                    </svg>
                </NuxtLink>
                <NuxtLink to="/" class="footer_links_link">
                    <p class="links">Legal</p>
                    <svg class="footer_links_link_icon">
                        <use href="~/assets/svg/icons.svg#link"/>
                    </svg>
                </NuxtLink>
            </div>
            <div class="footer_links">
                <NuxtLink to="/" class="footer_links_link">
                    <p class="links">Payment</p>
                    <svg class="footer_links_link_icon">
                        <use href="~/assets/svg/icons.svg#link"/>
                    </svg>
                </NuxtLink>
                <a href="" class="footer_links_link">
                    <p class="links">Design</p>
                    <svg class="footer_links_link_icon">
                        <use href="~/assets/svg/icons.svg#link"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="footer_newsletter">
            <div class="subtitle-big">
                Join Our Newsletter
            </div>
            <div class="footer_newsletter_input">
                <input class="input-dark input-newsletter" type="text" placeholder="E-Mail Address">
                <a click="">
                    <svg class="footer_links_link_icon">
                        <use href="~/assets/svg/icons.svg#link"/>
                    </svg>
                </a>
            </div>
            <div class="footer_newsletter_disclaimer">
                <small>
                    *Alle Preise inkl. Mwst., zzgl. anfallender Versand- und Lieferkosten.
                </small>
            </div>
        </div>
    </div>
</template>