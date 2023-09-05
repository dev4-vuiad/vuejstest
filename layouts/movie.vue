<script setup>
    useHead({
        bodyAttrs: {
            class: 'movie-template-default single single-movie postid-202135 wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-movie-v2 full-width dark'
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