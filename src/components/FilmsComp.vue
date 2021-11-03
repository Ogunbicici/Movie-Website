<template>
  <div class="NavbarContainer">
    <button>Movies</button>
    <button>Series</button>
    <select class="favDropdownMenu" id="FavDropdown">
      <option id="FavoriteCounter">Favorites ({{favCounter}})</option>
    </select>
    <input type="text" v-model="search" placeholder="Search..">
  </div>
  <div class="MoviesContainer">
    <div id="Movies" class="Movies" v-for="(movie,index) in SearchedMovies" :id="index">
      <img class="image_img" :src="require('../assets/MoviesMap/' + movie.imgPath)">
      <div class="image_Overlay">
        <button @click="addedToFav(index)">Add to Favorites</button>
        <button @click="watchMovie(index)">Watch {{movie.MovieName}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmsComp",
  data(){
    return{
      Movies : this.$store.state.Movies,
      favCounter : this.$store.state.favCounter,
      search:'',
      Favorite_Movies: this.$store.Favorite_Movies,
    }
  },
  computed:{
    Series: function(){
      return this.Movies.filter((Movies) =>{
        return Movies.filter((Movies) => Movies.type === "Series")
      })
    },
    SearchedMovies: function(){
      return this.Movies.filter((Movies) =>{
        return Movies.MovieName.toLowerCase().match(this.search)
      })
    },
  },
  methods:{
    Series(){
      return this.Movies.filter((Movies) => Movies.type === "Series")
    },
    addedToFav(index){
      let fav = document.getElementById('FavoriteCounter');
      let favCounter =  this.$store.state.favCounter+=1;
      fav.innerText = 'Favorites ' + '('+favCounter+')';

      this.$store.state.Favorite_Movies.push(this.$store.state.Movies[index].MovieName)
      console.log(this.$store.state.Favorite_Movies[index])

      let options = document.createElement('option');
      options.innerText = this.$store.state.Movies[index].MovieName;
      options.id = 'OptionMovie'
      document.getElementById('FavDropdown').appendChild(options)
    },
    watchMovie(index){

    }
  }
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
/*navbar CSS*/
.NavbarContainer{
  display: flex;
  justify-content: space-around;
  background: cornflowerblue;
  border: 2px solid black;
  height: 40px;
  padding: 10px;
}
.NavbarContainer input{
  width: 50%;
  padding: 5px;
}
.NavbarContainer button{
  color: white;
  border: none;
  font-weight: bold;
  background: transparent;
}
.NavbarContainer button:hover{
  text-decoration: underline;
}
.NavbarContainer button:hover{
  color: white;
}

.favDropdownMenu{
  width: 150px;
}
/* einde navbar CSS*/

/* begin films container */
.MoviesContainer{
  margin: auto;
  width: 65%;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

}
.Movies img{
  border: 1px solid black;
  width: 250px;
}
.Movies{
  position: relative;
}
.image_Overlay{
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 99%;
  background: rgba(0,0,0,0.5);
  text-align: center;
  float: bottom;
  opacity: 0;
  transition: opacity 0.30s;
}

.image_Overlay p{
  color: white;
  font-weight: bold;
}
.image_Overlay:hover{
  opacity: 1;
}
.image_Overlay :nth-child(1){
  margin-top: 255px;
  border-radius: 10px 10px 5px 5px;
  border: 2px solid black;
  color: black;
  background: white;
  padding: 15px;
  font-weight: bolder;
  transition:  background-color 1s, transform 1s;
}


.image_Overlay :nth-child(2){
  margin-bottom: 10px;
  border-radius: 10px 10px 5px 5px;
  border: 2px solid black;
  color: black;
  background: white;
  padding: 15px;
  font-weight: bolder;
  transition:  background-color 1s, transform 1s;
}
.image_Overlay :nth-child(2):hover{
  background: cornflowerblue;
}
.image_Overlay :nth-child(1):hover{
  transform: translateY(-5px);
  background: cornflowerblue;
}

/* einde films container */

</style>