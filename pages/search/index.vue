<script setup>
    import { nextTick, ref } from 'vue'
    const route = useRoute();
    const router = useRouter();
    const s = route.query.s
    const orderBy = ref(route.query.orderBy || 'date')
    const page = ref(route.query.page || 1)

    useHead({
        bodyAttrs: {
            class: 'search search-no-results wp-custom-logo wp-embed-responsive masvideos-js any-search-results sidebar-right dark sidebar-left template-search-custom-page'
        }
    });

    const { data }  = await useAsyncData(
        () => $fetch('https://backendnew.takitv.net/api/search', {
            params: {
                title: s,
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
    <div>
        <Head>
            <Title>{{ 'Search Results for “' + s + '” – 코코아티비 :: KOKOA.TV' }}</Title>
         </Head>
    </div>
        <div id="page" class="hfeed site">
            <Header />
            <HeaderHandHeld />
            <div id="content" class="site-content " tabindex="-1">

                <div class="container">
                    <nav class="masvideos-breadcrumb"><a href="https://kokoatv.net">Home</a><span class="delimiter"><svg
                                width="4px" height="7px">
                                <path fill-rule="evenodd"
                                    d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z">
                                </path>
                            </svg></span>Search results for “{{ s }}”</nav>
                    <div class="handheld-sidebar-toggle"><button class="btn sidebar-toggler" type="button"><i
                                class="fas fa-sliders-h"></i><span>Filters</span></button></div>
                    <div class="site-content__inner">
                        <div id="primary" class="content-area">

                            <center>
                            </center>

                            <main id="main" class="site-main" role="main">

                                <div class="vodi-control-bar">

                                    <div class="vodi-control-bar__left">

                                        <h2 class="h2_title_search">“{{ s }}” <span class="span_title_search">검색결과
                                                입니다</span> </h2>
                                    </div>
                                    <div class="vodi-control-bar__right">
                                        <!-- sort -->
                                        <div class="tv-shows-ordering">
                                            <div class="handheld-sidebar-toggle">
                                                <button class="btn sidebar-toggler" type="button">
                                                    <i class="fas fa-sliders-h"></i>
                                                    <span>Filter</span>
                                                </button>
                                            </div>
                                            <svg class="svg-icon svg-icon__sort" aria-hidden="true" role="img"
                                                focusable="false" width="17px" height="14px">
                                                <path fill-rule="evenodd"
                                                    d="M4.034,-0.001 C4.248,0.009 4.401,0.071 4.578,0.113 C4.699,0.294 4.899,0.408 4.967,0.644 C4.967,1.606 4.967,2.568 4.967,3.529 C4.967,5.972 4.967,8.414 4.967,10.856 C4.980,10.856 4.993,10.856 5.006,10.856 C5.641,10.224 6.276,9.591 6.911,8.958 C7.041,8.873 7.329,8.745 7.572,8.806 C7.930,8.896 8.016,9.121 8.233,9.337 C8.293,10.165 7.817,10.389 7.377,10.818 C6.639,11.539 5.900,12.260 5.161,12.982 C4.928,13.209 4.395,13.909 4.073,13.969 C3.952,13.787 3.760,13.663 3.606,13.513 C3.270,13.184 2.933,12.855 2.596,12.526 C2.052,11.982 1.507,11.438 0.963,10.894 C0.717,10.666 0.471,10.438 0.224,10.211 C0.148,10.110 0.119,9.993 0.030,9.907 C0.015,9.698 -0.048,9.491 0.069,9.337 C0.171,8.957 0.746,8.634 1.235,8.882 C1.922,9.540 2.609,10.198 3.296,10.856 C3.296,7.465 3.296,4.073 3.296,0.682 C3.358,0.600 3.351,0.467 3.412,0.379 C3.511,0.235 3.714,0.158 3.840,0.037 C3.938,0.035 3.984,0.034 4.034,-0.001 ZM12.781,0.037 C12.820,0.037 12.859,0.037 12.898,0.037 C13.999,1.125 15.101,2.214 16.202,3.302 C16.427,3.522 17.287,4.153 16.902,4.668 C16.828,4.945 16.613,4.994 16.435,5.162 C16.280,5.174 16.124,5.187 15.969,5.200 C15.631,5.108 15.447,4.842 15.230,4.630 C14.712,4.137 14.193,3.643 13.675,3.150 C13.675,6.553 13.675,9.958 13.675,13.362 C13.514,13.560 13.485,13.804 13.209,13.893 C13.076,14.007 12.700,14.044 12.548,13.931 C11.760,13.719 12.004,12.233 12.004,11.273 C12.004,8.566 12.004,5.858 12.004,3.150 C11.991,3.150 11.978,3.150 11.965,3.150 C11.676,3.589 10.996,4.095 10.604,4.479 C10.404,4.673 10.198,4.996 9.943,5.124 C9.784,5.204 9.589,5.200 9.360,5.200 C9.238,5.102 9.043,5.080 8.932,4.972 C8.848,4.890 8.822,4.751 8.738,4.668 C8.699,3.730 9.312,3.462 9.827,2.960 C10.811,1.986 11.796,1.011 12.781,0.037 Z">
                                                </path>
                                            </svg>

                                            <form method="get">
                                                <select class="orderby" @change="onChangeOrderBy">
                                                    <option value="date" v-bind:selected="orderBy == 'date'">시간순</option>
                                                    <option value="titleAsc" v-bind:selected="orderBy == 'titleAsc'">A 부터 Z</option>
                                                    <option value="titleDesc" v-bind:selected="orderBy == 'titleDesc'">Z 부터 A</option>
                                                </select>

                                                <input type="hidden" name="paged" value="1">

                                                <input type="hidden" name="s" value="oppenheimer">
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="vodi-archive-wrapper search-movie" data-view="grid">
                                    <div class="tv-shows columns-6 movies columns-6">
                                        <div class="tv-shows__inner movies__inner" v-if="data && data.data && data.data.items.length">
                                            <SearchMovieItem v-for="(item, index) in data.data.items" :key="index"
                                                :title="item.title" 
                                                :originalTitle="item.originalTitle" 
                                                :src="item.src"
                                                :seasonNumber="item.seasonNumber"
                                                :episodeNumber="item.episodeNumber"
                                                :link="item.link"
                                                :postType="item.postType"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Pagination v-if="data && data.total > data.perPage" 
                                    :total="data.total" 
                                    :perPage="data.perPage" 
                                    :currentPage="page" 
                                    :orderBy="orderBy"
                                    @on-select-page="onSelectPage"
                                />
                            </main>
                        </div>
                        <div id="secondary" class="widget-area sidebar-area tv-show-sidebar sidebar-custom"
                            role="complementary">
                            <div class="widget-area-inner">
                                <SearchTopWeek title="주간 TVShows 인기컨텐츠" v-if="data && data.data"
                                    :data="data.data.topWeeks" type="tv-show" base="tv-show-genre" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <footer id="colophon" class="site-footer site__footer--v4 desktop-footer dark" role="contentinfo">
            <div class="container">

                <div class="footer-v4-bar">
                    <div class="site-footer__logo footer-logo"><a href="/" class="custom-logo-link"
                            rel="home"><img width="653" height="152"
                                src="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png"
                                class="custom-logo" alt="코코아티비 :: KOKOA.TV"
                                srcset="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png 653w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-300x70.png 300w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-24x6.png 24w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-36x8.png 36w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-48x11.png 48w"
                                sizes="(max-width: 653px) 100vw, 653px"></a></div>
                    <div class="site-footer__social-icons footer-social-icons">
                        <ul id="menu-footer-social-menu" class="social-icons">
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4994">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fab fa-facebook-f social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Facebook</span></a>
                            </li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4995">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fab fa-twitter social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Twitter</span></a>
                            </li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4996">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fab fa-google-plus-g social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Google+</span></a>
                            </li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4997">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fas fa-globe social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Vimeo</span></a>
                            </li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4998">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fas fa-rss social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">RSS</span></a>
                            </li>
                        </ul>
                    </div>
                </div><!-- /.footer-v4-bar -->
                <div class="site-footer__info site-info">
                    Copyright © 2022, kokoatv.net. All Rights Reserved </div><!-- .site-info -->
            </div><!-- .container -->
        </footer><!-- #colophon -->

        <footer class="site-footer handheld-footer dark">
            <div class="container">
                <div class="site-footer__info site-info">
                    Copyright © 2022, kokoatv.net. All Rights Reserved </div><!-- .site-info -->
            </div><!-- /.container -->
        </footer>
        <!-- #page -->
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
                                                        type="hidden" name="_wp_http_referer" value="/?s=oppenheimer">
                                                    <button type="submit" class="masvideos-Button button" name="register"
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
                                                        name="_wp_http_referer" value="/?s=oppenheimer"> <button
                                                        type="submit" class="masvideos-Button button" name="login"
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
            style="display: none; position: fixed; z-index: 1001;"><i class="fas fa-angle-up"></i></a>
        <ul id="ui-id-1" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
            style="display: none;"></ul>
        <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
        <ul id="ui-id-2" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
            style="display: none;"></ul>
    <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
</template>