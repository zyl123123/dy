<template>
  <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="seach">
        <div slot="action" @click="seach">搜索</div>
      </van-search>
      <p style="color:#ccc;font-size:12px;padding-left:16px;margin-top:0">*注：暂时只支持中文和英文搜索</p>
      <ul>
          <li class='movie' v-for="(item,index) in list" :key="index">
              <!-- 电影图片 -->
              <img class='movie-img' :src="getImages(item[3])">
              <!-- 电影介绍 -->
              <div class='movie-info'>
                  <!-- 标题 -->
                  <div class='movie-title van-ellipsis'>{{item[0]}}</div>
                  <!-- 评分 -->
                  <div>
                      观众评分
                      <span class='movie-score'>{{item[2]}}分</span>
                  </div>
                  <!-- 主演：多位 -->
                  <div class="overflow">
                      主演：                    
                      <span v-for='(item,index) in item[4][0]' :key='index'>{{item.name_en}}({{item.name}})、</span>                   
                  </div>
                  <!-- 年份 -->
                  <div class="">年份：{{item[5]}}</div>
                  <!-- 按钮 -->
                  <button class='movie-comment' @click="$router.push({path:'detail',query:{id:item[6]}})">详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "seach",
  data() {
    return {
      value: "",
      list: []
    };
  },
  created() {
    // let acc = [];
    // for(let i =0;i<c.length;i++){
    //   this.axios.get('/v2/movie/subject/'+c[i])
    //   .then(res=>{
    //     let f = res.data
    //     console.log(f)
    //     // acc.push(f)
    //     acc.push([f.images.large,f.title,f.original_title,f.rating.average,f.countries[0],f.directors[0].name,f.durations[0],f.genres,f.summary,f.casts,f.photos,f.popular_reviews,c[i]])
    //     console.log(i);
    //   })
    //   console.log(i);
    //   this.a=acc;
    // }
  },
  methods: {
    seach() { 
      // 由于没有api，有不想写数据库，就写死一个测试数据,暂时只支持中文和英文搜索，暂不支持拼音搜索
       this.axios.get('./seach.json')
       .then(res=>{
            //  转换为数组
            let arr =  eval(res.data);
            if(this.value==''){
              this.$toast('请输入要搜索的电影名称');        
            }else{
                let value = this.value;
                //正则表达式
                let len = arr.length;
                let arr1 = [];
                let reg = new RegExp(value);
                for(var i=0;i<len;i++){
                    //如果字符串中不包含目标字符会返回-1
                    if(arr[i][0].match(reg)||arr[i][1].match(reg)){
                        arr1.push(arr[i]);                        
                    }              
                }
                this.list = arr1;               
                if(arr1==''){            
                  this.$toast('结果不存在');  
                }
            }
     
       });       
      
    //   console.log(arr1)
    },
    getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
        return 'https://images.weserv.nl/?url=' + _u;
        }
    }
  }
};
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
