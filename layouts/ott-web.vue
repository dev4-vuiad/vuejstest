<script setup>
    useHead({
        bodyAttrs: {
            class: 'archive post-type-archive post-type-archive-tv_show wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-archive masvideos-js sidebar-left dark'
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