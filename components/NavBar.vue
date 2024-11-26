<script setup>
const router = useRouter();
const route = useRoute();

const subnavIcons = ref([
    {
        svg: "~/assets/svg/icons.svg#lang-de",
        click: "",
    },
    {
        svg: "~/assets/svg/icons.svg#cart",
        click: "",
    },
    {
        svg: "~/assets/svg/icons.svg#heart",
        click: "",
    },
    {
        svg: "assets/svg/icons.svg#user",
        click: "",
    },
]);


</script>

<template>
    <div>
        <div class="navBar">
            <NuxtLink to="/" class="navBar_home">
                <svg class="navBar_logo">
                    <use href="~/assets/svg/logos.svg#logo" />
                </svg>
            </NuxtLink>
            <div class="navBar_icons">
                <template v-if="route.name === 'products-name-id'">
                    <a @click="router.back()">
                        <svg class="subNav_icon">
                            <use href="~/assets/svg/icons.svg#arrow-left" />
                        </svg>
                    </a>
                </template>
                <template v-else>
                    <a @click="">
                        <svg class="subNav_icon">
                            <use href="~/assets/svg/icons.svg#lang-de" />
                        </svg>
                    </a>
                </template>
                <a @click="">
                    <svg class="navBar_icons_icon">
                        <use href="~/assets/svg/icons.svg#cart" />
                    </svg>
                </a>
                <a @click="">
                    <svg class="navBar_icons_icon">
                        <use href="~/assets/svg/icons.svg#heart" />
                    </svg>
                </a>
                <NuxtLink to="/login">
                    <svg class="navBar_icons_icon">
                        <use href="~/assets/svg/icons.svg#user" />
                    </svg>
                </NuxtLink>
            </div>
            <div class="navBar_menu">
                <a>menu</a>
            </div>
        </div>
        <div class="subNav" v-if="!route.name.includes('account')">
            <template v-if="route.name === 'products-name-id'">
                <a @click="router.back()">
                    <svg class="subNav_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </a>
            </template>
            <template v-else>
                <a @click="">
                    <svg class="subNav_icon">
                        <use href="~/assets/svg/icons.svg#lang-de" />
                    </svg>
                </a>
            </template>
            <a @click="">
                <svg class="subNav_icon">
                    <use href="~/assets/svg/icons.svg#cart" />
                </svg>
            </a>
            <a @click="">
                <svg class="subNav_icon">
                    <use href="~/assets/svg/icons.svg#heart" />
                </svg>
            </a>
            <NuxtLink to="/login">
                <svg class="subNav_icon">
                    <use href="~/assets/svg/icons.svg#user" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>