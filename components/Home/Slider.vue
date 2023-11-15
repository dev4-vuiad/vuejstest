<script setup>
    const props = defineProps(['data'])
    const renderCount = ref(0)
    let data = props.data

    watch(
        () => props.data,
        () => {
            const oldId = data[0].id
            data = props.data
            if (data[0].id && oldId !== data[0].id) {
                renderCount.value ++
            }   
        }
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
        EmblaCarousel.defaultOptions = { loop: true };
        const wrap = document.querySelector('.embla');
        if (wrap) {
            const viewPort = wrap.querySelector('.embla__viewport');
            const prevBtn = wrap.querySelector('.embla__button--prev');
            const nextBtn = wrap.querySelector('.embla__button--next');
            const embla = EmblaCarousel(viewPort, { dragFree: true, containScroll: 'trimSnaps', align: 0.08, skipSnaps: true });
            const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
            setupPrevNextBtns(prevBtn, nextBtn, embla);
            embla.on('select', disablePrevAndNextBtns);
            embla.on('init', disablePrevAndNextBtns);
            jQuery(document).ready(function () {
                var wr = jQuery('.embla__slide__inner').width();
                if (wr < 220) {
                    jQuery('.embla__slide__img').each(function () {
                        jQuery(this).css('width', wr);
                    });
                }
                jQuery(window).resize(function () {
                    var wr = jQuery('.embla__slide__inner').width();
                    if (wr < 220) {
                        jQuery('.embla__slide__img').each(function () {
                            jQuery(this).css('width', wr);
                        });
                    }
                });
            });
        }
    })
</script>

<template>
    <div class="embla">
        <div class="embla__viewport">
            <div class="embla__container">
                <div class="embla__slide" v-for="(item, index) in data" :key="index" :postid="item.id">
                    <div class="embla__slide__inner loading-bg">
                        <a class="movie__link" :href="(item.postType == 'movie' ? '/movie/' : '/episode/') + item.slug">
                            <img class="embla__slide__img lazyload" :src="item.src" :srcset="item.srcSet" :key="renderCount" decoding="async" />
                        </a>
                    </div>
                    <div class="box_meta">
                        <a :href="(item.postType == 'movie' ? '/movie/' : '/episode/') + item.slug">
                            <span class="s_e_title_1" v-if="item.postType == 'tv_show' && item.episodeNumber">{{ item.episodeNumber.includes('.') ? '스페셜화' : item.episodeNumber + '화' }}</span>
                            <h2 class="title_1">{{ item.title }}</h2>
                        </a>
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