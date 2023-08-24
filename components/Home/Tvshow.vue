<script setup>
    import { ref, onBeforeUpdate } from 'vue'
    const props = defineProps(['data', 'title'])
    let data = props.data
    let title = props.title

    const type = ref('tv-show')
    const { data: loadItems } = await useAsyncData(
        'tv-shows' + type,
        () => $fetch('https://backendnew.takitv.net/api/tvshows', {
            params: {
                type: (type.value == 'tv-show' ? '' : type.value),
                limit: 12
            }
        }).then(data => {
            return data.data.items
        }), {
            watch: [type]
        }
    )
    
    let items = loadItems
    const selectType = (val) => {
        type.value = val
    }
</script>

<template>
    <ul class="nav nav-tabs">
        <li v-for="(item, index) in data.menu" :key="index" class="nav-item lamlamlama">
            <a :class="'nav-link' + (type == item.link ? ' active' : '')" href="#" @click.prevent="selectType(item.link)">{{ item.title }}</a>
        </li>
    </ul>
    <div class="home-tv-show-section-aside-header__inner">
        <div class="masvideos masvideos-tv-shows ">
            <div class="tv-shows columns-7">
                <div class="tv-shows__inner">
                    <header class="home-section__header">
                        <h2 class="home-section__title">{{ title }}</h2>
                        <div class="home-section__action"><a href="/tv-shows"
                                class="tv-show-box home-section__action-link">전체보기</a>
                        </div>
                    </header>
                    <div v-for="(item, index) in items" :key="index" class="tv-show post-202541 tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama tv_show_genre-213">
                        <div class="tv-show__poster">
                            <div class="box-tv-channel"><img loading="lazy" class="tv-channel"
                                    :src="item.chanelImage" alt=""
                                    width="83" height="31"></div><a href="/episode/%ed%95%98%eb%93%9c-%ec%85%80-6%ed%99%94/"
                                class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"><img
                                    width="300" height="450"
                                    :src="item.src"
                                    class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy"
                                    sizes="(max-width: 300px) 100vw, 300px"></a>
                        </div>
                        <div class="tv-show__body">
                            <div class="tv-show__info">
                                <div class="tv-show__info--head">
                                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">2
                                            분 전</span></div>
                                    <div class="original-title-tvshow">
                                        Hard Cell
                                    </div>
                                    <a href="/episode/%ed%95%98%eb%93%9c-%ec%85%80-6%ed%99%94/"
                                        class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"><span
                                            style="display:none" class="span_sea_ep_title">6화</span>
                                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">
                                            하드 셀</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>