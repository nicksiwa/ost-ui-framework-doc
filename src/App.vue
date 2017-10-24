<template>
  <div id="app">
    <div class="row">
      <div class="sidenav col-lg-2 col-md-3">
        <div class="sidenav__head">
          <router-link to="/">Logo</router-link>
          <a class="toggle" @click="collapsed = !collapsed"><i class="fa fa-bars"></i></a>
        </div>
        <div class="sidenav__link" v-bind:class="{'is-collapsed' : !collapsed}">
          <ul>
            <router-link tag="li" to="/button"><a>Button</a></router-link>
            <router-link tag="li" to="/table"><a>Table</a></router-link>
            <router-link tag="li" to="/form"><a>Form</a></router-link>
            <router-link tag="li" to="/list"><a>List</a></router-link>
            <router-link tag="li" to="/navbar"><a>Navbar</a></router-link>
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
  name: 'app',
  data () {
    return {
      collapsed: true
    }
  }
}
</script>

<style lang="scss">
@import "assets/font/open-sans/open-sans.css";
@import "assets/icon/font-awesome-4.7.0/css/font-awesome.min.css";
@import "assets/scss/style.scss";
@import "assets/style/highlight.js/bootstrap.css";

pre > code {
    font-family: Monaco,Consolas,"Courier New",monospace;
}

.is-collapsed {
    display: block !important;
}
</style>

