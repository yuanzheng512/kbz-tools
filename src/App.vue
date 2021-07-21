<template>
  <div id="app">
    <el-scrollbar ref="scrollbar" style="height: 100%">
      <iframe class="mainiframe" src="./demo.html" frameborder="0"></iframe>
    </el-scrollbar>
  </div>
</template>

<script>
import axios from "@/api";
export default {
  name: "App",
  data() {
    return {
      data: "",
    };
  },
  created() {
    this.$nextTick(()=>{
      this.handleScroll();
    })
  },
  mounted() {
  },
  methods: {
    click() {
      axios.post("/do").then((res) => {
        this.data = res.data;
      });
    },
    handleScroll() {
      let scrollbarEl = this.$refs.scrollbar.wrap;
      scrollbarEl.onscroll = () => {
        console.log("...");
      };
    },
  },
};
</script>

<style>
.mainiframe {
  width: 100%;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
