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
            url:'/v2/movie/weekly'
        }
    },
    created(){
       this.axios.get(this.url+'?start=0&count=10')
       .then(res=>{
           let list = res.data.subjects;
           let arr = [];
           for(let i=0;i<list.length;i++){
               arr.push(list[i].subject)
           }
           this.recommend=arr;
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

