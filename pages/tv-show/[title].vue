<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title

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


                // Bottom slider
                let slider = $('#tv-show-related').find('.tv-shows__inner').slick({
                    "slidesToShow":5,
                    "slidesToScroll":5,
                    "dots":false,
                    "arrows":true,
                    "autoplay":false,
                    "responsive":[{"breakpoint":767,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}}]
                })
                $('#tv-show-related').find('button.slick-next').on('click', function() {
                    slider.slick('slickNext')
                })
                $('#tv-show-related').find('button.slick-prev').on('click', function() {
                    slider.slick('slickPrev')
                })
            }
        }
    })

    const { data, pending }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/tvshows/details', {
            params: {
                title: title,
                slug: title
            }
        }),
        {
            default: () => ({
                topWeeks: Array.from(Array(5), (_, index) => ({})),
                topMonths: Array.from(Array(5), (_, index) => ({}))
            })
        }
    )

    useHead({
        title: title + ' 코코아티비 :: KOKOATV.NET',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: title + ' - 최신 한국드라마,미드, 예능,시사 스트리밍 다시보기 사이트 : 코코아티비 :: KOKOATV.NET 에서 무료로 즐기세요, 넷플릭스, 와차, 디즈니 플러스등 각종 OTT 컨텐츠를 감상하실 수 있습니다.'
            }
        ],
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-NL156SRJ6P"),gtag("config","UA-160268616-2");',
                body: true
            }
        ]
    });
    
</script>

<template>
    <div class="single-tv_show masvideos full-width dark">
        <div class="site-content " tabindex="-1">
            <div class="container">
                <TvshowBreadScrumb 
                    :pending="pending"
                    :title="data.title"
                />
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-k-drama">
                            <TvshowInfo
                                :pending="pending"
                                :id="data.id"
                                :title="data.title"
                                :originalTitle="data.originalTitle"
                                :src="data.src"
                                :description="data.description"
                            />
                            <TvshowSeasonSection :data="data.seasons" :src="data.src" :srcSet="data.srcSet" :pending="pending" />
                            <div class="kokoads Season_Middle_728_90"></div>
                            <TvshowRelatedSection v-if="data && data.relateds && data.relateds.length" :data="data.relateds" :title="data.title" />
                            <div class="kokoads Season_Bottom_728_90"></div>
                            <div class="masvideos-tabs tv-show-tabs">
                                <ul class="nav" pos="0">
                                    <li class="nav-item">
                                        <a href="#tab-64e6fc8d00f54description" data-toggle="tab"
                                            class="nav-link active show">
                                            Description </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#tab-64e6fc8d00f54reviews" data-toggle="tab" class="nav-link">
                                            Review </a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tab-64e6fc8d00f54description" class="tab-pane active show">
                                        <div class="tv-show__description" style="margin-top: 22px;">

                                        </div>
                                    </div>
                                    <div id="tab-64e6fc8d00f54reviews" class="tab-pane">
                                        <div id="reviews" class="masvideos-Reviews">

                                            <div id="review_form_wrapper">
                                                <div id="review_form">
                                                    <div id="respond" class="comment-respond">
                                                        <span id="reply-title" class="comment-reply-title">Be the first
                                                            to review “마스크걸” <small><a rel="nofollow"
                                                                    id="cancel-comment-reply-link"
                                                                    href="/tv-show/%eb%a7%88%ec%8a%a4%ed%81%ac%ea%b1%b8/?season-position=0#respond"
                                                                    style="display:none;">Cancel
                                                                    reply</a></small></span>
                                                        <form action="/wp-comments-post.php"
                                                            method="post" id="commentform" class="comment-form"
                                                            novalidate="">
                                                            <p class="comment-notes"><span id="email-notes">Your email
                                                                    address will not be published.</span> <span
                                                                    class="required-field-message">Required fields are
                                                                    marked <span class="required">*</span></span></p>
                                                            <div class="comment-form-rating"><label for="rating">Your
                                                                    rating</label>
                                                                <p class="stars"><span><a class="star-1"
                                                                            href="#">1</a><a class="star-2"
                                                                            href="#">2</a><a class="star-3"
                                                                            href="#">3</a><a class="star-4"
                                                                            href="#">4</a><a class="star-5"
                                                                            href="#">5</a><a class="star-6"
                                                                            href="#">6</a><a class="star-7"
                                                                            href="#">7</a><a class="star-8"
                                                                            href="#">8</a><a class="star-9"
                                                                            href="#">9</a><a class="star-10"
                                                                            href="#">10</a></span></p><select
                                                                    name="rating" id="rating" required=""
                                                                    style="display: none;">
                                                                    <option value="">Rate…</option>
                                                                    <option value="10">10</option>
                                                                    <option value="9">9</option>
                                                                    <option value="8">8</option>
                                                                    <option value="7">7</option>
                                                                    <option value="6">6</option>
                                                                    <option value="5">5</option>
                                                                    <option value="4">4</option>
                                                                    <option value="3">3</option>
                                                                    <option value="2">2</option>
                                                                    <option value="1">1</option>
                                                                </select>
                                                            </div>
                                                            <p class="comment-form-comment"><label for="comment">Your
                                                                    review&nbsp;<span
                                                                        class="required">*</span></label><textarea
                                                                    id="comment" name="comment" cols="45" rows="8"
                                                                    required=""></textarea></p>
                                                            <p class="comment-form-author"><label
                                                                    for="author">Name&nbsp;<span
                                                                        class="required">*</span></label> <input
                                                                    id="author" name="author" type="text" value=""
                                                                    size="30" required=""></p>
                                                            <p class="comment-form-email"><label
                                                                    for="email">Email&nbsp;<span
                                                                        class="required">*</span></label> <input
                                                                    id="email" name="email" type="email" value=""
                                                                    size="30" required=""></p>
                                                            <p class="comment-form-cookies-consent"><input
                                                                    id="wp-comment-cookies-consent"
                                                                    name="wp-comment-cookies-consent" type="checkbox"
                                                                    value="yes"> <label
                                                                    for="wp-comment-cookies-consent">Save my name,
                                                                    email, and website in this browser for the next time
                                                                    I comment.</label></p>
                                                            <p class="form-submit"><input name="submit" type="submit"
                                                                    id="submit" class="submit" value="Submit"> <input
                                                                    type="hidden" name="comment_post_ID" value="203734"
                                                                    id="comment_post_ID">
                                                                <input type="hidden" name="comment_parent"
                                                                    id="comment_parent" value="0">
                                                            </p>
                                                        </form>
                                                    </div><!-- #respond -->
                                                </div>
                                            </div>

                                            <div id="comments">

                                                <p class="masvideos-noreviews">There are no reviews yet.</p>

                                            </div>

                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single_tv_show__sidebar tv-show-sidebar column">
                            <div class="widget-area-inner">
                                <TvshowTopWeekMonth :pending="pending" :topWeeks="data.topWeeks" :topMonths="data.topMonths" />
                                <div class="kokoads Season_Sidebar_Bottom_336_280"></div>
                                <div class="widget widget_text">
                                    <div class="textwidget">
                                        <div class="widget-box-ads-tvshow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>