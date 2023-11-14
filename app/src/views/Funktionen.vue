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
            :srcset="`${paarArbeit_1245} 1245w, ${paarArbeit_977} 977w, ${paarArbeit_842} 842w, ${paarArbeit_522} 522w, ${paarArbeit_200} 200w, ${paarArbeit} 1920w`"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            :srcset="`${paarArbeit_522} 522w, ${paarArbeit_200} 200w, ${paarArbeit} 1920w`"
            sizes="100vw"
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
            <div data-aos="fade-left" class="feature">
              <b-icon-folder-plus scale="3" class="mr-4" />
              <p>Neue Rezepte anlegen</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-folder-symlink scale="3" class="mr-4" />
              <p>Folgerezepte über Kopien oder Verlängerungen</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-cloud-plus scale="3" class="mr-4" />
              <p>
                Ärzte, Krankenkasse, Heilmittel etc. werden automatisch geladen
              </p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-person-x scale="3" class="mr-4" />
              <p>
                Der Button "Patient nicht erschienen" bietet Optionen zur
                Absage, Verlegung oder Ausfallberechnung des Termins
              </p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-printer scale="3" class="mr-4" />
              <p>
                Automatische PDF-Generation für Rechnungen, Terminübersichten
                und Abrechnungen
              </p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-envelope scale="3" class="mr-4" />
              <p>Automatische E-Mail-Versand von Dokumenten</p>
            </div>
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
            :srcset="`${verwaltungLaptop_200} 200w,${verwaltungLaptop_846} 846w,${verwaltungLaptop_1119} 1119w, ${verwaltungLaptop_1352} 1352w, ${verwaltungLaptop} 1920w`"
            sizes="100vw"
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
            <div data-aos="fade-left" class="feature">
              <b-icon-exclamation-circle scale="3" class="mr-4" />
              <p>Fehlermeldungen und Warnungen</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-pie-chart scale="3" class="mr-4" />
              <p>Statistiken für deine Patienten und Rezepte</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-card-checklist scale="3" class="mr-4" />
              <p>Patientenauflistungen</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-view-list scale="3" class="mr-4" />
              <p>Rezeptauflistungen</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-file-earmark-pdf scale="3" class="mr-4" />
              <p>
                PDF-Generation für Rechnungen, Terminübersichten und
                Abrechnungen
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="d-none d-md-block">
          <img
            :src="verwaltungLaptop"
            :srcset="`${verwaltungLaptop_200} 200w,${verwaltungLaptop_846} 846w,${verwaltungLaptop_1119} 1119w, ${verwaltungLaptop_1352} 1352w, ${verwaltungLaptop} 1920w`"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            :srcset="`${floatingMac_200} 200w, ${floatingMac_562} 562w, ${floatingMac_789} 789w, ${floatingMac_924} 924w, ${floatingMac_1077} 1077w, ${floatingMac} 1440w`"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            :srcset="`${floatingMac_200} 200w, ${floatingMac_562} 562w, ${floatingMac_789} 789w, ${floatingMac_924} 924w, ${floatingMac_1077} 1077w, ${floatingMac} 1440w`"
            sizes="100vw"
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
            <div data-aos="fade-left" class="feature">
              <b-icon-ui-checks scale="3" class="mr-4" />
              <p>Auswahl der abzurechnenden Rezepte & Patienten</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-file-pdf scale="3" class="mr-4" />
              <p>Generierung von PDF-Dokumenten</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-envelope scale="3" class="mr-4" />
              <p>E-Mailversand von Rechnungen und Terminübersichten</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-card-checklist scale="3" class="mr-4" />
              <p>Patientenauflistungen</p>
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-view-list scale="3" class="mr-4" />
              <p>Rezeptauflistungen</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import verwaltungLaptop from "@/assets/mockups/webp/mockup-of-a-girl-holding-a-macbook-in-front-of-a-solid-color-wall.webp";
import verwaltungLaptop_200 from "@/assets/mockups/webp/mockup-of-a-girl-holding-a-macbook-in-front-of-a-solid-color-wall_@200.webp";
import verwaltungLaptop_846 from "@/assets/mockups/webp/mockup-of-a-girl-holding-a-macbook-in-front-of-a-solid-color-wall_@846.webp";
import verwaltungLaptop_1119 from "@/assets/mockups/webp/mockup-of-a-girl-holding-a-macbook-in-front-of-a-solid-color-wall_@1119.webp";
import verwaltungLaptop_1352 from "@/assets/mockups/webp/mockup-of-a-girl-holding-a-macbook-in-front-of-a-solid-color-wall_@1352.webp";
import paarArbeit from "@/assets/mockups/webp/coworkers-working-on-a-macbook-mockup-while-talking-about-it.webp";
import paarArbeit_200 from "@/assets/mockups/webp/coworkers-working-on-a-macbook-mockup-while-talking-about-it_@200.webp";
import paarArbeit_522 from "@/assets/mockups/webp/coworkers-working-on-a-macbook-mockup-while-talking-about-it_@522.webp";
import paarArbeit_842 from "@/assets/mockups/webp/coworkers-working-on-a-macbook-mockup-while-talking-about-it_@842.webp";
import paarArbeit_977 from "@/assets/mockups/webp/coworkers-working-on-a-macbook-mockup-while-talking-about-it_@977.webp";
import paarArbeit_1245 from "@/assets/mockups/webp/coworkers-working-on-a-macbook-mockup-while-talking-about-it_@1245.webp";
import floatingMac from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors.webp";
import floatingMac_200 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@200.webp";
import floatingMac_562 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@562.webp";
import floatingMac_789 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@789.webp";
import floatingMac_924 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@924.webp";
import floatingMac_1077 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@1077.webp";

export default {
  name: "FunktionenView",
  metaInfo: {
    title: "Funktionen",
  },
  data() {
    return {
      bbblurry,
      verwaltungLaptop,
      verwaltungLaptop_200,
      verwaltungLaptop_846,
      verwaltungLaptop_1119,
      verwaltungLaptop_1352,
      paarArbeit,
      paarArbeit_200,
      paarArbeit_522,
      paarArbeit_842,
      paarArbeit_977,
      paarArbeit_1245,
      floatingMac,
      floatingMac_200,
      floatingMac_562,
      floatingMac_789,
      floatingMac_924,
      floatingMac_1077,
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

  & > p {
    display: inline;
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
