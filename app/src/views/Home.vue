<template>
  <div id="Home" data-view>
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Leto-Logo"
    >
      <div>
        <!-- spacer -->
      </div>
      <div>
        <h1>
          <img
            :src="LetoText"
            alt="Das Leto-Logo. Ein Violetter Schriftzug 'Leto' mit einer Kerbe im O."
            :style="{ width: '100%' }"
            width="475"
            height="220"
          />
        </h1>
        <p id="tag-text" class="mt-2">
          Leto ist dein <b>Terminplaner für Physiotherapiepraxen</b>,
          ausgerichtet auf Konformität mit allen Gesetzen und Regeln in
          Deutschland und für deutsche Krankenkassen. In Deutschland entwickelt,
          für deine Praxis <b>anpassbar und voll digital</b>.
        </p>
      </div>
      <div :style="{ width: '50%', maxWidth: '500px', minWidth: '250px' }">
        <b-row id="tags">
          <b-col>
            <b>Schnell</b>
          </b-col>
          <b-col>
            <b>Sicher</b>
          </b-col>
          <b-col>
            <b>Kostenlos</b>
          </b-col>
        </b-row>
        <div>
          <b-button
            variant="transparent"
            pill
            class="mt-4"
            @click="$refs.sectionB.scrollIntoView(false)"
          >
            <b-icon-arrow-down variant="primary" />
          </b-button>
        </div>
      </div>
    </section>
    <section ref="sectionB" role="region" aria-label="Funktionen">
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="6">
          <picture>
            <source
              :srcset="`${floatingMac_avif_1} 1200w, ${floatingMac_avif_2} 960w, ${floatingMac_avif_3} 720w, ${floatingMac_avif_4} 480w, ${floatingMac_avif_5} 240w, ${floatingMac_avif} 1440w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <source
              :srcset="`${floatingMac_webp_1} 1200w, ${floatingMac_webp_2} 960w, ${floatingMac_webp_3} 720w, ${floatingMac_webp_4} 480w, ${floatingMac_webp_5} 240w, ${floatingMac_webp} 1440w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <img
              :src="floatingMac_webp"
              alt="Ein Macbook schwebt über einem weißen Tisch vor einer violetten Wand. Auf dem Display ist die Anwendung Leto zu sehen."
              width="100%"
              loading="lazy"
              :style="{
                height: this.$vuetify.breakpoint.width < 768 ? '40vh' : '90vh',
                objectFit: 'cover',
                objectPosition: 'center 42%',
              }"
            />
          </picture>
        </b-col>
        <b-col cols="12" md="6">
          <div
            :style="{
              display: 'grid',
              height: '100%',
              minHeight: '300px',
              placeItems: 'center',
            }"
          >
            <div data-aos="fade-left" class="feature">
              <b-icon-calendar2-week scale="3" class="mr-5" />
              <div>
                <p>
                  <b> Termine automatisch planen</b>
                </p>
                <p>
                  Nie wieder nach freien Terminen suchen. Leto schlägt
                  automatisch freie Termine zur Auswahl vor. Natürlich kannst du
                  es auch händisch weitermachen.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-journal-medical scale="3" class="mr-5" />

              <div>
                <p>
                  <b>Rechnungen verschicken</b>
                </p>
                <p>
                  Du kannst direkt im Programm deine Patienten kontaktieren,
                  Terminerinnerungen und Rechnungen verschicken.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-bar-chart scale="3" class="mr-5" />
              <div>
                <p>
                  <b>Statistiken ansehen</b>
                </p>
                <p>
                  Wir bereiten dir Statistiken vor, damit du weißt, woher deine
                  Patienten kommen, mit welcher Versicherung du dich gut stellen
                  solltest und welche Behandlungen du am meisten durchführst.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="bottom">
              <b-button
                :to="{ name: 'Funktionen' }"
                variant="primary"
                size="md"
              >
                <b-icon-arrow-right />
                Funktionen
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
    <section id="sectionC" role="region" aria-label="Preise">
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col
          cols="12"
          md="6"
          :order="this.$vuetify.breakpoint.width < 768 ? 2 : 1"
        >
          <div
            :style="{
              display: 'grid',
              height: '100%',
              minHeight: '300px',
              placeItems: 'center',
            }"
          >
            <div data-aos="fade-left" class="feature">
              <b-icon-clock-history scale="3" class="mr-5" />
              <div>
                <p>
                  <b>über 97% verfügbar</b>
                </p>
                <p>
                  Unser Service ist rund um die Uhr von allen internetfähigen
                  Geräten verfügbar. Checke gerne den
                  <router-link :to="{ name: 'Status' }">
                    aktuellen Status der Services
                  </router-link>
                  .
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-telephone scale="3" class="mr-5" />
              <b-icon-envelope scale="3" class="mr-5" />
              <div>
                <p>
                  <b>Persönlicher Support</b>
                </p>
                <p>
                  Du kannst du uns jederzeit per Mail kontaktieren. Für
                  Kontoinhaber sind wir auch telefonisch erreichbar.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-person-badge scale="3" class="mr-5" />
              <div>
                <p>
                  <b>Individuell anpassbar</b>
                </p>
                <p>
                  Deine Preise, Kontaktdaten, Behandlungsarten und -zeiten etc.
                  kannst du ganz individuell einstellen.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="bottom">
              <b-button :to="{ name: 'Preise' }" variant="primary" size="md">
                <b-icon-arrow-right />
                Preise
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col
          cols="12"
          md="6"
          :order="this.$vuetify.breakpoint.width < 768 ? 1 : 2"
        >
          <picture>
            <source
              :srcset="`${workingLady_avif_1} 1600w, ${workingLady_avif_2} 1280w, ${workingLady_avif_3} 960w, ${workingLady_avif_4} 640w, ${workingLady_avif_5} 320w, ${workingLady_avif} 1920w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <source
              :srcset="`${workingLady_webp_1} 1600w, ${workingLady_webp_2} 1280w, ${workingLady_webp_3} 960w, ${workingLady_webp_4} 640w, ${workingLady_webp_5} 320w, ${workingLady_webp} 1920w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <img
              :src="workingLady_webp"
              alt="Eine junge Frau arbeitet am Schreibtisch an einem Laptop. Auf dem Display ist die Anwendung Leto zu sehen."
              width="100%"
              loading="lazy"
              :style="{
                height: this.$vuetify.breakpoint.width < 768 ? '40vh' : '90vh',
                objectFit: 'cover',
              }"
            />
          </picture>
        </b-col>
      </b-row>
    </section>
    <section
      id="sectionD"
      role="region"
      aria-label="Versionen"
      class="d-flex flex-column justify-content-center align-items-center"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
    >
      <h2>Unsere Versionen</h2>
      <p class="w-50 mb-4">
        Du kannst Leto in drei verschiedenen Versionen nutzen:
      </p>
      <VersionCards :showMore="true" />
      <p class="w-50 mt-4">
        Mehr Infos zu Preisen und Funktionsumfang findest du in unserer
        <router-link :to="{ name: 'Preise' }">Versionsbeschreibung</router-link
        >.
      </p>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import LetoText from "@/assets/Leto - Text.svg";
import floatingMac_webp from "@/assets/mockups/webp/mockup-floating-macbook.webp";
import floatingMac_webp_1 from "@/assets/mockups/webp/mockup-floating-macbook@1.webp";
import floatingMac_webp_2 from "@/assets/mockups/webp/mockup-floating-macbook@2.webp";
import floatingMac_webp_3 from "@/assets/mockups/webp/mockup-floating-macbook@3.webp";
import floatingMac_webp_4 from "@/assets/mockups/webp/mockup-floating-macbook@4.webp";
import floatingMac_webp_5 from "@/assets/mockups/webp/mockup-floating-macbook@5.webp";
import floatingMac_avif from "@/assets/mockups/avif/mockup-floating-macbook.avif";
import floatingMac_avif_1 from "@/assets/mockups/avif/mockup-floating-macbook@1.avif";
import floatingMac_avif_2 from "@/assets/mockups/avif/mockup-floating-macbook@2.avif";
import floatingMac_avif_3 from "@/assets/mockups/avif/mockup-floating-macbook@3.avif";
import floatingMac_avif_4 from "@/assets/mockups/avif/mockup-floating-macbook@4.avif";
import floatingMac_avif_5 from "@/assets/mockups/avif/mockup-floating-macbook@5.avif";
import workingLady_webp from "@/assets/mockups/webp/mockup-student-homework.webp";
import workingLady_webp_1 from "@/assets/mockups/webp/mockup-student-homework@1.webp";
import workingLady_webp_2 from "@/assets/mockups/webp/mockup-student-homework@2.webp";
import workingLady_webp_3 from "@/assets/mockups/webp/mockup-student-homework@3.webp";
import workingLady_webp_4 from "@/assets/mockups/webp/mockup-student-homework@4.webp";
import workingLady_webp_5 from "@/assets/mockups/webp/mockup-student-homework@5.webp";
import workingLady_avif from "@/assets/mockups/avif/mockup-student-homework.avif";
import workingLady_avif_1 from "@/assets/mockups/avif/mockup-student-homework@1.avif";
import workingLady_avif_2 from "@/assets/mockups/avif/mockup-student-homework@2.avif";
import workingLady_avif_3 from "@/assets/mockups/avif/mockup-student-homework@3.avif";
import workingLady_avif_4 from "@/assets/mockups/avif/mockup-student-homework@4.avif";
import workingLady_avif_5 from "@/assets/mockups/avif/mockup-student-homework@5.avif";
import VersionCards from "@/components/VersionCards.vue";

export default {
  name: "HomeView",
  components: { VersionCards },
  metaInfo: {
    title: "Leto - Terminplaner für Physiotherapie",
    titleTemplate: null,
    meta: [
      {
        name: "description",
        content:
          "Leto ist dein Terminplaner für Physiotherapiepraxen. Schnell. Sicher. Kostenlos. Registriere dich jetzt und lege gleich los!",
      },
    ],
  },
  data() {
    return {
      bbblurry,
      LetoText,
      floatingMac_webp,
      floatingMac_webp_1,
      floatingMac_webp_2,
      floatingMac_webp_3,
      floatingMac_webp_4,
      floatingMac_webp_5,
      floatingMac_avif,
      floatingMac_avif_1,
      floatingMac_avif_2,
      floatingMac_avif_3,
      floatingMac_avif_4,
      floatingMac_avif_5,
      workingLady_webp,
      workingLady_webp_1,
      workingLady_webp_2,
      workingLady_webp_3,
      workingLady_webp_4,
      workingLady_webp_5,
      workingLady_avif,
      workingLady_avif_1,
      workingLady_avif_2,
      workingLady_avif_3,
      workingLady_avif_4,
      workingLady_avif_5,
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
  }
}

#tag-text {
  color: $primary;
  margin: 0 64px;
  max-width: 500px;
}

.feature {
  color: $primary;
  font-weight: 500;
  // font-size: 1.5em;
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
}

b {
  color: $primary;
}

#tags b {
  font-weight: 900;
  color: $primary;
}

h2 {
  color: $primary;
}
</style>
