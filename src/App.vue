<template>
  <div id="app">
    <p class="title">英雄之路</p>
    <div id="nav">
      <router-link to="/">导航</router-link> 
      <router-link to="/about">英雄</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title{
  text-align: left;
  width: 100%;
  font-size: 32px;
  font-weight: 600;
}
#nav {
  padding: 30px;
  overflow: hidden;
  height: auto;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: block;
    width:200px;
    height: 50px;
    line-height: 50px;
    float: left;
    background: #ccc;
    margin-right:20px;
    border-radius: 10px;
    &.router-link-exact-active {
     background: #42b983;
     color:#fff;
    }
  }
}
</style>
