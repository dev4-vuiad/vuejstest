<script setup>
    const props = defineProps(['base', 'total', 'currentPage', 'perPage', 'year', 'genres', 'orderBy', 's'])
    const base = (props.base || '/movie') + '/page'
    const perPage = props.perPage * 1
    const totalPages = Math.ceil(props.total / perPage);
    const currentPage = props.currentPage * 1
    const start = (currentPage - 1) * perPage + 1
    const end = start + perPage - 1
    let pages = [
        1, 
        2,
        currentPage - 2,
        currentPage - 1,
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        totalPages - 2,
        totalPages - 1,
        totalPages
    ].filter(p => p > 0 && p <= totalPages && ((p >= currentPage - 2 && p <= currentPage + 2) || p <= 2 || p >= totalPages - 2))
    pages = [...new Set(pages)]

    const url = new URL('http://localhost');
    if (props.year) {
        url.searchParams.set('year_filter', props.year)
    }
    if (props.genres) {
        url.searchParams.set('genres', props.genres)
    }
    if (props.orderBy) {
        url.searchParams.set('orderby', props.orderBy)
    }
    if (props.s) {
        url.searchParams.set('s', props.s)
    }
    const query = '?' + url.searchParams.toString();
</script>
<template>
    <div class="page-control-bar-bottom">
        <p class="masvideos-result-count masvideos-tv-shows-result-count">
            Showing {{ start }}–{{ end }} of {{ total }} results </p>
        <nav class="masvideos-pagination masvideos-tv-shows-pagination">
            <ul class="page-numbers">
                <li v-if="currentPage - 1 >= 1">
                    <a class="prev page-numbers" :href="base + '/' + (currentPage -1) + query">←&nbsp;&nbsp;&nbsp; 이전 페이지</a>
                </li>
                <template v-for="(page, index) in pages" :key="index">
                    <li v-if="page > 2 && page < totalPages && page > pages[index - 1] + 1">
                        <span class="page-numbers dots">…</span>
                    </li>
                    <li>
                        <a v-if="currentPage != page" :class="'page-numbers'+ (currentPage == page ? ' current' : '')" :href="base + '/' + page + query">{{ page }}</a>
                        <span v-if="currentPage == page" aria-current="page" :class="'page-numbers'+ (currentPage == page ? ' current' : '')">{{ page }}</span>
                    </li>
                </template>
                <li v-if="currentPage + 1 <= totalPages">
                    <a class="next page-numbers" :href="base + '/' + (currentPage + 1) + query">다음 페이지 &nbsp;&nbsp;&nbsp;→</a>
                </li>
            </ul>
        </nav>
    </div>
</template>