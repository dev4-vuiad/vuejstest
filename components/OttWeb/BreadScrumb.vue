<script setup>
    import { onBeforeUpdate } from 'vue'
    const props = defineProps(['type', 'title', 'page'])
    const type = props.type
    const title = props.title
    let page = props.page * 1

    onBeforeUpdate(() => {
        page = props.page * 1
    })
</script>

<template>
    <nav class="masvideos-breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span class="delimiter">
            <svg width="4px" height="7px">
                <path fill-rule="evenodd" d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z"></path>
            </svg>
        </span>
        <NuxtLink to="/ott-web">OTT/Web</NuxtLink>
        <span class="delimiter">
            <svg width="4px" height="7px">
                <path fill-rule="evenodd" d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z"></path>
            </svg>
        </span>
        <template v-if="page > 1">
            <NuxtLink :to="'/ott-web/' + type">{{ title }}</NuxtLink>
            <span class="delimiter">
                <svg width="4px" height="7px">
                    <path fill-rule="evenodd" d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z"></path>
                </svg>
            </span>Page {{ page }}
        </template>
        <template v-else>
            {{ title }}
        </template>
    </nav>
</template>