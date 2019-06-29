<template>
    <ul>
        <li class='movie' v-for="(item,index) in list" :key="index">
            <!-- 电影图片 -->
            <img class='movie-img' :src="getImages(item[0])">
            <!-- 电影介绍 -->
            <div class='movie-info'>
                <!-- 标题 -->
                <div class='movie-title van-ellipsis'>{{item[1]}}</div>
                <!-- 评分 -->
                <div>
                    观众评分
                    <span class='movie-score'>{{item[2]}}分</span>
                </div>
                <!-- 主演：多位 -->
                <div class="overflow">
                    主演：
                    
                    <span v-for='(item,index) in item[3]' :key='index'>{{item.name_en}}({{item.name}})、</span>
                   
                </div>
                <!-- 年份 -->
                <div class="">年份：{{item[4]}}</div>
                <!-- 按钮 -->
                <button class='movie-comment' @click="$router.push({path:'detail',query:{id:item[5]}})">详情</button>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name:'moreList',
    data(){
        return{
           
        }
    },
    props:['list'],
    methods:{
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
/* pages/home/home.wxss */
/* 电影区域 */
.movie{
    display: flex;
    height: 190px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
/* 电影图片 */
.movie-img{
    width: 132px;
    height: 190px;
    margin-right: 10px;
    border: 1px solid #ccc;
}
/* 电影介绍 */
.movie-info{
    flex: 1;   /* 将右侧区域分配给 info 介绍文字 */
    font-size: 12px;
    line-height: 1.8;/*1.8倍行高*/
    overflow: hidden;
    position: relative;
}
/* 标题 */
.movie-title{
    color: #666;
    font-size: 20px;
    font-weight: bolder;
}
/* 评分 */
.movie-score{
    color: #faaf00;
}
/* 详情按钮 */
.movie-comment{
    height: 40px;
    line-height: 30px;
    background: #42bd56;
    color: #fff;
    font-size: 13px;
    position: absolute;
    bottom: 0;
    width: 100%;
    border: none;
}
.overflow {
    max-height: 64px;
    overflow: hidden;
}
</style>

