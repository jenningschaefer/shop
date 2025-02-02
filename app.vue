<script setup>
const openDisclaimer = ref(true);
</script>

<template>
   <div>
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
   <UIDialog v-model="openDisclaimer">
      <template #title>Disclaimer</template>
      <template #content>
         <p>
            This website is a portfolio project and not a real online store. All products, prices, and transactions
            displayed are fictional and exist solely to showcase my front-end development skills. No actual purchases
            can be made through this site.
         </p>
         <p>
            If you're interested in my work, feel free to reach out!
         </p>
      </template>
   </UIDialog>
</template>