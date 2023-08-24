<script setup>
    const props = defineProps(['data'])
    let data = props.data
</script>

<template>
    <div class="embla">
        <div class="embla__viewport">
            <div class="embla__container" style="transform: translate3d(0%, 0px, 0px);">
                <div class="embla__slide" v-for="(item, index) in data" :key="index">
                    <div class="embla__slide__inner">
                        <NuxtLink class="movie__link" :to="'/' + item.link">
                            <img class="embla__slide__img" :src="item.src" />
                        </NuxtLink>
                    </div>
                    <div class="box_meta">
                        <NuxtLink :to="'/' + item.link">
                            <span class="s_e_title_1" v-if="item.episodeNumber">{{ item.episodeNumber }}화</span>
                            <h2 class="title_1">{{ item.title }}</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <button class="embla__button embla__button--prev" type="button" disabled="disabled">
            <svg class="embla__button__svg" viewBox="137.718 -1.001 366.563 643.999">
                <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z">
                </path>
            </svg>
        </button>
        <button class="embla__button embla__button--next" type="button">
            <svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
                <path
                    d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z">
                </path>
            </svg>
        </button>
    </div>
</template>