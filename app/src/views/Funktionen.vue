<template>
  <div id="Funktionen">
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
    >
      <div class="d-none d-lg-flex">
        <!-- spacer -->
      </div>
      <div>
        <h1 data-aos="fade-up">Funktionen</h1>
        <p data-aos="fade-up">
          Leto ist dein All-in-One Programm für Termine, Verwaltung und
          Abrechnungen.
        </p>
      </div>
      <b-row
        align-v="stretch"
        :style="{ width: '80%' }"
        class="d-none d-lg-flex"
      >
        <b-col>
          <b-card
            title="Termine"
            :style="{ height: '100%' }"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
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
          <b-card
            title="Verwaltung"
            :style="{ height: '100%' }"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
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
          <b-card
            title="Abrechnung"
            :style="{ height: '100%' }"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
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
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="6" class="d-none d-md-block">
          <img
            :src="paarArbeit"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
            }"
          />
        </b-col>
        <b-col cols="12" md="6" class="d-md-none">
          <img
            :src="paarArbeit"
            alt=""
            width="100%"
            :style="{
              height: '40vh',
              minHeight: '100%',
              objectFit: 'cover',
            }"
          />
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Termine</h2>
            <p data-aos="fade-left">Neue Rezepte anlegen</p>
            <p data-aos="fade-left">
              Folgerezepte über Kopien oder Verlängerungen
            </p>
            <p data-aos="fade-left">
              Ärzte, Krankenkasse, Heilmittel etc. werden automatisch geladen
            </p>
            <p data-aos="fade-left">
              Der Button "Patient nicht erschienen" bietet Optionen zur Absage,
              Verlegung oder Ausfallberechnung des Termins
            </p>
            <p data-aos="fade-left">
              Automatische PDF-Generation für Rechnungen, Terminübersichten und
              Abrechnungen
            </p>
            <p data-aos="fade-left">
              Automatische E-Mail-Versand von Dokumenten
            </p>
          </div>
        </b-col>
      </b-row>
    </section>

    <!-- Verwaltung -->
    <section>
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="6" class="d-md-none">
          <img
            :src="verwaltungLaptop"
            alt=""
            width="100%"
            :style="{
              height: '40vh',
              minHeight: '100%',
              objectFit: 'cover',
              // objectPosition: '70%',
            }"
          />
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Verwaltung</h2>
            <p data-aos="fade-left">Fehlermeldungen und Warnungen</p>
            <p data-aos="fade-left">
              Statistiken für deine Patienten und Rezepte
            </p>
            <p data-aos="fade-left">Patientenauflistungen</p>
            <p data-aos="fade-left">Rezeptauflistungen</p>
            <p data-aos="fade-left">
              PDF-Generation für Rechnungen, Terminübersichten und Abrechnungen
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="d-none d-md-block">
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
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="6" class="d-none d-md-block">
          <img
            :src="floatingMac"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
            }"
          />
        </b-col>
        <b-col cols="12" md="6" class="d-md-none">
          <img
            :src="floatingMac"
            alt=""
            width="100%"
            :style="{
              height: '40vh',
              minHeight: '100%',
              objectFit: 'cover',
            }"
          />
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Abrechnung</h2>
            <p data-aos="fade-left">
              Auswahl der abzurechnenden Rezepte & Patienten
            </p>
            <p data-aos="fade-left">Generierung von PDF-Dokumenten</p>
            <p data-aos="fade-left">
              E-Mailversand von Rechnungen und Terminübersichten
            </p>
            <p data-aos="fade-left">Patientenauflistungen</p>
            <p data-aos="fade-left">Rezeptauflistungen</p>
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
  min-height: 90vh;

  &#landingsection {
    display: grid;
    place-items: center;

    & h1 {
      color: $primary;
      font-size: 5em;
      font-weight: 700;
    }

    & p {
      color: $primary;
    }
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
