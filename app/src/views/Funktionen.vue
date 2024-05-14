<template>
  <div id="Funktionen" data-view>
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Funktionen-Overview"
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
    <section role="region" aria-label="Termine">
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="6">
          <picture>
            <source
              :srcset="`${paarArbeit_avif_1} 1600w, ${paarArbeit_avif_2} 1280w, ${paarArbeit_avif_3} 960w, ${paarArbeit_avif_4} 640w, ${paarArbeit_avif_5} 320w, ${paarArbeit_avif} 1920w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <source
              :srcset="`${paarArbeit_webp_1} 1600w, ${paarArbeit_webp_2} 1280w, ${paarArbeit_webp_3} 960w, ${paarArbeit_webp_4} 640w, ${paarArbeit_webp_5} 320w, ${paarArbeit_webp} 1920w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <img
              :src="paarArbeit_webp"
              alt="Kollegen, die an einem Macbook an Leto arbeiten und darüber reden."
              width="100%"
              loading="lazy"
              :style="{
                height: this.$vuetify.breakpoint.width < 768 ? '40vh' : '90vh',
                minHeight: '100%',
                objectFit: 'cover',
              }"
            />
          </picture>
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Termine</h2>
            <div data-aos="fade-left" class="feature">
              <b-icon-folder-plus scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Neue Rezepte anlegen</b>
                </p>
                <p>
                  Lege innerhalb von Sekunden neue Rezepte im System an! Alle
                  unnötigen Informationen werden ausgelassen.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-folder-symlink scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Folgerezepte</b>
                </p>
                <p>
                  Erstelle Folgerezepte als Kopie oder Verlängerung von
                  bestehenden Rezepten.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-cloud-plus scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Ärzte, Krankenkassen, Heilmittel</b>
                </p>
                <p>
                  Alle bekannten externen Ressourcen werden automatisch geladen.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-person-x scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Patient nicht erschienen?</b>
                </p>
                <p>
                  Mit nur einem Klick wählst du Optionen zur Absage, Verlegung
                  oder Ausfallberechnung
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-printer scale="3" class="mr-4" />
              <div>
                <p>
                  <b>PDF-Generierung</b>
                </p>
                <p>
                  Per Mausklick erstellst du individuelle Rechnungen,
                  Terminübersichten und Abrechnungen
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>

    <!-- Verwaltung -->
    <section role="region" aria-label="Verwaltung">
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col :order="this.$vuetify.breakpoint.width < 768 ? 2 : 1">
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Verwaltung</h2>
            <div data-aos="fade-left" class="feature">
              <b-icon-exclamation-circle scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Fehlermeldungen und Warnungen</b>
                </p>
                <p>
                  Erhalte kurz und knapp ein Übersicht, welche Ungereimtheiten
                  sich in deiner Planung auftun, selbst für ungeschulte
                  Mitarbeiter!
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-pie-chart scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Rezept- und Patientenstatistiken</b>
                </p>
                <p>
                  Erhalte eine Auswertung über deine Zahlen: Von welchem Arzt
                  kommen Patienten, wo sind sie versichert und welche Behandlung
                  bekommen sie?
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-card-checklist scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Deine Patienten & Rezepte</b>
                </p>
                <p>
                  Durchsuche deine Patientenakten in sekundenschnelle und finde
                  die gesuchte Info sofort!
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-file-earmark-pdf scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Dokumente</b>
                </p>
                <p>
                  Erstelle Rechnungen, Terminübersichten und Abrechnung mit nur
                  einem Klick!
                </p>
              </div>
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
              :srcset="`${verwaltungLaptop_avif_1} 1600w,${verwaltungLaptop_avif_2} 1280w,${verwaltungLaptop_avif_3} 960w, ${verwaltungLaptop_avif_4} 640w, ${verwaltungLaptop_avif_5} 320w, ${verwaltungLaptop_avif} 1920w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <source
              :srcset="`${verwaltungLaptop_webp_1} 1600w,${verwaltungLaptop_webp_2} 1280w,${verwaltungLaptop_webp_3} 960w, ${verwaltungLaptop_webp_4} 640w, ${verwaltungLaptop_webp_5} 320w, ${verwaltungLaptop_webp} 1920w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <img
              :src="verwaltungLaptop_webp"
              alt="Eine Frau hält einen Laptop in beiden Hängen vor einer farbigen Wand. Auf dem Display ist die Anwendung Leto zu sehen."
              width="100%"
              loading="lazy"
              :style="{
                height: this.$vuetify.breakpoint.width < 768 ? '40vh' : '90vh',
                objectFit: 'cover',
                // objectPosition: '70%',
              }"
            />
          </picture>
        </b-col>
      </b-row>
    </section>

    <!-- Abrechnung -->
    <section role="region" aria-label="Abrechnung">
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
                minHeight: '100%',
                objectFit: 'cover',
              }"
            />
          </picture>
        </b-col>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <h2>Abrechnung</h2>
            <div data-aos="fade-left" class="feature">
              <b-icon-ui-checks scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Abrechnungen für mehrere Patienten & Rezepte</b>
                </p>
                <p>
                  Erstelle mehrere Dokumente gleichzeitig und wähle bloß die
                  Rezepte aus, die du jetzt abrechnen möchtest.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-file-pdf scale="3" class="mr-4" />
              <div>
                <p>
                  <b>PDF-Generierung</b>
                </p>
                <p>
                  Erhalte alle deine Dokumente in digitaler Form als PDF zum
                  Abspeichern, Versenden oder Ausdrucken
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-envelope scale="3" class="mr-4" />
              <div>
                <p>
                  <b>E-Mailversand</b>
                </p>
                <p>
                  Verschicke alle deine Rechnungen und Terminübersichten als
                  E-Mail direkt in der App
                </p>
              </div>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-card-checklist scale="3" class="mr-4" />
              <div>
                <p>
                  <b>Patienten- & Rezeptlisten</b>
                </p>
                <p>
                  Rechne gleich mehrere Patienten komplett mit all ihren
                  Rezepten ab
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import verwaltungLaptop_webp from "@/assets/mockups/webp/mockup-girl-holding-macbook.webp";
import verwaltungLaptop_webp_1 from "@/assets/mockups/webp/mockup-girl-holding-macbook@1.webp";
import verwaltungLaptop_webp_2 from "@/assets/mockups/webp/mockup-girl-holding-macbook@2.webp";
import verwaltungLaptop_webp_3 from "@/assets/mockups/webp/mockup-girl-holding-macbook@3.webp";
import verwaltungLaptop_webp_4 from "@/assets/mockups/webp/mockup-girl-holding-macbook@4.webp";
import verwaltungLaptop_webp_5 from "@/assets/mockups/webp/mockup-girl-holding-macbook@5.webp";
import verwaltungLaptop_avif from "@/assets/mockups/avif/mockup-girl-holding-macbook.avif";
import verwaltungLaptop_avif_1 from "@/assets/mockups/avif/mockup-girl-holding-macbook@1.avif";
import verwaltungLaptop_avif_2 from "@/assets/mockups/avif/mockup-girl-holding-macbook@2.avif";
import verwaltungLaptop_avif_3 from "@/assets/mockups/avif/mockup-girl-holding-macbook@3.avif";
import verwaltungLaptop_avif_4 from "@/assets/mockups/avif/mockup-girl-holding-macbook@4.avif";
import verwaltungLaptop_avif_5 from "@/assets/mockups/avif/mockup-girl-holding-macbook@5.avif";
import paarArbeit_webp from "@/assets/mockups/webp/mockup-coworkers.webp";
import paarArbeit_webp_1 from "@/assets/mockups/webp/mockup-coworkers@1.webp";
import paarArbeit_webp_2 from "@/assets/mockups/webp/mockup-coworkers@2.webp";
import paarArbeit_webp_3 from "@/assets/mockups/webp/mockup-coworkers@3.webp";
import paarArbeit_webp_4 from "@/assets/mockups/webp/mockup-coworkers@4.webp";
import paarArbeit_webp_5 from "@/assets/mockups/webp/mockup-coworkers@5.webp";
import paarArbeit_avif from "@/assets/mockups/avif/mockup-coworkers.avif";
import paarArbeit_avif_1 from "@/assets/mockups/avif/mockup-coworkers@1.avif";
import paarArbeit_avif_2 from "@/assets/mockups/avif/mockup-coworkers@2.avif";
import paarArbeit_avif_3 from "@/assets/mockups/avif/mockup-coworkers@3.avif";
import paarArbeit_avif_4 from "@/assets/mockups/avif/mockup-coworkers@4.avif";
import paarArbeit_avif_5 from "@/assets/mockups/avif/mockup-coworkers@5.avif";
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

export default {
  name: "FunktionenView",
  metaInfo: {
    title: "Funktionen",
    meta: [
      {
        name: "description",
        content:
          "Erhalte eine Übersicht über die Funktionen von Leto, deinem Terminplaner für Physiotherapiepraxen. Wir erklären dir, wie Termine, Abrechnungen und Verwaltungsoptionen gemacht werden.",
      },
    ],
  },
  data() {
    return {
      bbblurry,
      verwaltungLaptop_webp,
      verwaltungLaptop_webp_1,
      verwaltungLaptop_webp_2,
      verwaltungLaptop_webp_3,
      verwaltungLaptop_webp_4,
      verwaltungLaptop_webp_5,
      verwaltungLaptop_avif,
      verwaltungLaptop_avif_1,
      verwaltungLaptop_avif_2,
      verwaltungLaptop_avif_3,
      verwaltungLaptop_avif_4,
      verwaltungLaptop_avif_5,
      paarArbeit_webp,
      paarArbeit_webp_1,
      paarArbeit_webp_2,
      paarArbeit_webp_3,
      paarArbeit_webp_4,
      paarArbeit_webp_5,
      paarArbeit_avif,
      paarArbeit_avif_1,
      paarArbeit_avif_2,
      paarArbeit_avif_3,
      paarArbeit_avif_4,
      paarArbeit_avif_5,
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

.feature {
  color: $primary;
  font-weight: 500;
  min-height: 80px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;

  & > .b-icon {
    display: inline-block;
  }

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

h2 {
  color: $primary;
  font-weight: 600;
}

b {
  color: $primary;
}
</style>
