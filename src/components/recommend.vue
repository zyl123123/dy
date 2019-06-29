<template>
    <movie-list :list='recommend' :title='first' :url="url"></movie-list>
</template>
<script>
//模块引入
//列表模块
import movieList from '../components/movieList'

export default {
    name:'new',
    data(){
        return{
            recommend:[],
            first:'口碑推荐',
            url:'./recommend.json'
        }
    },
    created(){//this.url+'?start=0&count=10'
       this.axios.get(this.url)
       .then(res=>{
           this.recommend=res.data;
       });       
    },methods:{
       
    },mounted(){
       
    },components:{
        movieList
    }
}
</script>
<style scoped>

</style>

