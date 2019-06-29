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
            url:'./new.json'
        }
    },
    created(){//this.url+'?start=0&count=10'
       this.axios.get(this.url)
       .then(res=>{
        //    console.log(res.data.subjects)
           this.newlist=res.data;
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
