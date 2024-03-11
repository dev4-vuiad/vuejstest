<script setup>
    import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
    const emit = defineEmits(['onStopWatching'])
    const props = defineProps(['isWatching', 'outlink'])
    const iFrameHtml = ref('')

    watch(
        [
            () => props.isWatching,
            () => props.outlink
        ],
        () => {
            if (props.isWatching && props.outlink && props.outlink.length) {
                setTimeout(() => {
                    $('.modal>div').html('<iframe src="' + props.outlink + '" allow="autoplay" width="100%" height="100%" frameborder="0" scrolling="auto" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"></iframe>')
                }, 1000)
                
            }
        }
    )

    const onStopWatching = () => {
        iFrameHtml.value = ''
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

        </div>
    </div>
</template>