<template>
  <div id="app">
    <b-navbar toggleable="lg" sticky>
      <b-navbar-brand :to="{ name: 'Home' }">
        <img
          src="@/assets/Leto - Text.svg"
          :style="{ minWidth: '100px' }"
          alt="Leto"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'Funktionen' }" class="my-1">
            Funktionen
          </b-nav-item>
          <b-nav-item :to="{ name: 'Preise' }" class="my-1">Preise</b-nav-item>
          <b-button
            :to="{ name: 'Login' }"
            variant="outline-primary"
            class="my-1"
          >
            Einloggen
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view id="view" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
// Your variable overrides
$primary: #6927d3;
$secondary: #495f41;
$danger: #fa8253;
$warning: #ffbb00;

// Bootstrap and its default variables
@import "../node_modules/bootstrap/scss/bootstrap";
// BootstrapVue and its default variables
@import "../node_modules/bootstrap-vue/src/index.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#view {
  text-align: center;
}

#nav-collapse > .nav-link {
  color: $primary !important;
}
</style>
