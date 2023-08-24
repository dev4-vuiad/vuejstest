<script setup>
    import { onBeforeUpdate } from 'vue'
    const emit = defineEmits(['onSelectGenres'])
    const props = defineProps(['selected', 'exclude'])
    let selected = props.selected
    let excludeGenre = props.exclude
    onBeforeUpdate(() => {
        selected = props.selected
        excludeGenre = props.exclude
    })

    const genres = [
        "action","animation","comedy","crime","documentary","drama","fantasy","horror","mystrey","romance","science fiction","sf","thriller","tv 영화","가족","공포","다큐멘터리","동양영화","드라마","로맨스","모험","미스터리","범죄","서부","서양영화","스릴러","애니메이션","액션","역사","음악","전쟁","코미디","판타지","한국영화"
    ].filter(v => v != excludeGenre)

    const selectGenre = function(val) {
        if (selected.includes(val)) {
            selected = selected.filter(v => v != val)
        } else {
            selected.push(val)
        }
        emit('onSelectGenres', selected)
    }

</script>

<template>
    <ul class="masvideos-widget-movies-layered-nav-list">
        <li v-for="(genre, index) in genres" :key="index" :class="'masvideos-widget-movies-layered-nav-list__item masvideos-layered-nav-term ' + (selected.includes(genre) ? 'masvideos-widget-movies-layered-nav-list__item--chosen chosen' : '')">
            <NuxtLink href="#" rel="nofollow" @click.prevent="selectGenre(genre)">
                {{ genre }}
            </NuxtLink>
        </li>
    </ul>
</template>