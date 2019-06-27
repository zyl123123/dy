<template>
    <div>
        <movie-list :list='hotlist' :title='first' :url='url'></movie-list>
    </div>
</template>
<script>
//模块引入
//列表模块
import movieList from '../components/movieList'
export default {
    name:'hoting',
    data(){
        return{
            hotlist:[],
            first:'影院热映',
            url:'/v2/movie/in_theaters'
        }
    },
    created(){
       this.axios.get(this.url+'?start=0&count=10')
       .then(res=>{
        //    console.log(res.data.subjects)
           this.hotlist=res.data.subjects;
       });       
    },methods:{
       
    },mounted(){
       
    },components:{
        movieList
    }
}
</script>
<style scoped>
    /* .pages{
        padding-top: 47px;
    } */
</style>

