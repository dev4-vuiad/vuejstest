<script setup>
    import { ref } from 'vue'
    const props = defineProps(['data', 'title'])
    const renderCount = ref(0)
    let data = props.data
    let title = props.title

    const type = ref('tv-show')
    const { data: loadItems, refresh } = await useAsyncData(
        'tv-shows' + type,
        () => $fetch('https://backendnew.takitv.net/api/tvshows', {
            params: {
                type: (type.value == 'tv-show' ? '' : type.value),
                limit: 12
            }
        }).then(data => {
            renderCount.value ++
            return data.data.items
        }), {
            watch: [type]
        }
    )
    
    let items = loadItems
    const selectType = (val) => {
        type.value = val
    }

    const toTimeAgo = (d) => {
        const now = new Date()
        let date = new Date(d.replace(' ', 'T') + '+09:00')
        let disTs = Math.ceil((now.valueOf() - date.valueOf()) / 1000)
        if (disTs >= 48 * 3600) {
            d = new Date(date.valueOf() + 3600 * 9 * 1000)
            return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1).toString().padStart(2, '0') + '-' + d.getUTCDate().toString().padStart(2, '0')
        } else if (disTs >= 24 * 3600 && disTs < 48 * 3600) {
            return '1일 전'
        } else if (disTs >= 3600 && disTs < 24 * 3600) {
            let hours = Math.floor(disTs / 3600)
            return hours + '시간 전'
        } else if (disTs < 3600 && disTs >= 60) {
            let minutes = Math.floor(disTs / 60)
            return minutes + '분 전'
        } else {
            return disTs + '초 전'
        }
    }
</script>

<style scoped>
    .nav-tabs a {
        cursor: pointer;
    }
</style>

<template>
    <ul class="nav nav-tabs">
        <li v-for="(item, index) in data.menu" :key="index" class="nav-item lamlamlama">
            <NuxtLink :class="'nav-link' + (type == item.link ? ' active' : '')" @click.prevent="selectType(item.link)">{{ item.title }}</NuxtLink>
        </li>
    </ul>
    <div class="home-tv-show-section-aside-header__inner">
        <div class="masvideos masvideos-tv-shows ">
            <div class="tv-shows columns-7">
                <div class="tv-shows__inner">
                    <header class="home-section__header">
                        <h2 class="home-section__title">{{ title }}</h2>
                        <div class="home-section__action"><NuxtLink to="/tv-shows"
                                class="tv-show-box home-section__action-link">전체보기</NuxtLink>
                        </div>
                    </header>
                    <div v-for="(item, index) in items" :key="index" class="tv-show post-202541 tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama tv_show_genre-213">
                        <div class="tv-show__poster">
                            <div class="box-tv-channel"><img class="tv-channel"
                                    :src="item.chanelImage" alt=""
                                    width="83" height="31">
                            </div>
                            <NuxtLink :to="'/' + item.link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                                <img
                                width="300" height="450"
                                :src="item.src"
                                :srcset="item.srcSet"
                                class="tv-show__poster--image tv_show__poster--image" alt=""
                                sizes="(max-width: 300px) 100vw, 300px"
                                :key="renderCount" />
                            </NuxtLink>
                        </div>
                        <div class="tv-show__body">
                            <div class="tv-show__info">
                                <div class="tv-show__info--head">
                                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ toTimeAgo(item.postDate) }}</span></div>
                                    <div class="original-title-tvshow">
                                        {{ item.originalTitle }}
                                    </div>
                                    <NuxtLink :to="'/' + item.link"
                                        class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"><span
                                            style="display:none" class="span_sea_ep_title">{{ item.episodeNumber }}화</span>
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