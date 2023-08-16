<script setup>
    import { onBeforeUpdate } from 'vue';

    const props = defineProps(['base', 'selected', 'year', 'page', 'exclude'])
    const base = props.base || '/movie'
    let selected = props.selected
    let year = props.year
    let page = props.page
    let excludeGenre = props.exclude

    const genres = [
        "action","animation","comedy","crime","documentary","drama","fantasy","horror","mystrey","romance","science fiction","sf","thriller","tv 영화","가족","공포","다큐멘터리","동양영화","드라마","로맨스","모험","미스터리","범죄","서부","서양영화","스릴러","애니메이션","액션","역사","음악","전쟁","코미디","판타지","한국영화"
    ].filter(v => v != excludeGenre)

    onBeforeUpdate(() => {
        selected = props.selected
        year = props.year
        page = props.page
    });

    
</script>

<template>
    <ul class="masvideos-widget-movies-layered-nav-list">
        <li v-for="(genre, index) in genres" :key="index" :class="'masvideos-widget-movies-layered-nav-list__item masvideos-layered-nav-term ' + (selected.includes(genre) ? 'masvideos-widget-movies-layered-nav-list__item--chosen chosen' : '')">
            <a rel="nofollow" :href="base + (typeof page != 'undefined' ? '/page/' + page : '') + '?query_type_genre=or&filter_genre=' + (selected.includes(genre) ? selected.filter(v => v != genre).join(',') : selected.concat(genre).join(',')) + (year.length ? '&year_filter=' + year : '')">
                {{ genre }}
            </a>
        </li>
    </ul>
</template>