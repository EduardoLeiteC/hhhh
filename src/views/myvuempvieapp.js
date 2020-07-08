Vue.component('movie-detail',{
    props:['movie'],

    template:'<div>{{movie.Title}}</div>'
    
});

new Vue({
    el: "#mymovieapp",
    data:{
        searchKey:'',
        moviesList:[]
    },
    methods:{
        searchMovies()
        {
            var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=19662a8d';
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesList=data;
            })
        }
    }
})