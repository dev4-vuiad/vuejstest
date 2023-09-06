<script setup>
    useHead({
        bodyAttrs: {
            class: 'home page-template-default page wp-custom-logo wp-embed-responsive masvideos-js full-width'
        }
    });

</script>
<template>
    <div id="page" class="hfeed site">
        <Header />
        <HeaderHandHeld />
        <slot />
        <Footer />
    </div>
</template>