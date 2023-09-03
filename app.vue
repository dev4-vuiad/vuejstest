<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .layout-enter-active, .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from, .layout-leave-to {
    opacity: 0;
  }

  body {
    background-color: rgb(19, 23, 34);
  }
</style>