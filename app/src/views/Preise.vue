<template>
  <div id="preise">
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
        <h1 data-aos="fade-up">Preise im Überblick</h1>
        <p data-aos="fade-up">
          Deine Orga-Software soll dir nicht auf der Tasche liegen. Deswegen
          haben wir einen Preis, der für jeden passt.
        </p>
      </div>
      <b-row
        align-v="stretch"
        :style="{ width: '80%' }"
        class="d-none d-lg-flex"
      >
        <b-col>
          <b-card
            title="Lokal"
            :style="{ height: '100%' }"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <b-list-group class="mt-4">
              <b-list-group-item>Für neue Gründer und Tester</b-list-group-item>
              <b-list-group-item>Kostenlos, für immer</b-list-group-item>
              <b-list-group-item>Basisfunktionen</b-list-group-item>
              <b-list-group-item>Ohne Backup</b-list-group-item>
            </b-list-group>

            <template #footer>
              <b class="price">0,00€</b>
            </template>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Online"
            :style="{ height: '100%' }"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <b> Lokal + </b>
            <b-list-group>
              <b-list-group-item>Für seriöse Praxen</b-list-group-item>
              <b-list-group-item>Mehrere Benutzer</b-list-group-item>
              <b-list-group-item>Alle stabilen Funktionen</b-list-group-item>
              <b-list-group-item>Cloud-Backup</b-list-group-item>
            </b-list-group>
            <template #footer> <b class="price">15,00€ / Monat</b></template>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Kooperation"
            :style="{ height: '100%' }"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <b> Online + </b>
            <b-list-group>
              <b-list-group-item>Für alle, die mehr wollen</b-list-group-item>
              <b-list-group-item
                >Individuelle Softwareupdates</b-list-group-item
              >
              <b-list-group-item
                >Alle stabilen Funktionen + Beta-Funktionen</b-list-group-item
              >
              <b-list-group-item>Cloud-Backup</b-list-group-item>
            </b-list-group>
            <template #footer> <b class="price">nach Absprache</b> </template>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="5">
          <img
            :src="appleDevices"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
              objectPosition: '72%',
            }"
          />
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <p data-aos="fade-left">1. Monat kostenlos</p>
            <p data-aos="fade-left">Jährlich oder monatlich zahlen</p>
            <p data-aos="fade-left">Zahlung über Paypal</p>
            <p data-aos="fade-left">monatl. kündbar</p>
          </div>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col class="p-4">
          <h2 class="my-4">Vergleich</h2>
          <div
            class="mx-auto"
            :style="{ maxWidth: '1000px' }"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <b-table
              striped
              hover
              :items="funktionenItems"
              head-variant="light"
            />
          </div>
        </b-col>
        <b-col cols="4" class="d-none d-lg-block">
          <img
            :src="wohnungMac"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
              objectPosition: '20%',
            }"
          />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import LetoText from "@/assets/Leto - Text.png";
import appleDevices from "@/assets/mockups/mockup-of-an-iphone-13-among-other-digital-devices-m23242.png";
import wohnungMac from "@/assets/mockups/macbook-mockup-featuring-a-house-environment-21624 (3).png";

export default {
  name: "PreiseView",
  data() {
    return {
      bbblurry,
      appleDevices,
      LetoText,
      wohnungMac,
      funktionenItems: [
        {
          " ": "Benutzer",
          Lokal: 1,
          Basis: 5,
          Kooperation: "unbegrenzt",
        },
        {
          " ": "Rechnungen",
          Lokal: "mit Wasserzeichen",
          Basis: "mit Unternehmenslogo",
          Kooperation: "mit Unternehmenslogo",
        },
        {
          " ": "E-Mail-Versand",
          Lokal: "manuell",
          Basis: "über unsere E-Mailserver",
          Kooperation: "über unsere E-Mailserver",
        },
        {
          " ": "ICD-10-Support",
          Lokal: "voll",
          Basis: "voll",
          Kooperation: "voll",
        },
        {
          " ": "Backup",
          Lokal: "nur lokal",
          Basis: "in der Cloud",
          Kooperation: "in der Cloud",
        },
        {
          " ": "Online-Zugang",
          Lokal: "eingeschränkt",
          Basis: "weltweit erreichbar",
          Kooperation: "weltweit erreichbar",
        },
        {
          " ": "Support",
          Lokal: "per E-Mail",
          Basis: "per E-Mail und telefonisch",
          Kooperation: "per E-Mail und telefonisch",
        },
      ],
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

b {
  color: $primary;
}

.b-table {
  text-align: start;
}
</style>
