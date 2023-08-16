<script setup>
        import { onBeforeUpdate } from 'vue';

        let start = (new Date()).getFullYear()
        let end = 1980;
        const years = []
        for (let i = start; i >= end; i --) {
                years.push(i)
        }

        const props = defineProps(['selected', 'genres'], 'page')
        let selected = props.selected
        let genres = props.genres
        let page = props.page
        onBeforeUpdate(() => {
                selected = props.selected
                genres = props.genres
                page = props.page
        });
</script>

<template>
        <div id="masvideos_movies_year_filter-1" class="widget masvideos masvideos-widget_movies_year_filter">
                <div class="widget-header"><span class="widget-title">연도별</span></div>
                <ul>
                        <li v-for="(year, idx) in years" :key="idx" :class="'masvideos-layered-nav-movies-year' + (selected == year ? ' chosen' : '')">
                                <a :href="'/movie' + (typeof page != 'undefined' ? '/page/' + page : '') + '?filter_genre=' + genres.join(',') + '&year_filter=' + year">
                                        <span>{{ year }}</span>
                                </a>
                        </li>
                </ul>
        </div>
</template>