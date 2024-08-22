<template>
    <ul class="accordion">
        <slot></slot>
    </ul>
</template>

<script setup>

const Accordion = ref({
    count: 0,
    active: null,
})
provide('Accordion', Accordion);
</script>
