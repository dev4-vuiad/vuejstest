<script setup>

    const types = [
        "action","animation","comedy","crime","documentary","drama","fantasy","horror","mystrey","romance","science fiction","sf","thriller","tv 영화","가족","공포","다큐멘터리","동양영화","드라마","로맨스","모험","미스터리","범죄","서부","서양영화","스릴러","애니메이션","액션","역사","음악","전쟁","코미디","판타지","한국영화"
    ]

    const route = useRoute();
    let chosen = []
    let chosenClass = ""
    if (route.query.filter_genre && typeof route.query.filter_genre == 'string') {
        route.query.filter_genre.split(",").forEach(name => chosen.push(name))
        chosenClass += " " + chosen.join(" ")
    }
</script>

<template>
    <ul class="masvideos-widget-movies-layered-nav-list">
        <li v-for="(name, index) in types" :key="index" :class="'masvideos-widget-movies-layered-nav-list__item masvideos-layered-nav-term ' + (chosen.includes(name) ? 'masvideos-widget-movies-layered-nav-list__item--chosen chosen' : '')">
            <a rel="nofollow" :href="'/movie?query_type_genre=or&filter_genre=' + chosen.concat(name).join(',')">{{ name }}</a>
        </li>
    </ul>
</template>