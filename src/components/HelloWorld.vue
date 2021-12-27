<template>
  <div class="hello">
    <router-link to="/">
      <button class="tablink">Home</button>
    </router-link>
    <router-link :to="{name:'Announcements'}">
      <button class="tablink" >Объявления</button>
    </router-link>
    <router-link :to="{name: 'Goods'}">
      <button class="tablink">Товары</button>
    </router-link>
    <router-link to="/about">
      <button class="tablink">About</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--h3 {-->
<!--  margin: 40px 0 0;-->
<!--}-->
<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->
<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
