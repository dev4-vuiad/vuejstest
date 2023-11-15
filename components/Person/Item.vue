<script setup>
    const props = defineProps(['id', 'src', 'name', 'slug', 'pending'])
    let pending = props.pending
    let id = props.id
    let src = props.src
    let name = props.name
    let slug = props.slug

    onBeforeMount(() => {
        if (pending) {
            id = undefined
            src = undefined
            name = ''
            slug = ''
        }
    })

    watch(
        () => props.pending,
        () => {
            id = props.id
            src = props.src
            name = props.name
            slug = props.slug
        }
    )
</script>

<template>
    <div class="movie type-movie status-publish has-post-thumbnail hentry" :objectid="id">
        <div class="movie__poster cast loading-bg">
            <a :href="'/person/' + slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img :src="src" class="movie__poster--image lazyload" alt="" :key="id">
            </a>
        </div>
        <div class="movie__body">
            <a :href="'/person/' + slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <h3 class="masvideos-loop-movie__title movie__title">{{ name }}</h3>
            </a>
        </div>
    </div>
</template>