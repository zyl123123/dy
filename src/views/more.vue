<template>
    <div>
        <more-list :list='list'></more-list>
    </div>
</template>
<script>
// 引用更多列表组件
import moreList from '../components/moreList'

export default {
    name:'more',
    data(){
        return{
            list:[]
        }
    },
    created(){
        let url = this.$route.query.url
        // console.log(url)
        this.axios.get(url)
       .then(res=>{
        //    console.log(res.data.subjects)            
        this.list=res.data;
       }); 
    },
    components:{
        moreList
    }
}
</script>
<style scoped>

</style>
