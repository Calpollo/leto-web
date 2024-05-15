<template>
  <div id="preise" data-view>
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Preise-Overview"
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
      <VersionCards />
    </section>
    <section role="region" aria-label="Leistungen">
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="5">
          <picture>
            <source
              :srcset="`${appleDevices_avif_1} 1600w, ${appleDevices_avif_2} 1280w, ${appleDevices_avif_3} 960w, ${appleDevices_avif_4} 640w, ${appleDevices_avif_5} 320w, ${appleDevices_avif} 1920w`"
              sizes="(max-width: 768px) 100vw, 41.67vw"
            />
            <source
              :srcset="`${appleDevices_webp_1} 1600w, ${appleDevices_webp_2} 1280w, ${appleDevices_webp_3} 960w, ${appleDevices_webp_4} 640w, ${appleDevices_webp_5} 320w, ${appleDevices_webp} 1920w`"
              sizes="(max-width: 768px) 100vw, 41.67vw"
            />
            <img
              :src="appleDevices_webp"
              alt="Ein iPhone, eine Apple Watch, Apple Airpods und eine weiße Tastatur liegen auf violettem Grund. Auf dem Display des iPhones ist das Leto-Logo zu sehen."
              width="100%"
              loading="lazy"
              :style="{
                height: this.$vuetify.breakpoint.width < 768 ? '40vh' : '90vh',
                objectFit: 'cover',
                objectPosition: '72%',
              }"
            />
          </picture>
        </b-col>
        <b-col cols="12" md="7">
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <div data-aos="fade-left" class="feature">
              <b-icon-currency-euro scale="3" class="mr-4" />
              <div>
                <p>
                  <b>1. Monat kostenlos</b>
                </p>
                <p>
                  Erhalte beim Abschluss einer bezahlten Variante von Leto den
                  ersten Monat geschenkt!
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-arrow-repeat scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Jährlich oder monatlich Zahlen</b>
                </p>
                <p>
                  Bei uns entscheidest du, ob du von uns jährlich oder monatlich
                  eine Rechnung erhalten möchtest.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-cart-check scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Zahlungsmethoden</b>
                </p>
                <p>
                  Zahlung über alle gängige Zahlungsmethoden (Paypal, SEPA,
                  Google Pay, uvm.) sind möglich.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-cart-x scale="3" class="mr-4" />
              <div>
                <p>
                  <b>monatl. kündbar</b>
                </p>
                <p>
                  Du kannst deine Zahlungen immer monatlich kündigen, sogar wenn
                  du jährlich zahlst!
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
    <section
      role="region"
      aria-label="Lokal"
      class="vorstellung py-4"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
    >
      <b-card title="Lokal" title-tag="h2" class="w-75 my-2">
        <b-card-text class="text-muted">
          Verwende Leto nur auf einem lokalen Gerät mit einem Nutzerkonto
        </b-card-text>
        <LokalVorstellung />
      </b-card>

      <b-card title="Online" title-tag="h2" class="w-75 my-2">
        <b-card-text class="text-muted">
          Verwende Leto nur auf all deinen Geräten mit mehreren Zugängen
        </b-card-text>
        <OnlineVorstellung />
      </b-card>

      <b-card title="Kooperation" title-tag="h2" class="w-75 my-2">
        <b-card-text class="text-muted">
          Passe Leto an deine Anforderungen an und nutze die neuesten Versionen
          früher als alle anderen
        </b-card-text>
        <KooperationVorstellung />
      </b-card>
    </section>
    <section role="region" aria-label="Vergleich">
      <h2 class="my-4">Vergleich</h2>
      <div data-aos="zoom-in" data-aos-duration="1000" class="px-2 w-75">
        <b-table
          striped
          hover
          :items="funktionenItems"
          head-variant="light"
          responsive
          class="m-2"
        />
      </div>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import appleDevices_webp from "@/assets/mockups/webp/mockup-iphone.webp";
import appleDevices_webp_1 from "@/assets/mockups/webp/mockup-iphone@1.webp";
import appleDevices_webp_2 from "@/assets/mockups/webp/mockup-iphone@2.webp";
import appleDevices_webp_3 from "@/assets/mockups/webp/mockup-iphone@3.webp";
import appleDevices_webp_4 from "@/assets/mockups/webp/mockup-iphone@4.webp";
import appleDevices_webp_5 from "@/assets/mockups/webp/mockup-iphone@5.webp";
import appleDevices_avif from "@/assets/mockups/avif/mockup-iphone.avif";
import appleDevices_avif_1 from "@/assets/mockups/avif/mockup-iphone@1.avif";
import appleDevices_avif_2 from "@/assets/mockups/avif/mockup-iphone@2.avif";
import appleDevices_avif_3 from "@/assets/mockups/avif/mockup-iphone@3.avif";
import appleDevices_avif_4 from "@/assets/mockups/avif/mockup-iphone@4.avif";
import appleDevices_avif_5 from "@/assets/mockups/avif/mockup-iphone@5.avif";
import VersionCards from "@/components/VersionCards.vue";
import LokalVorstellung from "@/components/LokalVorstellung.vue";
import OnlineVorstellung from "@/components/OnlineVorstellung.vue";
import KooperationVorstellung from "@/components/KooperationVorstellung.vue";

export default {
  name: "PreiseView",
  components: {
    VersionCards,
    LokalVorstellung,
    OnlineVorstellung,
    KooperationVorstellung,
  },
  metaInfo: {
    title: "Preise",
    meta: [
      {
        name: "description",
        content:
          "0,00€! Gratis! Komplett kostenlos! Alle Angebote für Leto, deinen Terminplaner für Physiotherapiepraxen. Schnell. Sicher. Kostenlos.",
      },
    ],
  },
  data() {
    return {
      bbblurry,
      appleDevices_webp,
      appleDevices_webp_1,
      appleDevices_webp_2,
      appleDevices_webp_3,
      appleDevices_webp_4,
      appleDevices_webp_5,
      appleDevices_avif,
      appleDevices_avif_1,
      appleDevices_avif_2,
      appleDevices_avif_3,
      appleDevices_avif_4,
      appleDevices_avif_5,
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

.card-title {
  @extend h4;
}

.card-subtitle {
  @extend h6;
  font-weight: bold;
  color: $primary;
}

.feature {
  color: $primary;
  min-height: 80px;
  display: flex;
  align-items: center;
  max-width: 80%;

  & p {
    margin: 0;
    text-align: left;

    & a {
      text-decoration: underline;
    }
  }

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

.vorstellung {
  & h2 {
    color: $primary;
    font-weight: 900;
    font-size: 3rem;
  }
}
</style>
