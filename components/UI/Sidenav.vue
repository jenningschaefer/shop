<script setup>

const active = defineModel();

</script>

<template>
    <div v-if="active" class="overlay"></div>
    <div id="mySidenav" class="sidenav" :class="active ? 'open' : ''">
        <div class="sidenav_title">
            <slot name="title"></slot>
        </div>
        <a class="closebtn" @click="active = false">
            <svg>
                <use href="~/assets/svg/icons.svg#close" />
            </svg>
        </a>
        <div class="sidenav_content">
            <slot name="content"></slot>
        </div>
    </div>
</template>