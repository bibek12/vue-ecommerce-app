<template>
  <div class="home">
    <NavBar></NavBar>
    <Banner></Banner>
    <Products></Products>
  </div>
</template>

<script>
// @ is an alias to /src/
//import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: "home",
  components: {
   // HelloWorld
   NavBar,
   Banner
  }
};
</script>
