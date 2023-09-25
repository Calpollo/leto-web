<template>
  <div id="Account" :style="{ display: 'grid', placeItems: 'center' }">
    <b-spinner v-if="!$store.state.me" />
    <b-tabs v-else id="content" justified>
      <b-tab title="Dein Profil">
        <b-card>
          <b-card-text>
            <b-avatar variant="white" :src="Leto" />
            <h1>
              {{ $store.state.me.username }}
            </h1>
            <p>
              {{ $store.state.me.email }}
            </p>
            <p>Aktueller Abo-Status: {{ $store.state.me.RoleName }}</p>

            <b-button variant="outline-danger" @click="logout">
              Ausloggen
            </b-button>

            <details>
              <summary>Konto-Aktionen</summary>
              <b-button-group>
                <b-button
                  v-b-modal.changePasswordModal
                  variant="outline-primary"
                >
                  Passwort ändern
                </b-button>
                <b-button
                  v-if="$store.state.me.RoleName == 'Standard'"
                  :to="{ name: 'Checkout' }"
                  variant="success"
                  :style="{ color: 'white' }"
                >
                  <b-icon-chevron-double-up />
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
                <b-button
                  variant="danger"
                  @click="$bvModal.show('accountDeletionModal')"
                >
                  <b-icon-trash-fill />
                  Konto löschen
                </b-button>
              </b-button-group>
            </details>
          </b-card-text>
        </b-card>
      </b-tab>
      <b-tab title="Zahlungen">
        <p
          class="mt-2"
          v-if="
            !$store.state.me.Payments || $store.state.me.Payments.length == 0
          "
        >
          Du hast noch keine Zahlungen getätigt.
        </p>
        <b-list-group v-else>
          <b-list-group-item>
            <b-row>
              <b-col :style="{ textAlign: 'start' }"><b>Provider</b></b-col>
              <b-col :style="{ textAlign: 'start' }" cols="4"
                ><b>E-Mail</b></b-col
              >
              <b-col :style="{ textAlign: 'end' }" cols="2"><b>EUR</b></b-col>
              <b-col :style="{ textAlign: 'end' }"><b>Datum</b></b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item
            v-for="payment in $store.state.me.Payments"
            :key="payment.id"
          >
            <b-row>
              <b-col cols="3" :style="{ textAlign: 'start' }">
                {{ payment.provider }}
              </b-col>
              <b-col cols="4" :style="{ textAlign: 'start' }">
                {{ payment.email }}
              </b-col>
              <b-col cols="2" :style="{ textAlign: 'end' }">
                {{ payment.gross }} €
              </b-col>
              <b-col cols="3" :style="{ textAlign: 'end' }">
                {{ new Date(payment.createdAt).toLocaleString("de") }}
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-tab>
    </b-tabs>

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
    <b-modal id="accountDeletionModal" title="Bist du sicher?" variant="white">
      <p>
        Du kannst diese Aktion nicht rückgängig machen. Alle Abos, vergangene
        Zahlungen usw. werden unwiderruflich gelöscht
      </p>
      <template #modal-footer="{}">
        <b-button @click="deleteMe" variant="outline-danger">
          Ja, ich bin mir sicher
        </b-button>
        <b-button
          @click="$bvModal.hide('accountDeletionModal')"
          variant="outline-primary"
          class="ml-auto"
        >
          Nein, abbrechen
        </b-button>
      </template>
    </b-modal>
    <b-modal id="changePasswordModal" title="Password ändern" variant="white">
      <b-form-group label="Neues Passwort:" label-for="password-input">
        <b-form-input
          id="password-input"
          type="password"
          placeholder="Passwort"
          v-model="passwordReplacement"
          required
          :state="passwordValid"
        />

        <b-form-invalid-feedback id="password-input-feedback">
          Dein Passwort muss die folgenden Anforderungen erfüllen:
          <ul class="ml-4">
            <li>Mindestens 8 Zeichen</li>
            <li>Mindestens 1 Ziffer</li>
          </ul>
        </b-form-invalid-feedback>
      </b-form-group>

      <template #modal-footer="{}">
        <b-button
          @click="updatePassword(selectedUserId)"
          :disabled="!passwordValid"
          variant="danger"
        >
          Bestätigen
        </b-button>
        <b-button
          @click="
            () => {
              $bvModal.hide('changePasswordModal');
              selectedUserId = null;
            }
          "
          variant="outline-danger"
          class="ml-auto"
        >
          Abbrechen
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
      passwordReplacement: null,
    };
  },
  methods: {
    logout: UserService.logout,
    deleteMe: UserService.deleteMe,
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
    updatePassword(id = null) {
      UserService.changePassword(this.passwordReplacement, id).then(() => {
        this.$bvToast.toast("Passwort erfolgreich neu gesetzt", {
          title: "Passwort geändert",
          autoHideDelay: 5000,
          variant: "info",
          solid: true,
        });
        this.$bvModal.hide("changePasswordModal");
      });
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
  computed: {
    passwordValid() {
      return (
        this.passwordReplacement &&
        this.passwordReplacement.length >= 8 &&
        /\d/.test(this.passwordReplacement)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#content {
  min-height: 60vh;
  min-width: 80vw;
}
</style>
