<template>
    <li class="accordion__item">
        <div class="accordion__trigger" :class="{ 'accordion__trigger_active': visible }" @click="open">

            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <slot name="accordion-trigger"></slot>
            <svg class="accordion__trigger_icon" v-if="!visible">
                <use href="~/assets/svg/icons.svg#plus" />
            </svg>
            <svg class="accordion__trigger_icon" v-else>
                <use href="~/assets/svg/icons.svg#minus" />
            </svg>
        </div>

        <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
            <div class="accordion__content" v-show="visible">
                <ul>
                    <!-- This slot will handle all the content that is passed to the accordion -->
                    <slot name="accordion-content"></slot>
                </ul>
            </div>

        </transition>
    </li>
</template>


<script setup>

const Accordion = inject('Accordion');

let index = null;
index = Accordion.value.count++;

const visible = ref(computed(() => index == Accordion.value.active))

const open = () => {
    if (visible.value) {
        Accordion.value.active = null;
    } else {
        Accordion.value.active = index;
    }
}

const start = (el) => {
    //console.log(el)
    el.style.height = el.scrollHeight + "px";
}
const end = (el) => {
    el.style.height = "";
}

</script>

<style lang="scss" scoped>
.accordion-enter-active,
.accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
    height: 0 !important;
    transition: height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}
</style>