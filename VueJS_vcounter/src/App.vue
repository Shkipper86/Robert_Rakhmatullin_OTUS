<template>
  <div id="app">    
    <div id="nav">
    <router-link to='/'><button>Settings</button></router-link> | 
    <router-link to='/game'><button>Game</button></router-link> 
  <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
