<template lang="" id="detailCard">
    <h2>{{movie.title}}</h2>

    <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path"/>
    <img v-else src="/img/poster.jpg"/>

    <br>

    <label>Film dili: {{movie.original_language.toUpperCase()}}</label>

    <h5 v-if="movie.release_date">Çıkış Tarihi {{dateFormat(movie.release_date)}}</h5>
    <h5 v-else >Tarih Bilinmiyor</h5>

    <h4>{{movie.vote_average}}/10<span>&#127775;</span></h4>
    <h5>{{movie.vote_count}} oy kullanıldı</h5>

    <ul v-if="movie.genre_ids">
      <li v-for="movieGenre in genresMovies(movie.genre_ids)">
        {{movieGenre}}
      </li>
    </ul>
    <ul v-else>
      <li v-for="genre in movie.genres">
        {{genre.name}}
      </li>
    </ul>

    <h3 v-if="movie.overview">Özet</h3>
    <h3 v-else="movie.overview">Özet Bulunamadı.</h3>
    <p>{{movie.overview}}</p>

</template>

<script>
import poster from '/img/poster.jpg'


export default {
  data(){
    return {
      poster: poster,
    }
  },
  props: {
    movie: Object,
    genres: Object,
    add: Boolean
  },
  methods: {
    dateFormat(date) {
      let [yy, mm, dd] = date.split('-')
      return [dd, mm, yy].join('/');
    },
    genresMovies(idGenre){
      let genresArray = [];
      for (let i = 0; i < idGenre.length; i++) {
        for (let j = 0; j < this.genres.length; j++) {
          if (idGenre[i] === this.genres[j].id) {
            genresArray.push(this.genres[j].name)
          }
        }
      }
      return genresArray;
    }
  },
}
</script>
