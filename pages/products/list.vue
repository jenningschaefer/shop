<script setup>
/* const route = useRoute();
const {cars} = useCars(); */

definePageMeta({
    layout: 'products',
})
</script>

<template>
    <div class="list">
        <NuxtErrorBoundary>
            <ProductSideBar />
            <NuxtPage />
            <template #error="{ error }">
                <div class="list_error">
                    <h1 class="list_error_heading">Sorry, something went wrong</h1>
                    <code>{{ error }}</code>
                    <button class="btn-primary" @click="error.value = null">
                        Go Back!
                    </button>
                </div>
            </template>
        </NuxtErrorBoundary>
    </div>
</template>