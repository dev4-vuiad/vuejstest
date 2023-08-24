<script setup>
        const years = getListYears();

        const emit = defineEmits(['onSelectYear'])
        const props = defineProps(['selected'])

        const selectYear = function(year) {
                emit('onSelectYear', year)
        }

        function getListYears() {
                let years = []
                let start = (new Date()).getFullYear()
                let end = 1980;
                for (let i = start; i >= end; i --) {
                        years.push(i)
                }
                return years
        }
</script>

<template>
        <div id="masvideos_movies_year_filter-1" class="widget masvideos masvideos-widget_movies_year_filter">
                <div class="widget-header"><span class="widget-title">연도별</span></div>
                <ul>
                        <li v-for="(year, idx) in years" :key="idx" :class="'masvideos-layered-nav-movies-year' + (selected == year ? ' chosen' : '')">
                                <NuxtLink href="#" @click.prevent="selectYear(year)">
                                        <span>{{ year }}</span>
                                </NuxtLink>
                        </li>
                </ul>
        </div>
</template>