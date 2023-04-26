<template>
  <div
    id="Register"
    :style="{
      display: 'grid',
      placeItems: 'center',
      backgroundImage: 'url(' + bbblurry + ')',
      backgroundSize: 'cover',
    }"
  >
    <b-aspect
      aspect="4:3"
      id="register-card"
      :style="{ display: 'grid', placeItems: 'center' }"
    >
      <b-card title="Konto erstellen">
        <b-form>
          <b-form-group label="E-Mail-Adresse" label-for="email-input">
            <b-input
              id="email-input"
              type="text"
              placeholder="E-Mail-Adresse"
              v-model="email"
            />
          </b-form-group>
          <b-form-group label="Benutzername" label-for="username-input">
            <b-input
              id="username-input"
              type="text"
              placeholder="Benutzername"
              v-model="username"
            />
          </b-form-group>
          <b-form-group label="Passwort" label-for="password-input">
            <b-input
              id="password-input"
              type="password"
              placeholder="Passwort"
              v-model="password"
            />
            <b-input
              id="npassword-input"
              type="password"
              placeholder="Passwort wiederholen"
              v-model="npassword"
            />
          </b-form-group>

          <b-row id="buttonRow">
            <b-col>
              Du hast schon ein Konto?
              <b-button variant="link" :to="{ name: 'Login' }"
                >Jetzt einloggen</b-button
              >
            </b-col>
            <b-col :style="{ textAlign: 'end' }">
              <b-button
                variant="primary"
                type="submit"
                :style="{ color: 'white' }"
              >
                Konto erstellen
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
    </b-aspect>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
export default {
  name: "RegisterView",
  data() {
    return {
      bbblurry,
      email: null,
      username: null,
      password: null,
      npassword: null,
    };
  },
};
</script>

<style lang="scss" scoped>
#Register {
  text-align: start;
}
#register-card {
  min-width: 60%;
}

.card-title {
  text-align: center;
}

#buttonRow {
  text-align: start;
}
</style>
