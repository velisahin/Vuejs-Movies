<template lang="">
  <div class="movieDetail">
    <Header />
    <div className="result">
      <div v-if="movies.length > 0" class="detailcard" v-for="movie in movies" :key="movie.id"> 
       <Card :movie="movie" :add="false" />
      </div>
      <div v-else>
        <h2>Film Bulunamadı</h2>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Card from "../components/DetailCard.vue";
import axios from 'axios';

export default {
  data() {
    return {
      movies: []
    }
  },
  components: {
    Header,
    Card
  },
  methods: {
    getMovies(){
      let moviesId = this.$route.params.id;

        axios.get(
          `https://api.themoviedb.org/3/movie/${moviesId}?api_key=3a337063bce93bee855e8e5ac0359aeb&language=tr-TR`
        )
        .then((result) => this.movies.push(result.data))
      
    }
  },
  beforeMount() {
    this.getMovies()
  },
}
  /*
  export default {
    mounted() {
    let data = this.$route.params;
    console.log("data is", data);
    }
  
 }
*/
</script>