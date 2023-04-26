<template>
  <div id="Funktionen">
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
    >
      <div>
        <!-- spacer -->
      </div>
      <div>
        <h1>Funktionen</h1>
        <p>
          Leto ist dein All-in-One Programm für Termine, Verwaltung und
          Abrechnungen.
        </p>
      </div>
      <b-row align-v="stretch" :style="{ width: '80%' }">
        <b-col>
          <b-card title="Termine" :style="{ height: '100%' }">
            <b-card-text>
              <b-list-group>
                <b-list-group-item href="#">Rezeptaufnahme</b-list-group-item>
                <b-list-group-item href="#">
                  automatische Terminvorschläge
                </b-list-group-item>
                <b-list-group-item href="#">Folgerezept</b-list-group-item>
                <b-list-group-item href="#">
                  "Patient nicht erschienen"-Funktion
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Verwaltung" :style="{ height: '100%' }">
            <b-card-text>
              <b-list-group>
                <b-list-group-item href="#">
                  Patientenverwaltung
                </b-list-group-item>
                <b-list-group-item href="#">Rezeptverwaltung</b-list-group-item>
                <b-list-group-item href="#">
                  Abrechnungen für Krankenkassen
                </b-list-group-item>
                <b-list-group-item href="#">Statistiken</b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Abrechnung" :style="{ height: '100%' }">
            <b-card-text>
              <b-list-group>
                <b-list-group-item href="#">
                  Rechnungen für Patienten
                </b-list-group-item>
                <b-list-group-item href="#"
                  >Terminübersichten</b-list-group-item
                >
                <b-list-group-item href="#"
                  >Versand per E-Mail</b-list-group-item
                >
                <b-list-group-item href="#">
                  Abrechnungen für Krankenkassen
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </section>

    <!-- Termine -->
    <section>
      <b-row no-gutters>
        <b-col cols="6">
          <img
            :src="paarArbeit"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
              // objectPosition: '70%',
            }"
          />
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Termine</h2>
            <p>Neue Rezepte anlegen</p>
            <p>Folgerezepte über Kopien oder Verlängerungen</p>
            <p>
              Ärzte, Krankenkasse, Heilmittel etc. werden automatisch geladen
            </p>
            <p>
              Der Button "Patient nicht erschienen" bietet Optionen zur Absage,
              Verlegung oder Ausfallberechnung des Termins
            </p>
            <p>
              Automatische PDF-Generation für Rechnungen, Terminübersichten und
              Abrechnungen
            </p>
            <p>Automatische E-Mail-Versand von Dokumenten</p>
          </div>
        </b-col>
      </b-row>
    </section>

    <!-- Verwaltung -->
    <section>
      <b-row no-gutters>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Verwaltung</h2>
            <p>Fehlermeldungen und Warnungen</p>
            <p>Statistiken für deine Patienten und Rezepte</p>
            <p>Patientenauflistungen</p>
            <p>Rezeptauflistungen</p>
            <p>
              PDF-Generation für Rechnungen, Terminübersichten und Abrechnungen
            </p>
          </div>
        </b-col>
        <b-col cols="6">
          <img
            :src="verwaltungLaptop"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
              // objectPosition: '70%',
            }"
          />
        </b-col>
      </b-row>
    </section>

    <!-- Abrechnung -->
    <section>
      <b-row no-gutters>
        <b-col cols="6">
          <img
            :src="floatingMac"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
              // objectPosition: '70%',
            }"
          />
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Abrechnung</h2>
            <p>Auswahl der abzurechnenden Rezepte & Patienten</p>
            <p>Generierung von PDF-Dokumenten</p>
            <p>E-Mailversand von Rechnungen und Terminübersichten</p>
            <p>Patientenauflistungen</p>
            <p>Rezeptauflistungen</p>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import verwaltungLaptop from "@/assets/mockups/mockup-of-a-girl-holding-a-macbook-in-front-of-a-solid-color-wall-a20565 (1).png";
import paarArbeit from "@/assets/mockups/coworkers-working-on-a-macbook-mockup-while-talking-about-it-a20769 (3).png";
import floatingMac from "@/assets/mockups/mockup-of-a-macbook-floating-on-a-surface-with-two-colors-a20461.png";

export default {
  name: "FunktionenView",
  data() {
    return {
      bbblurry,
      verwaltungLaptop,
      paarArbeit,
      floatingMac,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

section {
  height: 90vh;

  &#landingsection {
    display: grid;
    place-items: center;
  }
}

h2 {
  color: $primary;
  font-weight: 600;
}

b {
  color: $primary;
}
</style>
