<script setup>
    const error = useError();

    const handleError = () => {
        clearError({
            redirect: '/',
        });
    }
</script>

<template>
    <button @click="handleError">
        Go Back
    </button>
</template>