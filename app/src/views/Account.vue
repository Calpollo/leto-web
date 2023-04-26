<template>
  <div id="Account" :style="{ display: 'grid', placeItems: 'center' }">
    <b-spinner v-if="!$store.state.me" />
    <b-card v-else>
      <b-card-text>
        <b-avatar variant="white" :src="Leto" />
        <h1>
          {{ $store.state.me.username }}
        </h1>
        <p>
          {{ $store.state.me.email }}
        </p>
        <!-- TODO: shown current subscription -->
        <!-- TODO: upgrade or cancel subscription -->
        <b-button
          :to="{ name: 'Checkout' }"
          variant="primary"
          :style="{ color: 'white' }"
        >
          <b-icon-stars />
          Upgraden
        </b-button>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import Leto from "@/assets/Leto.svg";

export default {
  name: "AccountView",
  data() {
    return {
      Leto,
    };
  },
  mounted() {
    if (!this.$store.state.loggedIn) return this.$router.push("/");
  },
};
</script>
