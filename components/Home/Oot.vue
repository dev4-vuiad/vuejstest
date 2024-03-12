<script setup>
    const props = defineProps(['pending', 'title', 'sliders'])
    let pending = props.pending
    let title = props.title
    let sliders = props.sliders

    onBeforeMount(() => {
        if (pending) {
            sliders = Array.from(Array(10), (_, index) => ({}))
            title = ''
            
        }
    })

    watch(
        () => props.pending,
        () => {
            title = props.title
            sliders = props.sliders
        }
    )

    onMounted(() => {
        const setupPrevNextBtns1 = (prevBtn1, nextBtn1, embla1) => {
            prevBtn1.addEventListener('click', embla1.scrollPrev, false);
            nextBtn1.addEventListener('click', embla1.scrollNext, false);
        };
        const disablePrevNextBtns1 = (prevBtn1, nextBtn1, embla1) => {
            return () => {
                if (embla1.canScrollPrev()) prevBtn1.removeAttribute('disabled');
                else prevBtn1.setAttribute('disabled', 'disabled');
                if (embla1.canScrollNext()) nextBtn1.removeAttribute('disabled');
                else nextBtn1.setAttribute('disabled', 'disabled');
            };
        };
        const wrap1 = document.querySelector('.embla1');
        if (wrap1) {
            const viewPort1 = wrap1.querySelector('.embla__viewport1');
            const prevBtn1 = wrap1.querySelector('.embla__button--prev1');
            const nextBtn1 = wrap1.querySelector('.embla__button--next1');
            const embla1 = EmblaCarousel(viewPort1, { dragFree: true, containScroll: 'trimSnaps', align: 0.08, skipSnaps: true });
            const disablePrevAndNextBtns1 = disablePrevNextBtns1(prevBtn1, nextBtn1, embla1);
            setupPrevNextBtns1(prevBtn1, nextBtn1, embla1);
            embla1.on('select', disablePrevAndNextBtns1);
            embla1.on('init', disablePrevAndNextBtns1);
            jQuery(document).ready(function () {
                var wr = jQuery('.embla__slide__inner1').width();
                if (wr < 220) {
                    jQuery('.embla__slide__img1').each(function () {
                        jQuery(this).css('width', wr);
                    });
                }
                jQuery(window).resize(function () {
                    var wr = jQuery('.embla__slide__inner1').width();
                    if (wr < 220) {
                        jQuery('.embla__slide__img1').each(function () {
                            jQuery(this).css('width', wr);
                        });
                    }
                });
            });
        }
    })
</script>

<template>
    <div class="ott_logo">
        <div class="ott_home_item">
            <NuxtLink to="/ott-web/netflix/">
                <img src="https://image-cdn.imedia10.com/bmytv-images/netflix.png" alt="netflix" />
            </NuxtLink>
        </div>
        <div class="ott_home_item">
            <NuxtLink to="/ott-web/disney/">
                <img src="https://image-cdn.imedia10.com/bmytv-images/disney_plus.png" alt="disney plus" />
            </NuxtLink>
        </div>
        <div class="ott_home_item">
            <NuxtLink to="/ott-web/apple-tv/">
                <img src="https://image-cdn.imedia10.com/bmytv-images/appletv.png" alt="apple tv" />
            </NuxtLink>
        </div>
        <div class="ott_home_item">
            <NuxtLink to="/ott-web/tving/">
                <img src="https://image-cdn.imedia10.com/bmytv-images/tving.png" alt="tving" />
            </NuxtLink>
        </div>
        <div class="ott_home_item">
            <NuxtLink to="/ott-web/amazon-prime-video/">
                <img src="https://image-cdn.imedia10.com/bmytv-images/prime.png" alt="prime" />
            </NuxtLink>
        </div>
        <div class="ott_home_item">
            <NuxtLink to="/ott-web/coupang-play/">
                <img src="https://image-cdn.imedia10.com/bmytv-images/coupang_play.png" alt="Coupang play" />
            </NuxtLink>
        </div>
    </div>
    <div class="slider-title-netflix">
        <div class="container">
            <h2 class="slider-title-korea">
                {{ title }}
            </h2>
        </div>
    </div>
    <div class="embla1">
        <div class="embla__viewport1">
            <div class="embla__container1" style="transform: translate3d(0%, 0px, 0px);">
                <div class="embla__slide1" v-for="(item, index) in sliders" :postid="item.id">
                    <span class="tv-show__meta--release-year" style="z-index:999">{{ item.year || '&nbsp;' }}</span>
                    <div class="embla__slide__inner1">
                        <NuxtLink class="tv-show__link" :to="'/' + (item.seasonNumber && item.seasonNumber.length ? 'episode/' + item.slug : 'movie/' + item.slug)">
                            <img class="embla__slide__img1 lazyload" decoding="async" :src="item.src" :key="item.id" />
                        </NuxtLink>
                        <div class="slide-box-number">{{ index + 1 }}</div>
                    </div>
                    <div class="box_meta">
                        <NuxtLink :to="'/' + (item.seasonNumber && item.seasonNumber.length ? 'episode/' + item.slug : 'movie/' + item.slug)">
                            <span class="s_e_title_1">{{ item.seasonNumber ? '시즌 ' + item.seasonNumber + ' –' : '' }} {{ item.episodeNumber ? item.episodeNumber + '화' : '' }}</span>
                            <h2 class="title_1">{{ item.title }}</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <button class="embla__button embla__button--prev1" type="button" disabled="disabled">
            <svg class="embla__button__svg" viewBox="137.718 -1.001 366.563 643.999">
                <path
                    d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z">
                </path>
            </svg>
        </button>
        <button class="embla__button embla__button--next1" type="button">
            <svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
                <path
                    d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z">
                </path>
            </svg>
        </button>
    </div>
</template>