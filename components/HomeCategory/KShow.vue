<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const { $getEpTxt } = useNuxtApp()
    
    const { data: items } = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/tvShowHomepage', {
            params: {
                type: 'k-show'
            }
        })
    )

    onMounted(() => {
        const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
            prevBtn.addEventListener('click', embla.scrollPrev, false);
            nextBtn.addEventListener('click', embla.scrollNext, false);
        };
        const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
            return () => {
                if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
                else prevBtn.setAttribute('disabled', 'disabled');
                if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
                else nextBtn.setAttribute('disabled', 'disabled');
            };
        };
        EmblaCarousel.defaultOptions = { loop: true};
        const wrap = document.querySelector('.embla.k-show');
        if (wrap) {
            const viewPort = wrap.querySelector('.embla__viewport');
            const prevBtn = wrap.querySelector('.embla__button--prev');
            const nextBtn = wrap.querySelector('.embla__button--next');
            const embla = EmblaCarousel(viewPort, { dragFree: true, containScroll: 'trimSnaps', align: 0.08, skipSnaps: true});
            const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
            setupPrevNextBtns(prevBtn, nextBtn, embla);
            embla.on('select', disablePrevAndNextBtns);
            embla.on('init', disablePrevAndNextBtns);
            jQuery(document).ready(function () {
                var wr = jQuery('.embla.k-show .embla__slide__inner').width();
                if (wr < 220) {
                    jQuery('.embla.k-show .embla__slide__img').each(function () {
                        jQuery(this).css('width', wr);
                    });
                }
                $(window).resize(function () {
                    var wr = jQuery('.embla.k-show .embla__slide__inner').width();
                    if (wr < 220) {
                        jQuery('.embla.k-show .embla__slide__img').each(function () {
                            jQuery(this).css('width', wr);
                        });
                    }
                });
            });
        }
    })

</script>

<template>
    <div class="embla seven k-show">
        <div class="embla__viewport home-tv-show-section-aside-header__inner">
            <p>영화 예능</p>
            <div class="embla__container">
                <div class="embla__slide" v-for="item in items">
                    <div class="embla__slide__inner tv-show__poster loading-bg">
                        <NuxtLink :to="'/episode/' + item.slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                            <img
                                :src="item.src"
                                :srcset="item.srcSet"
                                class="embla__slide__img lazyload" alt=""
                            />
                        </NuxtLink>
                    </div>
                    <div class="tv-show__body">
                        <div class="tv-show__info">
                            <div class="tv-show__info--head">
                                <div class="original-title-tvshow">
                                    {{ item.originalTitle || ' ' }}
                                </div>
                                <NuxtLink :to="'/episode/' + item.slug"
                                    class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"><span
                                        class="span_sea_ep_title">{{ $getEpTxt(item.seasonNumber, item.episodeNumber) }}</span>
                                    <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ item.tvshowTitle }}</h3>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="embla__button embla__button--prev" type="button" disabled="disabled">
            <svg class="embla__button__svg" viewBox="137.718 -1.001 366.563 643.999">
                <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z">
                </path>
            </svg>
        </button>
        <button class="embla__button embla__button--next" type="button">
            <svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
                <path
                    d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z">
                </path>
            </svg>
        </button>
    </div>
</template>