<template>
    <movie-list :list='newlist' :title='first' :url="url"></movie-list>
</template>
<script>
//模块引入
//列表模块
import movieList from '../components/movieList'

export default {
    name:'new',
    data(){
        return{
            newlist:[],
            first:'即将上映',
            url:'/v2/movie/coming_soon'
        }
    },
    created(){
       this.axios.get(this.url+'?start=0&count=10')
       .then(res=>{
        //    console.log(res.data.subjects)
           this.newlist=res.data.subjects;
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
