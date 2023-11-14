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
      <div :style="{ padding: '30px' }">
        <h1 data-aos="fade-up">Preise im Überblick</h1>
        <p data-aos="fade-up">
          Deine Orga-Software soll dir nicht auf der Tasche liegen. Deswegen
          haben wir einen Preis, der für jeden passt.
        </p>
      </div>
      <b-row align-v="stretch" :style="{ width: '80%' }">
        <b-col class="mb-1">
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
              <b-button variant="link" :to="{ name: 'Register' }">
                <b class="price">0,00€</b>
              </b-button>
            </template>
          </b-card>
        </b-col>
        <b-col class="mb-1">
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
            <template #footer>
              <b-button variant="link" disabled>
                <b class="price mr-2"><s>15,00€ / Monat</s></b>
                <b class="price">bald verfügbar</b>
              </b-button>
            </template>
          </b-card>
        </b-col>
        <b-col class="mb-1">
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
              <b-list-group-item>
                Alle stabilen Funktionen + Beta-Funktionen
              </b-list-group-item>
              <b-list-group-item>Cloud-Backup</b-list-group-item>
            </b-list-group>
            <template #footer>
              <b-button
                href="mailto:nicklaus.leto@gmail.com?subject=Anfrage für Kooperationskonto"
                variant="link"
              >
                <b class="price"> Kooperation anfragen </b>
              </b-button>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="5" class="d-md-none">
          <img
            :src="appleDevices"
            :srcset="`${appleDevices_200} 200w, ${appleDevices_783} 783w, ${appleDevices_1123} 1123w, ${appleDevices} 1920w`"
            sizes="100vw"
            alt=""
            width="100%"
            :style="{
              height: '40vh',
              objectFit: 'cover',
              objectPosition: '72%',
              minHeight: '100%',
            }"
          />
        </b-col>
        <b-col cols="12" md="5" class="d-none d-md-block">
          <img
            :src="appleDevices"
            :srcset="`${appleDevices_200} 200w, ${appleDevices_783} 783w, ${appleDevices_1123} 1123w, ${appleDevices} 1920w`"
            sizes="(max-width: 768px) 100vw, calc(5/12*100vw)"
            alt=""
            width="100%"
            :style="{
              height: '90vh',
              objectFit: 'cover',
              objectPosition: '72%',
            }"
          />
        </b-col>
        <b-col cols="12" md="7">
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <div data-aos="fade-left" class="feature">
              <b-icon-currency-euro scale="3" class="mr-4" />
              <p>1. Monat kostenlos</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-arrow-repeat scale="3" class="mr-4" />
              <p>Jährlich oder monatlich zahlen</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-cart-check scale="3" class="mr-4" />
              <p>
                Zahlung über alle gängige Zahlungsmethoden (Paypal, SEPA, Google
                Pay, uvm.)
              </p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-cart-x scale="3" class="mr-4" />
              <p>monatl. kündbar</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row>
        <b-col>
          <h2 class="my-4">Vergleich</h2>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <b-table
              striped
              hover
              :items="funktionenItems"
              head-variant="light"
              responsive
              class="m-2"
            />
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import appleDevices from "@/assets/mockups/webp/mockup-of-an-iphone-13-among-other-digital-devices.webp";
import appleDevices_1123 from "@/assets/mockups/webp/mockup-of-an-iphone-13-among-other-digital-devices_@1123.webp";
import appleDevices_783 from "@/assets/mockups/webp/mockup-of-an-iphone-13-among-other-digital-devices_@783.webp";
import appleDevices_200 from "@/assets/mockups/webp/mockup-of-an-iphone-13-among-other-digital-devices_@200.webp";

export default {
  name: "PreiseView",
  metaInfo: {
    title: "Preise",
  },
  data() {
    return {
      bbblurry,
      appleDevices,
      appleDevices_1123,
      appleDevices_783,
      appleDevices_200,
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
  min-height: 90vh;

  &#landingsection {
    display: grid;
    place-items: center;
    min-height: 90vh;

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

.feature {
  color: $primary;
  font-weight: 500;
  min-height: 80px;
  display: grid;
  grid-template-columns: max-content fit-content(60vw);
  place-items: center;

  & > .b-icon {
    display: inline-block;
  }

  & > p {
    display: inline;
    margin: 0;
  }
}

b {
  color: $primary;
}

.b-table {
  text-align: start;
}
</style>
