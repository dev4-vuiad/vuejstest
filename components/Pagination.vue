<script setup>
    import { onBeforeUpdate } from 'vue'

    const emit = defineEmits(['onSelectPage'])
    const props = defineProps(['base', 'total', 'currentPage', 'perPage', 'year', 'genres', 'orderBy', 's'])
    const base = (props.base || '/movie') + '/page'
    const perPage = props.perPage * 1
    let total = props.total * 1
    let currentPage = props.currentPage * 1
    let { pages, start, end, totalPages } = calPages(props.total, currentPage)
    // let totalPages = Math.ceil(props.total / perPage);
    // let start = (currentPage - 1) * perPage + 1
    // let end = start + perPage - 1
    // let pages = [
    //     1, 
    //     2,
    //     currentPage - 2,
    //     currentPage - 1,
    //     currentPage - 2,
    //     currentPage - 1,
    //     currentPage,
    //     currentPage + 1,
    //     currentPage + 2,
    //     totalPages - 2,
    //     totalPages - 1,
    //     totalPages
    // ].filter(p => p > 0 && p <= totalPages && ((p >= currentPage - 2 && p <= currentPage + 2) || p <= 2 || p >= totalPages - 2))
    // pages = [...new Set(pages)]

    const selectPage = (val) => {
        currentPage = val
        emit('onSelectPage', val)
    }

    onBeforeUpdate(() => {
        total = props.total * 1
        currentPage = props.currentPage * 1
        let cal = calPages(total, currentPage)
        pages = cal.pages
        start = cal.start
        end = cal.end
        totalPages = cal.totalPages
    })

    function calPages(total, currentPage) {
        console.log(total, currentPage)
        let totalPages = Math.ceil(total / perPage);
        let start = (currentPage - 1) * perPage + 1
        let end = start + perPage - 1
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

        return {
            pages: pages,
            start: start,
            end: end,
            totalPages: totalPages
        }
    }
</script>
<template>
    <div class="page-control-bar-bottom">
        <p class="masvideos-result-count masvideos-tv-shows-result-count">
            Showing {{ start }}–{{ end }} of {{ total }} results </p>
        <nav class="masvideos-pagination masvideos-tv-shows-pagination">
            <ul class="page-numbers">
                <li v-if="currentPage - 1 >= 1">
                    <NuxtLink class="prev page-numbers" to="#" @click.prevent="selectPage(currentPage -1)">←&nbsp;&nbsp;&nbsp; 이전 페이지</NuxtLink>
                </li>
                <template v-for="(page, index) in pages" :key="index">
                    <li v-if="page > 2 && page < totalPages && page > pages[index - 1] + 1">
                        <span class="page-numbers dots">…</span>
                    </li>
                    <li>
                        <a v-if="currentPage != page" :class="'page-numbers'+ (currentPage == page ? ' current' : '')" @click.prevent="selectPage(page)">{{ page }}</a>
                        <span v-if="currentPage == page" aria-current="page" :class="'page-numbers'+ (currentPage == page ? ' current' : '')">{{ page }}</span>
                    </li>
                </template>
                <li v-if="currentPage + 1 <= totalPages">
                    <NuxtLink class="next page-numbers" to="#" @click.prevent="selectPage(currentPage + 1)">다음 페이지 &nbsp;&nbsp;&nbsp;→</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>