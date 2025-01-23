<script setup>
const model = defineModel()
/* TODO: max min value */

function plus() {
    console.log('plus')
    model.value++
}
function minus() {
    model.value--
}
</script>

<template>
    <div class="counter" style="">
        <button class="counter_btn" @click="minus">-</button>
        <div> {{ model }} </div>
        <button class="counter_btn" @click="plus">+</button>
    </div>
</template>