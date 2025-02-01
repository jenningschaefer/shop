<script setup>
const model = defineModel()
/* TODO: max min value */

function plus() {
    model.value++
}
function minus() {
    model.value--
}
</script>

<template>
    <div class="counter" style="">
        <button class="counter_btn" @click="minus" type="button">-</button>
        <div> {{ model }} </div>
        <button class="counter_btn" @click="plus" type="button">+</button>
    </div>
</template>