<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
 .clear{
   clear: both;
 }
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: #191919;
}
h1,h2,h3,h4,h5,h6{
  font-family: '微软雅黑';font-weight: normal;
}
ul,li,input{
  outline: none;
  list-style: none;
}
#app {
  .size;
}
</style>
