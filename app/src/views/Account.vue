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
        <p>Aktueller Abo-Status: {{ $store.state.me.RoleName }}</p>
        <b-button-group>
          <b-button
            v-if="$store.state.me.RoleName == 'Standard'"
            :to="{ name: 'Checkout' }"
            variant="success"
            :style="{ color: 'white' }"
          >
            <b-icon-stars />
            Upgraden
          </b-button>
          <b-button
            v-else
            variant="outline-danger"
            @click="$bvModal.show('userDowngradeModal')"
          >
            <b-icon-chevron-double-down />
            Abo beenden
          </b-button>
          <b-button variant="danger" @click="logout"> Ausloggen </b-button>
        </b-button-group>
      </b-card-text>
    </b-card>
    <b-modal id="userDowngradeModal" title="Bist du sicher?" variant="white">
      <p>Du kannst diese Aktion nicht rückgängig machen</p>
      <template #modal-footer="{}">
        <b-button @click="downgrade" variant="outline-danger">
          Ja, ich bin mir sicher
        </b-button>
        <b-button
          @click="$bvModal.hide('userDowngradeModal')"
          variant="outline-primary"
          class="ml-auto"
        >
          Nein, abbrechen
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Leto from "@/assets/Leto.svg";
import UserService from "@/services/UserService";

export default {
  name: "AccountView",
  data() {
    return {
      Leto,
    };
  },
  methods: {
    logout: UserService.logout,
    downgrade() {
      UserService.downgrade().then(() => {
        this.$bvToast.toast("Abo-Status erfolgreich herabgesetzt", {
          title: "Abo-Status geupdated",
          autoHideDelay: 5000,
          variant: "warning",
          solid: true,
        });
      });
      this.$bvModal.hide("userDowngradeModal");
    },
  },
  mounted() {
    if (!this.$store.state.loggedIn) return this.$router.push("/");
    if (this.$route.query?.toast) {
      const toast = JSON.parse(this.$route.query.toast);
      this.$bvToast.toast(toast.msg, {
        title: toast.title || "Benachrichtigung",
        autoHideDelay: 5000,
        variant: toast.variant,
        solid: true,
      });
    }
  },
};
</script>
