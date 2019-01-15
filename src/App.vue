<template>
  <div id="app">
    <navLeft></navLeft>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navLeft from "@/components/common/leftNav.vue"
export default {
  name: 'App',
  components:{
    navLeft
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
.main{
  background:#ccc;
  width:95%;
  height:100%;
  float:left;
  overflow:hidden;
}
</style>
