<script setup>
    const route = useRoute()
    const title = ref(route.params.title)

    const { data, refresh }  = await useAsyncData(
        () => $fetch('https://backendnew.takitv.net/api/movies', {
            params: {
                title: title.value
            }
        }),
        {
            watch: [title]
        }
    )

    const lastGenre = (genres) => {
        return genres[genres.length - 1]
    }

</script>
<template>
    <body
        class="movie-template-default single single-movie postid-202135 wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-movie-v2 full-width dark ">
        <div id="page" class="hfeed site">
            <Header />
            <HeaderHandHeld />
            <div id="content" class="site-content " tabindex="-1">
                <div class="container">
                    <div class="site-content__inner">
                        <div id="primary" class="content-area">
                            <div id="movie-202135"
                                class="post-202135 movie type-movie status-publish has-post-thumbnail hentry movie_genre-230 movie_genre-238 movie_genre-wmovie">
                                <div class="single-movie__player-container stretch-full-width">
                                    <div class="single-movie__player-container--inner container">
                                        <MovieBreadScrumb v-if="data && data.data && data.data.items.length && data.data.items[0].genres.length" :genre="lastGenre(data.data.items[0].genres)" :title="data.data.items[0].title" />
                                        <div class="ads-movie-top" style="text-align: center;margin-bottom: 10px;">
                                        </div>
                                        <div class="single-movie__row row">
                                            <MovieIntroInfo v-if="data && data.data && data.data.items && data.data.items[0]"
                                                :year="data.data.items[0].year"
                                                :movieRunTime="data.data.items[0].movieRunTime"
                                                :title="data.data.items[0].title"
                                                :originalTitle="data.data.items[0].originalTitle"
                                                :genres="data.data.items[0].genres"
                                                :src="data.data.items[0].src"
                                                :description="data.data.items[0].description"
                                                :outlink="data.data.items[0].outlink"
                                            />
                                            <div class="single-movie-ads-box">
                                                <div class="ads-box-child">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section class="movie__related">
                                    <div class="movie__related--inner">
                                        <h2 class="movie__related--title">관련 컨텐츠</h2>
                                        <MovieIntroRelatedList v-if="data && data.data && data.data.items && data.data.items[0]" :data="data.data.items[0].relateds" />
                                    </div>
                                </section>
                                <div style="text-align: center;margin-top: 10px;"></div>
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
                                                        name="masvideos-register-nonce" value="700ba13235"><input
                                                        type="hidden" name="_wp_http_referer"
                                                        value="/movie/%ec%96%b4-%ed%95%98%ec%9d%b4%ec%96%b4-%eb%a1%9c/">
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
                                                        name="masvideos-login-nonce" value="85e044ef1c"><input type="hidden"
                                                        name="_wp_http_referer"
                                                        value="/movie/%ec%96%b4-%ed%95%98%ec%9d%b4%ec%96%b4-%eb%a1%9c/">
                                                    <button type="submit" class="masvideos-Button button" name="login"
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
</body>
</template>