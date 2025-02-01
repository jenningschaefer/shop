<script setup>
    const error = useError();

    const handleError = () => {
        clearError({
            redirect: '/',
        });
    }
</script>

<template>
    <button type="button" @click="handleError">
        Go Back
    </button>
</template>