<script setup></script>

<template>
    <div class="menu">
        <div class="menu_links">
            <NuxtLink to="/products/list/chairs" class="menu_links_link">
                <p>Home</p>
                <svg class="menu_links_link_icon">
                    <use href="~/assets/svg/icons.svg#link" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/products/list" class="menu_links_link">
                <p>Products</p>
                <svg class="menu_links_link_icon">
                    <use href="~/assets/svg/icons.svg#link" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/account" class="menu_links_link">
                <p>Account</p>
                <svg class="menu_links_link_icon">
                    <use href="~/assets/svg/icons.svg#link" />
                </svg>
            </NuxtLink>
        </div>
        <div class="menu_bottom">
            <div class="menu_bottom_newsletter">
                <div class="subtitle-big">
                    Join Our Newsletter
                </div>
                <div class="menu_bottom_newsletter_input">
                    <input class="input-newsletter" type="text" placeholder="E-Mail Address">
                    <a click="">
                        <svg class="menu_bottom_newsletter_icon">
                            <use href="~/assets/svg/icons.svg#link" />
                        </svg>
                    </a>
                </div>
            </div>
            <NuxtLink to="/products/list/chairs" class="menu_links_link">
                <p>DESIGN</p>
                <svg class="menu_links_link_icon">
                    <use href="~/assets/svg/icons.svg#link" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>