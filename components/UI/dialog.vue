<script setup>

const active = defineModel();

</script>

<template>
    <div v-if="active" class="overlay"></div>
    <div v-if="active" class="dialog">
        <div class="dialog_header">
            <slot name="title"></slot>
            <a class="closebtn" @click="active = false">
                <svg>
                    <use href="~/assets/svg/icons.svg#close" />
                </svg>
            </a>
        </div>
        <div class="dialog_content">
            <slot name="content"></slot>
        </div>
        <div class="dialog_footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>