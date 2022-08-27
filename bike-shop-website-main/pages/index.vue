<template>
  <div>
    <NavBar />
    <HomeBody />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/HomePage/NavBar.vue";
import HomeBody from "../components/HomePage/HomeBody.vue";
import Footer from "../components/HomePage/Footer.vue";
export default {
  components: { NavBar, HomeBody, Footer },
  name: "IndexPage",
};
</script>
