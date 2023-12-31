<script setup>
    import { nextTick } from 'vue'
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute();
    const router = useRouter();
    const name = route.params.name

    const genres = ref([name])
    const year = ref(route.query.year_filter || '')
    const orderBy = ref(route.query.orderBy || 'date')
    const page = ref(route.query.page || 1)

    definePageMeta({
        pageTransition: {
            name: 'page', 
            mode: 'out-in',
            onAfterEnter: () => {                
                $(document).on("click", function(e) {
                    $(".site-header__offcanvas").hasClass("toggled") && ($(".navbar-toggler").is(e.target) || 0 !== $(".navbar-toggler").has(e.target).length || $(".offcanvas-collapse").is(e.target) || 0 !== $(".offcanvas-collapse").has(e.target).length || ($(".site-header__offcanvas").removeClass("toggled"),
                    $("body").removeClass("off-canvas-active")))
                })

                //Movie sidebar filter
                $(".handheld-sidebar-toggle .sidebar-toggler").on("click", function() {
                    $(this).closest(".site-content").toggleClass("active-hh-sidebar")
                }),
                $(document).on("click", function(e) {
                    $(".site-content").hasClass("active-hh-sidebar") && ($(".handheld-sidebar-toggle").is(e.target) || 0 !== $(".handheld-sidebar-toggle").has(e.target).length || $("#secondary").is(e.target) || 0 !== $("#secondary").has(e.target).length || $(".site-content").toggleClass("active-hh-sidebar"))
                })
            }
        }
    })

    const defaultData = {
        total: 0,
        perPage: 30,
        data: {
            topWeeks: [{}, {}, {}, {}, {}],
            populars: [{}, {}, {}, {}, {}, {}],
            items: Array.from(Array(30), (_, index) => ({}))
        }
    }
    const { data }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/movies', {
            params: {
                genre: genres.value.length ? genres.value.join(',') : undefined,
                year: year.value || undefined,
                orderBy: orderBy.value || undefined,
                page: page.value
            }
        }),
        {
            default: () => defaultData,
            watch: [genres, year, orderBy, page]
        }
    )

    const titleHead = name.match('영화') ? name : name + '(영화)' ;
    useHead({
        title: titleHead + ' 무료 다시보기 - 코코아티비 :: KOKOATV.NET',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: titleHead + ' - 최신 한국드라마,미드, 예능,시사 스트리밍 다시보기 사이트 : 코코아티비 :: KOKOATV.NET 에서 무료로 즐기세요, 넷플릭스, 와차, 디즈니 플러스등 각종 OTT 컨텐츠를 감상하실 수 있습니다.'
            }
        ],
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-NL156SRJ6P"),gtag("config","UA-160268616-2");',
                body: true
            }
        ]
    });

    const onChangeOrderBy = (event) => {
        let val = event.target.value
        let query = Object.assign({}, route.query)
        query.orderBy = val
        query.page = 1
        router.push({query: query})
        orderBy.value = val
        page.value = 1
        nextTick()
    }

    const onSelectYear = (val) => {
        let query = Object.assign({}, route.query)
        query.year_filter = val
        query.page = 1
        router.push({query: query})
        year.value = val
        page.value = 1
        nextTick()
    }

    const onSelectPage = function(val) {
        let query = Object.assign({}, route.query)
        query.page = val
        router.push({query: query})
        page.value = val
        $('#scrollUp').trigger('click')
    }

    const getGenreName = (slug, genres) => {
        if (!genres) {
            return ''
        }
        
        let v = genres.find(v => decodeURI(v.slug) == slug)
        return v ? v.name : ''
    }
</script>

<template>
    <div class="archive post-type-archive-movie masvideos masvideos-archive sidebar-left dark">
        <div class="site-content " tabindex="-1">
            <div class="container">
                <nav class="masvideos-breadcrumb">
                    <NuxtLink to="/">Home</NuxtLink>
                    <span class="delimiter">
                        <svg width="4px" height="7px">
                            <path fill-rule="evenodd" d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z"></path>
                        </svg>
                    </span>
                    <NuxtLink to="/movie/">영화</NuxtLink>
                    <template v-if="data && data.data.items[0] && data.data.items[0].genres">
                        <span class="delimiter">
                            <svg width="4px" height="7px">
                                <path fill-rule="evenodd" d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z"></path>
                            </svg>
                        </span>
                        <span>{{ getGenreName(name, data.data.items[0].genres) }}</span>
                    </template>
                </nav>
                <div class="site-content__inner">
                    <div id="primary" class="content-area" v-if="data"> <!-- ads movies top -->
                        <div class="kokoads Movie_Top_728_90"></div>
                        <div class="ads-achive-movies-top" style="text-align: center;">
                        </div>
                        <div id="feature-cate-page" style="display:block; margin-bottom: 10px;">
                            <header class="page-header" style="margin-bottom:15px;">
                                <h1 class="page-title">실시간 {{ getGenreName(name, data.data.items[0].genres) + (getGenreName(name, data.data.items[0].genres).includes('영화') ? '' : ' 영화') }} 인기컨텐츠</h1>
                            </header>
                            <div class="masvideos masvideos-movies vodi-archive-wrapper" data-view="grid">
                                <div class="movies columns-6">
                                    <div class="movies__inner">
                                        <MoviePopularItem v-if="data" v-for="(item, index) in data.data.populars"
                                            :id="item.id" 
                                            :key="index" 
                                            :link="item.link" 
                                            :year="item.year" 
                                            :title="item.title"
                                            :slug="item.slug" 
                                            :genres="item.genres" 
                                            :src="item.src" 
                                            :srcSet="item.srcSet"
                                        />
                                    </div>
                                </div>
                            </div>
                            <center style="margin-top:10px;margin-bottom:10px;" class="ads_cate_top"></center>
                        </div>
                        <div class="kokoads Movie_Middle_728_90"></div>
                        <header class="page-header">
                            <h1 v-if="data && data.data.items[0] && data.data.items[0].genres" class="page-title">{{ getGenreName(name, data.data.items[0].genres) }}</h1>
                        </header>
                        <div class="vodi-control-bar">
                            <div class="vodi-control-bar__left">
                            </div>
                            <div class="vodi-control-bar__right">
                                <div class="movies-ordering">
                                    <div class="handheld-sidebar-toggle"><button class="btn sidebar-toggler"
                                            type="button"><i class="fas fa-sliders-h"></i><span>Filters</span></button>
                                    </div><svg class="svg-icon svg-icon__sort" aria-hidden="true" role="img"
                                        focusable="false" width="17px" height="14px">
                                        <path fill-rule="evenodd"
                                            d="M4.034,-0.001 C4.248,0.009 4.401,0.071 4.578,0.113 C4.699,0.294 4.899,0.408 4.967,0.644 C4.967,1.606 4.967,2.568 4.967,3.529 C4.967,5.972 4.967,8.414 4.967,10.856 C4.980,10.856 4.993,10.856 5.006,10.856 C5.641,10.224 6.276,9.591 6.911,8.958 C7.041,8.873 7.329,8.745 7.572,8.806 C7.930,8.896 8.016,9.121 8.233,9.337 C8.293,10.165 7.817,10.389 7.377,10.818 C6.639,11.539 5.900,12.260 5.161,12.982 C4.928,13.209 4.395,13.909 4.073,13.969 C3.952,13.787 3.760,13.663 3.606,13.513 C3.270,13.184 2.933,12.855 2.596,12.526 C2.052,11.982 1.507,11.438 0.963,10.894 C0.717,10.666 0.471,10.438 0.224,10.211 C0.148,10.110 0.119,9.993 0.030,9.907 C0.015,9.698 -0.048,9.491 0.069,9.337 C0.171,8.957 0.746,8.634 1.235,8.882 C1.922,9.540 2.609,10.198 3.296,10.856 C3.296,7.465 3.296,4.073 3.296,0.682 C3.358,0.600 3.351,0.467 3.412,0.379 C3.511,0.235 3.714,0.158 3.840,0.037 C3.938,0.035 3.984,0.034 4.034,-0.001 ZM12.781,0.037 C12.820,0.037 12.859,0.037 12.898,0.037 C13.999,1.125 15.101,2.214 16.202,3.302 C16.427,3.522 17.287,4.153 16.902,4.668 C16.828,4.945 16.613,4.994 16.435,5.162 C16.280,5.174 16.124,5.187 15.969,5.200 C15.631,5.108 15.447,4.842 15.230,4.630 C14.712,4.137 14.193,3.643 13.675,3.150 C13.675,6.553 13.675,9.958 13.675,13.362 C13.514,13.560 13.485,13.804 13.209,13.893 C13.076,14.007 12.700,14.044 12.548,13.931 C11.760,13.719 12.004,12.233 12.004,11.273 C12.004,8.566 12.004,5.858 12.004,3.150 C11.991,3.150 11.978,3.150 11.965,3.150 C11.676,3.589 10.996,4.095 10.604,4.479 C10.404,4.673 10.198,4.996 9.943,5.124 C9.784,5.204 9.589,5.200 9.360,5.200 C9.238,5.102 9.043,5.080 8.932,4.972 C8.848,4.890 8.822,4.751 8.738,4.668 C8.699,3.730 9.312,3.462 9.827,2.960 C10.811,1.986 11.796,1.011 12.781,0.037 Z">
                                        </path>
                                    </svg>
                                    <form method="get">
                                        <select name="orderby" @change="onChangeOrderBy" class="orderby">
                                            <option value="titleAsc" v-bind:selected="orderBy == 'titleAsc'">A 부터 Z</option>
                                            <option value="titleDesc" v-bind:selected="orderBy == 'titleDesc'">Z 부터 A</option>
                                            <option value="date" v-bind:selected="orderBy == 'date'">시간순</option>
                                            <option value="rating" v-bind:selected="orderBy == 'rating'">별점순</option>
                                        </select>
                                        <input type="hidden" name="paged" value="1">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="vodi-archive-wrapper" data-view="grid">
                            <div class="movies columns-6">
                                <div class="movies__inner">
                                    <MovieItem v-if="data" v-for="(item, index) in data.data.items" :key="index"
                                        :id="item.id" 
                                        :link="item.link"
                                        :slug="item.slug" 
                                        :year="item.year" 
                                        :title="item.title" 
                                        :originalTitle="item.originalTitle" 
                                        :genres="item.genres" 
                                        :src="item.src"
                                        :srcSet="item.srcSet"
                                    />
                                </div>
                            </div>
                        </div>
                        <Pagination v-if="data && data.total * 1 > data.perPage * 1" :base="'/movie-genre/' + genre" :total="data.total" :perPage="data.perPage" :currentPage="page" 
                            :year="year" :genres="genres" :orderBy="orderBy" @on-select-page="onSelectPage"
                        />
                        <div class="kokoads Movie_Bottom_728_90"></div>
                    </div>
                    <div id="secondary" class="widget-area sidebar-area movie-sidebar sidebar-custom-movie" role="complementary" v-if="data">
                        <div class="kokoads Movie_Sidebar_Top_336_280"></div>
                        <div class="widget-area-inner">
                            <MovieSidebarPopularContents :title="'주간 ' + getGenreName(name, data.data.items[0].genres) + (getGenreName(name, data.data.items[0].genres).includes('영화') ? '' : ' 영화') + ' 인기컨텐츠'" :data="data.data.topWeeks" />
                            <div class="kokoads Movie_Sidebar_Middle_336_280_01"></div>
                            <div class="kokoads Movie_Sidebar_Middle_336_280_02"></div>
                            <div class="widget widget_vodi_movies_filter">
                                <MovieSidebarListYear :base="'/movie-genre/' + genre" :selected="year" :genres="genres" @on-select-year="onSelectYear" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>