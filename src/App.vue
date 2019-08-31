<template>
  <div  id="app">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
      
</template>

<script>

// import "@/assets/js/index.js";
export default {
  name: 'app',
  components: {
    
  },
  created (){
  },
  methods:{
    

  }

}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif; */
  font-family: "msyh";
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
  width: 100%;


  position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
}
</style>
