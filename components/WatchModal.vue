<script setup>
    import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
    const emit = defineEmits(['onStopWatching'])
    const props = defineProps(['isWatching', 'outlink'])
    let outlink = props.outlink
    const renderCount = ref(0)

    watch(
        [
            () => props.isWatching,
            () => props.outlink
        ],
        () => {
            outlink = props.outlink
            renderCount.value ++
        }
    )

    const onStopWatching = () => {
        outlink = ''
        emit('onStopWatching')
    }

    onBeforeRouteLeave((to, from, next) => {
        if(props.isWatching) {
            next(false);
            onStopWatching()
        } else {
            next();
        }
    })

    onBeforeRouteUpdate((tos, from, next) => {
        if(props.isWatching) {
            next(false);
            onStopWatching()
        } else {
            next();
        }
    })

    onBeforeUnmount(() => {
        emit('onStopWatching')
    })
    
</script>

<template>
    <div class="modal">
        <div style="position: relative;width: 100%;height: 100%;">
            <iframe id="videoIframe" :src="outlink + '&auto=0'" allow="autoplay" width="100%" height="100%" frameborder="0" scrolling="auto" :key="renderCount" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true">
            </iframe>
        </div>
    </div>
</template>