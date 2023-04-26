<template>
  <div id="preise">
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
        <h1>Preise im Überblick</h1>
        <p>
          Deine Orga-Software soll dir nicht auf der Tasche liegen. Deswegen
          haben wir einen Preis, der für jeden passt.
        </p>
      </div>
      <b-row align-v="stretch" :style="{ width: '80%' }">
        <b-col>
          <b-card title="Lokal" :style="{ height: '100%' }">
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
          <b-card title="Online" :style="{ height: '100%' }">
            <b-card-text>
              <b> Lokal + </b>
              <b-list-group>
                <b-list-group-item>Für seriöse Praxen</b-list-group-item>
                <b-list-group-item>Mehrere Benutzer</b-list-group-item>
                <b-list-group-item>Alle stabilen Funktionen</b-list-group-item>
                <b-list-group-item>Cloud-Backup</b-list-group-item>
              </b-list-group>
            </b-card-text>
            <template #footer> <b class="price">15,00€ / Monat</b></template>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Kooperation" :style="{ height: '100%' }">
            <b-card-text>
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
            </b-card-text>
            <template #footer> <b class="price">nach Absprache</b> </template>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row no-gutters>
        <b-col cols="4">
          <img
            :src="appleDevices"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
              objectPosition: '70%',
            }"
          />
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <p>1. Monat kostenlos</p>
            <p>Jährlich oder monatlich zahlen</p>
            <p>Zahlung über Paypal</p>
            <p>monatl. kündbar</p>
          </div>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row no-gutters>
        <b-col class="p-2">
          <h2 class="my-4">Vergleich</h2>
          <b-table :items="funktionenItems" />
        </b-col>
        <b-col cols="4">
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
        },
        {
          " ": "Rechnungen",
          Lokal: "mit Wasserzeichen",
          Basis: "mit Unternehmenslabel",
        },
        {
          " ": "E-Mail-Versand",
          Lokal: "manuell",
          Basis: "über unsere E-Mailserver",
        },
        {
          " ": "ICD-10-Support",
          Lokal: "voll",
          Basis: "voll",
        },
        {
          " ": "Backup",
          Lokal: "nur lokal",
          Basis: "in der Cloud",
        },
        {
          " ": "Online-Zugang",
          Lokal: "eingeschränkt",
          Basis: "weltweit erreichbar",
        },
        {
          " ": "Support",
          Lokal: "per E-Mail",
          Basis: "per E-Mail und telefonisch",
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
  }
}

b {
  color: $primary;
}

.b-table {
  text-align: start;
}
</style>
