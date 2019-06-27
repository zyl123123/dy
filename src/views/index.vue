<template>
    <div>
        <hoting></hoting>
        <newing></newing>
        <recommend></recommend>
    </div>
</template>
<script>
// 引用 列表模块
//影院热映模块
import hoting from '../components/hoting'
//即将上映模块
import newing from '../components/new'
//即将口碑推荐
import recommend from '../components/recommend'

export default {
  data() {
    return {
      hotinglist: []
    };
  },components:{
      hoting,
      newing,
      recommend
  }
};
</script>

<style scoped>
</style>
