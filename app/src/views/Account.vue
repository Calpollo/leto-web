<template>
  <div id="Account" :style="{ display: 'grid', placeItems: 'center' }">
    <b-spinner v-if="!$store.state.me" />
    <b-tabs v-else id="content" justified>
      <b-tab title="Dein Profil">
        <b-card>
          <b-card-text>
            <b-row>
              <b-col>
                <b-avatar variant="white" :src="Leto" />
                <h1>
                  {{ $store.state.me.username }}
                </h1>
                <p>
                  {{ $store.state.me.email }}
                </p>
                <p>Aktueller Abo-Status: {{ $store.state.me.RoleName }}</p>
              </b-col>
              <b-col v-if="$store.state?.me?.ReceivedAccess" cols="12" md="6">
                <b-avatar variant="white" :src="Leto" />
                <h4>
                  Besitzerkonto:
                  <em>
                    {{ $store.state.me.ReceivedAccess.Owner.username }}
                  </em>
                </h4>
                <p>
                  <a
                    :href="`mailto:${$store.state.me.ReceivedAccess.Owner.email}`"
                  >
                    {{ $store.state.me.ReceivedAccess.Owner.email }}
                  </a>
                </p>
                <p v-if="$store.state.me.ReceivedAccess.enabled == false">
                  <b-badge
                    variant="danger"
                    v-b-tooltip.hover
                    title="Dein Zugang zum Besitzerkonto wurde deaktiviert. Bei deaktiviertem Zugang kannst du nicht auf die Daten des Besitzerkontos zugreifen. Kontaktiere das Besitzerkonto, um deinen Zugang wieder zu aktivieren."
                    >Zugang deaktiviert</b-badge
                  >
                </p>
              </b-col>
            </b-row>

            <hr />

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
                  disabled
                >
                  <b-icon-chevron-double-up />
                  Upgraden
                </b-button>
                <b-button
                  v-else
                  variant="outline-danger"
                  @click="$bvModal.show('userDowngradeModal')"
                  disabled
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
        <b-card
          :style="{ textAlign: 'start' }"
          class="mt-4"
          v-if="$store.state.me?.GivenAccesses?.length > 0"
          title="Zugangskonten"
          sub-title="Konten mit Zugang zu deinen Daten"
        >
          <b-card-text>
            <b-list-group>
              <b-list-group-item
                v-for="access in $store.state.me.GivenAccesses"
                :key="access.id"
              >
                <b-row align-v="center">
                  <b-col>
                    {{ access.Receiver.username }}
                    <a :href="`mailto:${access.Receiver.email}`">
                      {{ access.Receiver.email }}
                    </a>
                  </b-col>
                  <b-col cols="auto">
                    <b-form-checkbox
                      :style="{ display: 'inline-block' }"
                      v-model="access.enabled"
                      switch
                      variant="danger"
                      v-b-tooltip.hover
                      title="Zugang deaktivieren"
                      button-variant="success"
                      @change="(value) => switchEnable(access.id, value)"
                    />
                    <b-button
                      variant="outline-danger"
                      @click="deleteAccess(access.id)"
                      v-b-tooltip.hover
                      title="Zugang entfernen"
                    >
                      <b-icon-trash />
                    </b-button>
                  </b-col>
                </b-row>
              </b-list-group-item>
            </b-list-group>

            <b-form
              class="mt-2"
              @submit="
                (event) => {
                  event.preventDefault();
                  createAccessUser();
                }
              "
            >
              <b-form-input
                v-model="createUsername"
                placeholder="Benutzername"
                :autocomplete="`username-${Math.random()}`"
                required
                disabled
              />
              <b-form-input
                v-model="createEmail"
                type="email"
                placeholder="E-Mail-Adresse"
                :autocomplete="`email-${Math.random()}`"
                required
                disabled
              />
              <b-form-input
                v-model="createPassword"
                type="password"
                placeholder="Passwort"
                :autocomplete="`password-${Math.random()}`"
                minLength="6"
                required
                disabled
              />
              <b-button
                variant="outline-success"
                block
                type="submit"
                :disabled="!(createUsername && createEmail && createPassword)"
              >
                <b-icon-plus />
                Neuen Benutzer erstellen
              </b-button>
            </b-form>

            <b-form
              class="mt-2"
              @submit="
                (event) => {
                  event.preventDefault();
                }
              "
            >
              <b-form-input
                disabled
                v-model="userSearch"
                type="search"
                autocomplete="userSearch"
                placeholder="Benutzernamen suchen"
              />
              <b-button
                variant="outline-success"
                block
                type="submit"
                :disabled="!userSearch"
              >
                <b-icon-plus />
                Nutzer suchen und hinzufügen
              </b-button>
            </b-form>
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
        Zahlungen usw. werden unwiderruflich gelöscht.
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
import AccessService from "@/services/AccessService";

export default {
  name: "AccountView",
  metaInfo: {
    title: "Mein Profil",
  },
  data() {
    return {
      Leto,
      passwordReplacement: null,
      createUsername: null,
      createEmail: null,
      createPassword: null,
      userSearch: null,
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
    createAccessUser() {
      AccessService.create(
        this.createUsername,
        this.createEmail,
        this.createPassword
      );
    },
    switchEnable(id, value) {
      AccessService.setEnabled(id, value);
    },
    deleteAccess(id) {
      AccessService.delete(id);
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
