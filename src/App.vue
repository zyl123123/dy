<template>
  <div id="app">
    <div id="nav">
       <!-- 首页 -->
        <!-- 头部 -->
        <div class="header">
            <div>
            <img width="48px" height="22px" src="./assets/logo.png" alt>
            </div>
        </div>
        <div style="height:47px"></div>
    </div>
    <router-view/>
  </div>
</template>

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
</style>
