<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .layout-enter-active, .layout-leave-active {
    transition: opacity .3s;
  }
  .layout-enter-from, .layout-leave-to {
    opacity: 0;
  }

  body {
    background-color: rgb(19, 23, 34);
  }

  .lazyload {
      display: block;
      min-height: 1px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
  }

  .lazyloaded {
      opacity: 1;
  }
</style>