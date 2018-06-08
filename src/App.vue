
<template>
  <div id="app">
    Hello, todo-list!<DsLogin type="1" ></DsLogin>
  </div>
</template>



<script>
import DsLogin from './components/DsLogin'


export default {
  name: 'app',
  components: {
    DsLogin
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2,p {
  font-weight: normal;
  margin:0;
  padding: 0;
}



</style>
