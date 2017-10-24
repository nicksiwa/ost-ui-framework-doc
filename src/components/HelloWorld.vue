<template>
  <div class="hello">
    <a></a>
    <h1 class="heading" v-bind:class="{'--active':isActive}">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to WTF Doc',
      isActive: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
  .--active {
    color: red;
  }
</style>

