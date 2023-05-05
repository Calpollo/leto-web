<template>
  <div id="app">
    <b-navbar toggleable="lg" sticky variant="white">
      <b-navbar-brand :to="{ name: 'Home' }">
        <img
          src="@/assets/Leto - Text.svg"
          :style="{ minWidth: '100px' }"
          alt="Leto"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
        class="p-2"
        :style="{ backgroundColor: 'white', width: '100%' }"
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'Funktionen' }" class="my-1">
            Funktionen
          </b-nav-item>
          <b-nav-item :to="{ name: 'Preise' }" class="my-1">Preise</b-nav-item>
          <b-nav-item :to="{ name: 'Download' }" class="my-1"
            >Download</b-nav-item
          >
          <b-button
            v-if="!this.$store.state.loggedIn"
            :to="{ name: 'Login' }"
            variant="outline-primary"
            class="my-1 mx-1"
          >
            Einloggen
          </b-button>
          <b-button
            v-else
            :to="{ name: 'Account' }"
            variant="outline-primary"
            class="m-1"
          >
            <b-icon-person />
            {{ $store.state.me?.username || "Mein Konto" }}
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view class="view" />

    <footer>Leto @ 2023</footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/assets/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view {
  text-align: center;
  min-height: 90vh;
}
</style>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

footer {
  text-align: center;
  background-color: $primary;
  color: white;
  padding: 8pt;
}

.navbar {
  height: 10vh;
  box-shadow: 0 0 20px #495f4133;
}

#nav-collapse > .nav-link {
  color: $primary !important;
}
</style>
