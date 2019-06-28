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
        this.axios.get(url+'?start=0&count=1000')
       .then(res=>{
        //    console.log(res.data.subjects)
            if(url=='/v2/movie/weekly'){
                let list = res.data.subjects;
                let arr = [];
                for(let i=0;i<list.length;i++){
                    arr.push(list[i].subject)
                }
                this.list=arr;
            }else{
                this.list=res.data.subjects;
            }           
       }); 
    },
    components:{
        moreList
    }
}
</script>
<style scoped>

</style>
