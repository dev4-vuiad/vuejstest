<script setup>
    const props = defineProps(['id', 'name', 'src', 'pending'])
    let id = props.id
    let pending = props.pending
    let name = props.name
    let src = props.src

    onBeforeMount(() => {
        if (pending) {
            id = undefined
            name = '';
            src = undefined
        }
    })

    watch(
        () => props.pending,
        () => {
            id = props.id
            name = props.name
            src = props.src
        }
    )
</script>
<template>
    <div :class="'person-thumbnail loading-bg' + (src && src.length ? '' : ' empty')" :postid="id">
        <img class="lazyload" :src="src && src.length ? src : '/images/cast_no_thumnbnail.svg'" :alt="name" :key="src" />
    </div>
</template>