<script setup>
    import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
    const emit = defineEmits(['onStopWatching'])
    const props = defineProps(['isWatching', 'outlink'])

    watch(
        [
            () => props.isWatching,
            () => props.outlink
        ],
        () => {
            if (props.isWatching && props.outlink && props.outlink.length) {
                $('#modal-container').html('<iframe allow="autoplay" width="100%" height="100%" frameborder="0" scrolling="auto" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="" src=""></iframe>')
                $('#modal-container').find('iframe').attr('src', props.outlink);
            }
        }
    )

    const onStopWatching = () => {
        $('.modal>div').html('')
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

    onBeforeRouteUpdate((to, from, next) => {
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
        <div style="position: relative;width: 100%;height: 100%;" id="modal-container"></div>
    </div>
</template>