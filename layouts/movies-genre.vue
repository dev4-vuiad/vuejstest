<script setup>
    useHead({
        bodyAttrs: {
            class: 'archive post-type-archive post-type-archive-movie wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-archive masvideos-js sidebar-left dark'
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