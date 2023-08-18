<script setup>
    const props = defineProps(['year', 'movieRunTime', 'title', 'originalTitle', 'genres', 'src', 'description', 'outlink', 'episodeNumber'])
    const year = props.year
    const movieRunTime = props.movieRunTime
    const title = props.title
    const originalTitle = props.originalTitle
    const genres = props.genres
    const src = props.src
    const description = props.description
    const outlink = props.outlink
    const episodeNumber = props.episodeNumber
</script>

<template>
    <div class="movie__head">
        <div class="movie__player">
            <p>https://short.ink/BVP6do_hS<br>
                https://videojs.vidground.com/watch/cVGpkrEHDvy</p>
        </div>
    </div>
    <div class="single-movie__sidebar column poster-custom">
        <div class="movie__poster">
            <img width="300" height="450" :src="src" class="movie__poster--image" alt="" loading="lazy"
                sizes="(max-width: 300px) 100vw, 300px">
        </div>
        <div class="summary entry-summary">
            <div class="single-movie__sidebar--head-info">
                <div class="movie__body">
                    <h3 class="masvideos-loop-movie__title  movie__title"> {{ title }} </h3>
                    <div class="original-title__single">
                        {{ originalTitle }}
                    </div>
                    <div class="movie__meta">
                        <span v-if="year" class="movie__meta--release-year">{{ year }}</span>
                        <span v-if="movieRunTime" class="movie__meta--movie-run-time">{{ movieRunTime }}</span>
                        <span class="movie__meta--genre">
                            <template v-for="(genre, idx) in genres" :key="idx">
                                <span v-if="idx > 0">, </span>
                                <a :href="'/movie-genre/' + genre.link" rel="tag">{{ genre.name }}</a>
                            </template>
                        </span>
                    </div>
                    <div class="vodi-views-likes"></div>
                </div>
            </div>
            <div style="margin-bottom:15px;">
                <a :href="outlink" class="a_btn_out">
                    <button class="btn-outlink">바로보기</button>
                </a>
            </div>
            <div class="movie__rating-with-playlist">
                <div class="movie-actions--link_add-to-playlist dropdown">
                    <a class="dropdown-toggle" href="https://kokoatv.net/movie/%ed%95%98%ec%9d%b4%ed%9e%90/"
                        data-toggle="dropdown">+플레이리스트</a>
                    <div class="dropdown-menu">
                        <a class="login-link" href="https://kokoatv.net/my-account/movie-playlists/">Sign in to add this
                            movie to a playlist.</a>
                    </div>
                </div>
            </div>
            <div class="movie__description">
                <div style="height: 47px; max-height: none;" data-readmore="" aria-expanded="false" id="rmjs-1">
                    <p v-html="description"></p>
                </div>
                <a class="maxlist-more" href="#" data-readmore-toggle="rmjs-1" aria-controls="rmjs-1">더 보기</a>
            </div>
            <div class="movie__sharing vodi-sharing"></div>
            <div class="movie__info--head"></div>
        </div>
    </div>
</template>