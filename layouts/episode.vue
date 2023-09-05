<script setup>
    useHead({
        bodyAttrs: {
            class: 'episode-template-default single single-episode wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-episode-v3 full-width dark'
        }
    });

</script>
<template>
    <div id="page" class="hfeed site">
        <Header />
        <HeaderHandHeld />
        <slot />
        <Footer />
        <a id="scrollUp" href="#top"><i class="fas fa-angle-up"></i></a>
    </div>
</template>