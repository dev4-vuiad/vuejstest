<script setup>

const props = defineProps(['id', 'name'])
    const id = props.id
    const name = props.name
</script>


<template>
    <div class="cast-item">
        <NuxtLink to="#">
            <img 
                class="lazyload"
                src="https://www.themoviedb.org/t/p/w138_and_h175_face/l8ywp387rfdAS7mOExe3cEZnsk0.jpg"
            />
        </NuxtLink>
        <NuxtLink to="#">
            {{ name }}
        </NuxtLink>
    </div>
</template>

<style scoped>
    .cast-item {
        margin: 10px 4px 10px 10px;
        border: 1px solid rgba(var(--lightGrey),1);
        padding-bottom: 10px;
        border-radius: var(--imageBorderRadius);
        overflow: hidden;
    }

    .cast-item > a {
        min-width: 138px;
        width: 138px;
        height: 175px;
        display: block;
    }

    .cast-item img {
        width: 100%;
        height: 100%;
        outline: 0;
    }
</style>