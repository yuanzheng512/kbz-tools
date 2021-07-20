<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{data}}</div>
    <div @click="click">click me</div>
  </div>
</template>

<script>
import axios from "@/api";
export default {
  name: 'App',
  data(){
    return {
      data:""
    }
  },
  created(){
  },
  methods:{
    click(){
      axios.post("/do").then(res=>{
        this.data = res.data;
      });
    }
  }
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
