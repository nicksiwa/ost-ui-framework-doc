<template>
  <div id="app">
    <div class="row">
      <div class="sidenav col-lg-2 col-md-3">
        <div class="sidenav__head">
          <router-link to="/">Logo</router-link>
          <button v-on:click="show = !show" class="toggle"><i class="fa fa-bars"></i></button>
        </div>
        <div class="sidenav__link">
          <ul>
            <li><router-link to="/button">Button</router-link></li>
            <li><router-link to="/table">Table</router-link></li>
            <li><router-link to="/form">Form</router-link></li>
            <li><router-link to="/list">List</router-link></li>
            <li><router-link to="/navbar">Navbar</router-link></li>
          </ul>
        </div>
      </div>
      <div class="content col-lg-10 col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="scss">
@import "assets/font/open-sans/open-sans.css";
@import "assets/icon/font-awesome-4.7.0/css/font-awesome.min.css";
@import "assets/scss/style.scss";
</style>

