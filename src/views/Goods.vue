<template>
  <div class="home">
    <HelloWorld/>
    <h1>This is a goods page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Goods',
  components: {
    HelloWorld
  }
}
</script>


<style scoped>

</style>