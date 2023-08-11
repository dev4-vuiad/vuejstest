<script setup>

    const props = defineProps(['category', 'pageNumber', 'numPerPage'])
    const category = props.category
    const numPerPage = props.numPerPage * 1
    const pageNumber = props.pageNumber * 1
    const start = (pageNumber - 1) * numPerPage + 1
    const end = start + numPerPage - 1
</script>
<template>
    <div class="page-control-bar-bottom">
        <p class="masvideos-result-count masvideos-tv-shows-result-count">
            Showing {{ start }}–{{ end }} of 224 results </p>
        <nav class="masvideos-pagination masvideos-tv-shows-pagination">
            <ul class="page-numbers">
                <li>
                    <a :class="'page-numbers'+ (pageNumber == 1 ? ' current' : '')" :href="'/' + category ">1</a>
                </li>
                <li><a :class="'page-numbers'+ (pageNumber == 2 ? ' current' : '')" :href="'/' + category + '/page/2/'">2</a></li>
                <li><a :class="'page-numbers'+ (pageNumber == 3 ? ' current' : '')" :href="'/' + category + '/page/3/'">3</a></li>
                <li><span class="page-numbers dots">…</span></li>
                <li><a class="page-numbers" :href="'/' + category + '/page/43/'">43</a></li>
                <li><a class="page-numbers" :href="'/' + category + '/page/44/'">44</a></li>
                <li><a class="next page-numbers" :href="'/' + category + '/page/2/'">다음 페이지 &nbsp;&nbsp;&nbsp;→</a>
                </li>
            </ul>
        </nav>
        <div style="display: none;">
            <span aria-current="page" :class="'page-numbers'+ (pageNumber == 1 ? ' current' : '')">1</span>
            <a class="page-numbers" :href="'/' + category + '/page/2/'">2</a>
            <span class="page-numbers dots">…</span>
            <a class="page-numbers" :href="'/' + category + '/page/43/'">43</a>
            <a class="page-numbers" :href="'/' + category + '/44/'">44</a>
            <a class="next page-numbers" :href="'/' + category + '/2/'">다음 페이지 &nbsp;&nbsp;&nbsp;→</a>
        </div>
</div></template>