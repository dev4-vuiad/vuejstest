<script setup>
    import { nextTick } from 'vue'
    const route = useRoute();
    const router = useRouter();

    const orderBy = ref(route.query.orderBy || 'date')
    const page = ref(route.query.page || 1)

    const { data, refresh }  = await useAsyncData(
        () => $fetch('https://backendnew.takitv.net/api/tvshows', {
            params: {
                orderBy: orderBy.value || undefined,
                page: page.value
            }
        }),
        {
            watch: [orderBy, page]
        }
    )

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

    const onSelectPage = function(val) {
        let query = Object.assign({}, route.query)
        query.page = val
        router.push({query: query})
        page.value = val
    }
</script>

<template>
    <body
        class="archive post-type-archive post-type-archive-tv_show wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-archive masvideos-js  sidebar-left dark">
        <div id="page" class="hfeed site">
            <Header />
            <HeaderHandHeld />
            <div id="content" class="site-content " tabindex="-1">
                <div class="container">
                    <TvshowsBreadScrumb />
                    <div class="site-content__inner">
                        <div id="primary" class="content-area"> <!-- ads tv-show top -->
                            <div class="ads-achive-tvshow-top" style="text-align: center;">
                            </div>
                            <div id="feature-cate-page" style="display:block; margin-bottom:10px;">
                                <header class="page-header" style="margin-bottom:15px;">
                                    <h1 class="page-title">인기 컨텐츠</h1>
                                </header>
                                <div class="masvideos masvideos-tv-shows ">
                                    <div class="tv-shows columns-5">
                                        <div class="tv-shows__inner" v-if="data && data.data && data.data.populars">
                                            <TvshowsPopularItem v-for="(item, idx) in data.data.populars" :key="idx" 
                                            :link="item.link"
                                            :year="item.year"
                                            :title="item.title"
                                            :src="item.src"
                                            :episodeNumber="item.episodeNumber" 
                                            :seasonNumber="item.seasonNumber" 
                                            :postDateGmt="item.postDateGmt"
                                            :chanelImage="item.chanelImage"
                                        />
                                        </div>
                                    </div>
                                </div>
                                <center style="margin-top:10px;margin-bottom:10px;" class="ads_cate_top"></center>
                            </div>
                            <header class="page-header">
                                <h1 class="page-title">TV Shows</h1>
                            </header>
                            <div class="masvideos-tv-show-control-bar1 vodi-control-bar">
                                <div class="vodi-control-bar__left">
                                </div>
                                <div class="vodi-control-bar__right">
                                    <div class="tv-shows-ordering">
                                        <div class="handheld-sidebar-toggle"><button class="btn sidebar-toggler"
                                                type="button"><i class="fas fa-sliders-h"></i><span>Filters</span></button>
                                        </div><svg class="svg-icon svg-icon__sort" aria-hidden="true" role="img"
                                            focusable="false" width="17px" height="14px">
                                            <path fill-rule="evenodd"
                                                d="M4.034,-0.001 C4.248,0.009 4.401,0.071 4.578,0.113 C4.699,0.294 4.899,0.408 4.967,0.644 C4.967,1.606 4.967,2.568 4.967,3.529 C4.967,5.972 4.967,8.414 4.967,10.856 C4.980,10.856 4.993,10.856 5.006,10.856 C5.641,10.224 6.276,9.591 6.911,8.958 C7.041,8.873 7.329,8.745 7.572,8.806 C7.930,8.896 8.016,9.121 8.233,9.337 C8.293,10.165 7.817,10.389 7.377,10.818 C6.639,11.539 5.900,12.260 5.161,12.982 C4.928,13.209 4.395,13.909 4.073,13.969 C3.952,13.787 3.760,13.663 3.606,13.513 C3.270,13.184 2.933,12.855 2.596,12.526 C2.052,11.982 1.507,11.438 0.963,10.894 C0.717,10.666 0.471,10.438 0.224,10.211 C0.148,10.110 0.119,9.993 0.030,9.907 C0.015,9.698 -0.048,9.491 0.069,9.337 C0.171,8.957 0.746,8.634 1.235,8.882 C1.922,9.540 2.609,10.198 3.296,10.856 C3.296,7.465 3.296,4.073 3.296,0.682 C3.358,0.600 3.351,0.467 3.412,0.379 C3.511,0.235 3.714,0.158 3.840,0.037 C3.938,0.035 3.984,0.034 4.034,-0.001 ZM12.781,0.037 C12.820,0.037 12.859,0.037 12.898,0.037 C13.999,1.125 15.101,2.214 16.202,3.302 C16.427,3.522 17.287,4.153 16.902,4.668 C16.828,4.945 16.613,4.994 16.435,5.162 C16.280,5.174 16.124,5.187 15.969,5.200 C15.631,5.108 15.447,4.842 15.230,4.630 C14.712,4.137 14.193,3.643 13.675,3.150 C13.675,6.553 13.675,9.958 13.675,13.362 C13.514,13.560 13.485,13.804 13.209,13.893 C13.076,14.007 12.700,14.044 12.548,13.931 C11.760,13.719 12.004,12.233 12.004,11.273 C12.004,8.566 12.004,5.858 12.004,3.150 C11.991,3.150 11.978,3.150 11.965,3.150 C11.676,3.589 10.996,4.095 10.604,4.479 C10.404,4.673 10.198,4.996 9.943,5.124 C9.784,5.204 9.589,5.200 9.360,5.200 C9.238,5.102 9.043,5.080 8.932,4.972 C8.848,4.890 8.822,4.751 8.738,4.668 C8.699,3.730 9.312,3.462 9.827,2.960 C10.811,1.986 11.796,1.011 12.781,0.037 Z">
                                            </path>
                                        </svg>
                                        <form method="get">
                                            <select @change="onChangeOrderBy" class="orderby">
                                                <option value="titleAsc" v-bind:selected="orderBy == 'titleAsc'">A 부터 Z</option>
                                                <option value="titleDesc" v-bind:selected="orderBy == 'titleDesc'">Z 부터 A</option>
                                                <option value="date" v-bind:selected="orderBy == 'date'">시간순</option>
                                                <option value="menuOrder" v-bind:selected="orderBy == 'menuOrder'">Menu Order</option>
                                                <option value="rating" v-bind:selected="orderBy == 'rating'">별점순</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="vodi-archive-wrapper" data-view="grid">
                                <div class="tv-shows columns-6">
                                    <div class="tv-shows__inner">
                                        <TvshowsItem v-if="data" v-for="(item, index) in data.data.items" :key="index" :year="item.year" :title="item.title" :originalTitle="item.originalTitle" :episodeNumber="item.episodeNumber" :seasonNumber="item.seasonNumber" :postDateGmt="item.postDateGmt" :src="item.src" :chanelImage="item.chanelImage" />
                                    </div>
                                </div>
                            </div>
                            <Pagination v-if="data && data.total" base="/tv-shows" :perPage="data.perPage" :currentPage="page" :total="data.total" @on-select-page="onSelectPage" />
                        </div><!-- /.content-area -->
                        <div id="secondary" class="widget-area sidebar-area tv-show-sidebar sidebar-custom" role="complementary">
                            <TvshowsPopularContents v-if="data" title="주간 TVShows 인기컨텐츠" :data="data.data.topWeeks" />
                        </div><!-- #secondary -->
                    </div><!-- /.site-content-inner -->
                </div><!-- /.container -->
            </div><!-- #content -->
            <Footer />
        </div><!-- #page -->
        <div class="modal-register-login-wrapper">
            <div class="modal fade modal-register-login" id="modal-register-login" tabindex="-1" role="dialog"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="masvideos">
                                <div class="masvideos-notices-wrapper"></div>
                                <div class="masvideos-register-login">
                                    <div class="masvideos-register">
                                        <div class="masvideos-register__inner">
                                            <h2>회원가입</h2>
                                            <form method="post" class="masvideos-form masvideos-form-register register">
                                                <p
                                                    class="masvideos-form-row masvideos-form-row--wide form-row form-row-wide">
                                                    <label for="reg_email">이메일&nbsp;<span class="required">*</span></label>
                                                    <input type="email"
                                                        class="masvideos-Input masvideos-Input--text input-text"
                                                        name="email" id="reg_email" autocomplete="email" value="">
                                                </p>
                                                <p class="masvideos-FormRow form-row">
                                                    <input type="hidden" id="masvideos-register-nonce"
                                                        name="masvideos-register-nonce" value="2462fcf372"><input
                                                        type="hidden" name="_wp_http_referer" value="/tv-shows/"> <button
                                                        type="submit" class="masvideos-Button button" name="register"
                                                        value="회원가입">회원가입</button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="masvideos-login">
                                        <div class="masvideos-login__inner">
                                            <h2>Login</h2>
                                            <form class="masvideos-form masvideos-form-login login" method="post">
                                                <p
                                                    class="masvideos-form-row masvideos-form-row--wide form-row form-row-wide">
                                                    <label for="username">아이디/이메일&nbsp;<span
                                                            class="required">*</span></label>
                                                    <input type="text"
                                                        class="masvideos-Input masvideos-Input--text input-text"
                                                        name="username" id="username" autocomplete="username" value="">
                                                </p>
                                                <p
                                                    class="masvideos-form-row masvideos-form-row--wide form-row form-row-wide">
                                                    <label for="password">비밀번호&nbsp;<span class="required">*</span></label>
                                                    <input class="masvideos-Input masvideos-Input--text input-text"
                                                        type="password" name="password" id="password"
                                                        autocomplete="current-password">
                                                </p>
                                                <p class="form-row">
                                                    <input type="hidden" id="masvideos-login-nonce"
                                                        name="masvideos-login-nonce" value="51d64bb6c2"><input type="hidden"
                                                        name="_wp_http_referer" value="/tv-shows/"> <button type="submit"
                                                        class="masvideos-Button button" name="login"
                                                        value="로그인">로그인</button>
                                                    <label
                                                        class="masvideos-form__label masvideos-form__label-for-checkbox inline">
                                                        <input class="masvideos-form__input masvideos-form__input-checkbox"
                                                            name="rememberme" type="checkbox" id="rememberme"
                                                            value="forever"> <span>아이디 기억하기</span>
                                                    </label>
                                                </p>
                                                <p class="masvideos-LostPassword lost_password">
                                                    <a
                                                        href="/wp-login.php?action=lostpassword">비밀번호찾기</a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> <a class="close-button" data-dismiss="modal" aria-label="Close"><i
                                    class="la la-close"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <div class="pswp__counter"></div>
                        <button class="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
                        <button class="pswp__button pswp__button--share" aria-label="Share"></button>
                        <button class="pswp__button pswp__button--fs" aria-label="Toggle fullscreen"></button>
                        <button class="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>
                    <button class="pswp__button pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
                    <button class="pswp__button pswp__button--arrow--right" aria-label="Next (arrow right)"></button>
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
        <p id="a11y-speak-intro-text" class="a11y-speak-intro-text"
            style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
            hidden="hidden">알림</p>
        <div id="a11y-speak-assertive" class="a11y-speak-region"
            style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
            aria-live="assertive" aria-relevant="additions text" aria-atomic="true"></div>
        <div id="a11y-speak-polite" class="a11y-speak-region"
            style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
            aria-live="polite" aria-relevant="additions text" aria-atomic="true"></div><a id="scrollUp" href="#top"
            style="position: fixed; z-index: 1001;"><i class="fas fa-angle-up"></i></a>
        <ul id="ui-id-1" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
            style="display: none;"></ul>
        <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
        <ul id="ui-id-2" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
            style="display: none;"></ul>
        <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
    </body>
</template>