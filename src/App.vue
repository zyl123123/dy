<template>
  <div id="app">
    <div id="nav">
       <!-- 首页 -->
        <!-- 头部 -->
        <van-nav-bar title="星影评" :left-text="this.$route.path!=='/'?'返回':''" :right-text="this.$route.path!=='/seach'?'搜索':''" fixed @click-left="onClickLeft" @click-right="onClickRight"/>
        <!-- <div class="header">
            <div>
            <img width="48px" height="22px" src="./assets/logo.png" alt>
            </div>
        </div> -->
        <div style="height:47px"></div>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  data(){
    return{
      
    }
  },
  methods: {
    onClickLeft() {
      if (window.history.length <= 1) {
          this.$router.push({path:'/'})
          return false
      } else {
          this.$router.go(-1)
      }
    },
    onClickRight() {
      this.$router.push({path:'seach'})
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: o;
  list-style: none;
}
.header {
  position: fixed;
  left: 0;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: flex-start;
  align-items: center;
  padding: 0 18px;
  background: #fff;
  height: 47px;
  box-sizing: border-box;
  display: flex;
  z-index: 100;
}
.van-nav-bar__text {
  color:#42bd56;
}
.van-nav-bar__title{
  margin:  0 auto;
  color:#42bd56;
}
</style>