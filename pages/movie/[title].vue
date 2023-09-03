<script setup>
    const route = useRoute()
    const title = ref(route.params.title)

    definePageMeta({
        layout: 'movie'
    })

    const { data }  = await useAsyncData(
        () => $fetch('https://backendnew.takitv.net/api/movies', {
            params: {
                title: title.value
            }
        }),
        {
            watch: [title]
        }
    )

    useHead({
        title: title + ' – 코코아티비 :: KOKOA.TV'
    });

    const lastGenre = (genres) => {
        return genres[genres.length - 1]
    }

</script>
<template>
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
                                        :duration="data.data.items[0].duration"
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
</template>