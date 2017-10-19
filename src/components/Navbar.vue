<template>
  <div id="navbar">
    <h1 class="heading">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Navbar Page'
    }
  }
}
</script>