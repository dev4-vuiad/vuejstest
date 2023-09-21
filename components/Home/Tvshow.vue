<script setup>
    import { ref } from 'vue'
    const { $toTimeAgo } = useNuxtApp()
    const { $apiBaseUrl } = useNuxtApp()
    const renderCount = ref(0)
    const props = defineProps(['menu', 'items', 'title'])
    const title = props.title
    let menu = props.menu
    let type = 'tv-show'
    const allItems = {
        'tv-show': props.items['tv-show']
    }
    const items = ref(props.items['tv-show'])
    
    const { refresh } = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/tvShowHomepage', {
            params: {
                type: (type == 'tv-show' ? '' : type)
            }
        }).then(data => {
            renderCount.value ++
            allItems[type] = data
            items.value = data
        }), {
            immediate: false
        }
    )

    watch(
        [
            () => props.items,
            () => props.menu
        ],
        () => {
            renderCount.value ++
            allItems[type] = props.items[type]
            items.value = props.items[type]
            menu = props.menu
        }
    )
    
    const selectType = (val) => {
        type = val
        if (typeof allItems[type] == 'undefined') {
            refresh()
        } else {
            renderCount.value ++
            items.value = allItems[type]
        }
    }
</script>

<template>
    <ul class="nav nav-tabs">
        <li v-for="(item, index) in menu" :key="index" class="nav-item">
            <NuxtLink :class="'pointer nav-link' + (type == item.link ? ' active' : '')" @click.prevent="selectType(item.link)">{{ item.title || '' }}</NuxtLink>
        </li>
    </ul>
    <div class="home-tv-show-section-aside-header__inner">
        <div class="masvideos masvideos-tv-shows ">
            <div class="tv-shows columns-7">
                <div class="tv-shows__inner">
                    <header class="home-section__header">
                        <h2 class="home-section__title">{{ title || ' ' }}</h2>
                        <div class="home-section__action">
                            <NuxtLink to="/tv-shows" class="tv-show-box home-section__action-link">전체보기</NuxtLink>
                        </div>
                    </header>
                    <div v-for="(item, index) in items" :key="index" class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama" :postid="item.id">
                        <div class="tv-show__poster loading-bg">
                            <div class="box-tv-channel">
                                <img class="tv-channel lazyload"
                                    :src="item.chanelImage" alt=""
                                    width="83" height="31"
                                    :key="renderCount"
                                />
                            </div>
                            <NuxtLink :to="'/' + item.link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                                <img
                                width="300" height="450"
                                :src="item.src"
                                :srcset="item.srcSet"
                                class="tv-show__poster--image tv_show__poster--image lazyload" alt=""
                                sizes="(max-width: 300px) 100vw, 300px"
                                :key="renderCount" />
                            </NuxtLink>
                        </div>
                        <div class="tv-show__body">
                            <div class="tv-show__info">
                                <div class="tv-show__info--head">
                                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ postDate ? $toTimeAgo(item.postDate) : ' ' }}</span></div>
                                    <div class="original-title-tvshow">
                                        {{ item.originalTitle || ' ' }}
                                    </div>
                                    <NuxtLink :to="'/' + item.link"
                                        class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"><span
                                            style="display:none" class="span_sea_ep_title">{{ item.titleid ? (item.seasonNumber && item.seasonNumber != '시즌 1' ? item.seasonNumber + ' - ' : '') + (item.episodeNumber || '') + '화' : ' ' }}</span>
                                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ item.tvshowTitle }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>