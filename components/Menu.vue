<script setup></script>

<template>
    <div class="menu">
        <div class="menu_links">
            <NuxtLink to="/products/list/chairs" class="menu_links_link">
                <p>Chairs</p>
                <svg class="menu_links_link_icon">
                    <use href="~/assets/svg/icons.svg#link" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/products/list/tables" class="menu_links_link">
                <p>Tables</p>
                <svg class="menu_links_link_icon">
                    <use href="~/assets/svg/icons.svg#link" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/products/list/ligting" class="menu_links_link">
                <p>Lighting</p>
                <svg class="menu_links_link_icon">
                    <use href="~/assets/svg/icons.svg#link" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/products/list/decoration" class="menu_links_link">
                <p>Decoration</p>
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