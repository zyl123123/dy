<template>
    <div class="pages">
        <h3 class="title-header">{{title}} <span class="more" @click="$router.push({path:'more',query:{url:url}})">更多</span></h3>
        <div class="section-content">
            <ul class="row items">          
                <li class="item item__movie" v-for="(itemList,index) in list" :key="index" @click="$router.push({path:'detail',query:{id:itemList.id}})">                    
                    <div class="item-poster">
                        <img width="100%" height="100%" alt="" v-lazy='getImages(itemList.images.medium)' >
                    </div>
                    <div class="item-title van-ellipsis">{{itemList.title}}</div>
                    <div class="item-rating">
                        <div class="rank">
                            <span class="rating-stars" >
                                <start :value='itemList.rating.stars/10'></start>
                            </span>
                            <span>{{itemList.rating.average}}</span>
                        </div>
                    </div>                  
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
//评分模块
import start from '../components/start'
export default {
    name:'movieList',
    data(){
        return{

        }
    },props:['title','list','url']
    ,components:{
        start
    },methods:{
         getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    }
}
</script>


<style scoped>
    .pages {
        background: #fff;
        margin: 0 auto;
        overflow-x: hidden;
        overflow-y: hidden
    }
    .title-header {
        display: inline-block;
        min-width: 4em;
        margin-bottom: 0;
        font-size: 18px;
        color: #111;
        padding-left: 0;
        padding-bottom: 0;
        font-size: 1.06rem;
        padding: 0 1.12rem;
        padding-top: 10px;
        width: 100%;
        box-sizing: border-box;
        font-weight: normal;
    }
    .more{
        float: right;
        font-size: .9rem;
        line-height: 1.5rem;
        color: #42bd56;
    }
    .section-content {
        margin-bottom: -1.12rem;
    }
    .row {
        border-bottom: 1px solid #F2F2F2;
        padding: 15px 0 43px 0;
    }
    .items {
        font-size: 0;
        white-space: nowrap;
        overflow-x: auto;
    }
    .items>* {
        font-size: .94rem;
        white-space: norm
    }
    .item:first-child {
        margin-left: 1.12rem;
    }
    .item {
        display: inline-block;
        vertical-align: top;
        width: 100px;
        text-align: center;
        margin-left: 0.48rem;
    }
    .item-poster {
        width: 100%;
        height: 142px;
        overflow: hidden;
    }
    .item-title {
        display: block;
        margin-top: .6rem;
        line-height: .94rem;
        color: #111;
    }
    .item-rating {
        color: #aaa;
        line-height: .94rem;
        margin-top: .3rem;
        font-size: .72rem;
    }
</style>
