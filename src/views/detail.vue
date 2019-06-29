<template>
    <div class="over">
        <!-- 电影图片 -->
        <div style="position:relative">
            <div class='detil-container' :style="{backgroundImage:'url(' + getImages(detail[0])+ ')' }"></div>
            <div class='detail-mask'></div>
        
            <!-- 电影介绍 -->
            <div class='detail-info'>
                <img :src='getImages(detail[0])' class='detail-img'>
                <div class='detail'>
                    <!-- 电影标题 -->
                    <div class='detail-nm van-ellipsis'>{{detail[1]}}</div>
                    <!-- 电影原标题 -->
                    <div class="van-ellipsis">{{detail[2]}}</div>
                    <!-- 电影打分 -->
                    <div class='detail-sc'>{{detail[3]}}分</div>
                    <!-- 产地 -->
                    <div>{{detail[4]}}</div>
                    <!-- 电影导演 -->
                    <div>导演:{{detail[5]}}</div>
                    <div class="van-ellipsis">{{detail[6]}}/<span v-for="(i,index) in detail[7]" :key="index">{{i}}/</span></div>
                </div>
            </div>
        </div>
        <!-- 电影描述 -->
        <div class="detail-desc">
            <h2 class="detail-h2">剧情简介</h2>
            <div class='desc' :class="btnType?'overflow':''">{{detail[8]}}</div>
            <span class="span" @click="btnType=!btnType">({{btnType?'展开':'收起'}})</span>
        </div>
        <!-- 影人 -->
        <div class="filmmaker detail-desc">
            <h2 class="detail-h2">影人</h2>
            <ul class="items">
                <li v-for="(item,index) in detail[9]" :key="index">
                    <img width="100%" :src="getImages(item.avatars.small)" alt="">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
        <!-- 预告片 -->
        <!-- <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player> -->
        <!-- 剧照 -->
        <div class="filmmaker detail-desc">
            <h2 class="detail-h2">剧照</h2>
            <ul class="items">
                <li v-for="(item,index) in detail[10]" :key="index" class="ite">
                    <img height="100%" :src="getImages(item.icon)" alt="">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
        <!-- 评论 -->
        <div class="filmmaker detail-desc">
            <h2 class="detail-h2">评论</h2>
            <ul class="comment-list" :class="btnType1?'overflow1':''">
                <li class="" v-for="(item,index) in detail[11]" :key="index">
                    <div class="desc">
                        <img :src="getImages(item.author.avatar)" alt="zing">
                        <div class="user-info">
                            <strong>{{item.author.name}}</strong>
                            <start :value='item.rating.value'></start>
                            <div class="date">11年前</div>
                        </div>
                    </div>
                    <p>{{item.summary}}</p>
                </li>
            </ul>
            <button @click="btnType1=!btnType1" class="btnt">{{btnType1?'显示全部':''}}</button>
        </div>
    </div>
</template>
<script>
//评分模块
import start from '../components/start'

export default {
    name:'detail',
    data(){
        return{
            detail:[],
            btnType: true,
            btnType1:true
        }
    },created(){
        let id = this.$route.query.id;
        this.axios.get('./detail.json')
       .then(res=>{
        //    console.log(res.data)
           this.detail           
            //正则表达式
            let len = res.data
            let reg = new RegExp(id);
            for(var i=0;i<len.length;i++){
                //如果字符串中不包含目标字符会返回-1
                if(len[i][12].match(reg)){
                    this.detail=len[i];                         
                }              
            }
            // console.log(this.detail)
       });   
    },methods:{
         getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },components:{
        start
    }
}
</script>

<style scoped>
    /* pages/comment/comment.wxss */
    .detil-container{
        height: 200px;
        /* 模糊 滤镜 */
        filter: blur(8px);
        opacity: .4;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }

    /* 遮罩层 */
    .detail-mask{
        position: absolute;
        width: 100%;
        height: 200px;
        background: #333;
        top: 0;
        left: 0;
        z-index: -1;
    }

    /* 电影详情列表 */
    .detail-info{
        box-sizing: border-box;
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        padding: 10px;
    }
    .detail-img{
        width: 140px;
        margin-right: 20px;
    }

    /* 右侧区域 占满剩余部分 */
    .detail{
        flex-grow: 1;
        line-height: 30px;
        overflow: hidden;
    }
    .detail div{
        width: 100%;
        color: #fff;
        font-size: 16px;
        
    }
    .detail div.detail-nm{
        font-size: 20px;
    }
    .detail div.detail-sc{
        color: #fc0;
        font-size: 18px;
        font-weight: 700;
    }
    .desc{
        padding: 20rpx;
        font-size: 15px;
        color: #494949;
        text-indent: 2em;
    }
    .span{        
        color: #42bd56;
        display: block;
        text-align: center;
        margin: 0 auto;
        cursor: pointer;
    }
    .detail-desc{
        padding: 10px;
    }
    .detail-h2{
        color: #aaa;
        margin: 0 0 15px;
        font-size: 15px;
    }
    .overflow {
        max-height: 60px;
        overflow: hidden;
    }
    .filmmaker{
        width: 100%;
        margin-bottom: -2.12rem;
        box-sizing: border-box;
    }
    .items {
        font-size: 0;
        white-space: nowrap;
        overflow-x: auto;
        padding: 15px 0 43px 0;
    }
    .items::-webkit-scrollbar {
        display: none;
    }
    .items li{
        display: inline-block;
        vertical-align: top;
        width: 100px;
        text-align: center;
        margin-left: 0.48rem;
    }
    .items li.ite{
        height: 200px;
        width: auto;
    }
    .items li p{
        font-size: 14px;
        line-height: 1.5;
        white-space: normal;
        text-align: center;
        color: #494949;
        margin-top: 8px
    }
    /* 评论 */
    .comment-list li{
        position: relative;
        padding: 15px 18px 15px 0;
        word-wrap: break-word;
        overflow: hidden;
    }
    .comment-list li .desc {
        font-size: 0;
        line-height: normal;
        margin: 0 0 11px;
        color: #494949;
        position: relative;
    }
    .comment-list li .desc img{
        width: 36px;
        border-radius: 50%;
        vertical-align: text-top;
        margin-right: 10px;
        float: left;
    }
    .comment-list li .desc .user-info {
        margin-left: 40px;
    }
    .comment-list li .desc strong {
        font-size: 15px;
        display: inline-block;
        vertical-align: text-top;
        margin-right: 6px;
    }
    .comment-list li .desc .date {
        margin-top: 6px;
        font-size: 12px;
        color: #aaa;
    }
    .comment-list li p {
        padding: 0 0 0 40px;
        line-height: 22px;
        color: #494949;
        white-space: pre-wrap;
    }
    .overflow1{
        max-height: 465px;
        overflow: hidden;
    }
    .btnt{
        background: transparent;
        border: none;
        color: #42bd56;
        display: block;
        margin: 0 auto;
    }
</style>
