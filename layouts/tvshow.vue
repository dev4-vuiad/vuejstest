<script setup>
    useHead({
        bodyAttrs: {
            class: 'tv_show-template-default single single-tv_show postid-203734 wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-tv_show-v1 full-width dark'
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