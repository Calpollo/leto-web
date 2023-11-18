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
            data-aos="fade-up"
          />
        </h1>
        <p class="mt-2" data-aos="fade-up">
          <b>Dein Terminplaner</b>
        </p>
      </div>
      <div :style="{ width: '50%', maxWidth: '500px', minWidth: '250px' }">
        <b-row id="tags">
          <b-col data-aos="fade-up" data-aos-delay="200">
            <b>Schnell</b>
          </b-col>
          <b-col data-aos="fade-up" data-aos-delay="500">
            <b>Sicher</b>
          </b-col>
          <b-col data-aos="fade-up" data-aos-delay="800">
            <b>Kostenlos</b>
          </b-col>
        </b-row>
        <div data-aos="fade-up" data-aos-delay="1100">
          <b-button
            variant="transparent"
            pill
            class="mt-4"
            @click="$refs.sectionB.scrollIntoView()"
          >
            <b-icon-arrow-down variant="primary" />
          </b-button>
        </div>
      </div>
    </section>
    <section ref="sectionB" role="region" aria-label="Funktionen">
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="6" class="d-none d-md-block">
          <img
            :src="floatingMac"
            :srcset="`${floatingMac_200} 200w, ${floatingMac_562} 562w, ${floatingMac_789} 789w, ${floatingMac_924} 924w, ${floatingMac_1077} 1077w, ${floatingMac} 1440w`"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Ein Macbook schwebt über einem weißen Tisch vor einer violetten Wand. Auf dem Display ist die Anwendung Leto zu sehen."
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
            alt="Ein Macbook schwebt über einem weißen Tisch vor einer violetten Wand. Auf dem Display ist die Anwendung Leto zu sehen."
            width="100%"
            :style="{
              height: '40vh',
              objectFit: 'cover',
              objectPosition: 'center 42%',
            }"
          />
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
              Termine automatisch planen
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-journal-medical scale="3" class="mr-5" />
              Rechnungen verschicken
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-bar-chart scale="3" class="mr-5" />
              Statistiken ansehen
            </div>
            <div data-aos="fade-left">
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
        <b-col cols="12" md="6" class="d-md-none">
          <img
            :src="workingLady"
            :srcset="`${workingLady_1291} 1291w, ${workingLady_1088} 1088w, ${workingLady_659} 659w, ${workingLady_200} 200w, ${workingLady} 1920w`"
            sizes="100vw"
            alt="Eine junge Frau arbeitet am Schreibtisch an einem Laptop. Auf dem Display ist die Anwendung Leto zu sehen."
            width="100%"
            :style="{ height: '40vh', objectFit: 'cover', minHeight: '100%' }"
          />
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
              <b-icon-clock-history scale="3" class="mr-5" />
              über 97% verfügbar
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-telephone scale="3" class="mr-5" />
              <b-icon-envelope scale="3" class="mr-5" />
              Persönlicher Support
            </div>
            <div data-aos="fade-left" class="feature">
              <b-icon-person-badge scale="3" class="mr-5" />
              Individuell anpassbar
            </div>
            <div data-aos="fade-left">
              <b-button :to="{ name: 'Preise' }" variant="primary" size="md">
                <b-icon-arrow-right />
                Preise
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="d-none d-md-block">
          <img
            :src="workingLady"
            :srcset="`${workingLady_1291} 1291w, ${workingLady_1088} 1088w, ${workingLady_659} 659w, ${workingLady_200} 200w, ${workingLady} 1920w`"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Eine junge Frau arbeitet am Schreibtisch an einem Laptop. Auf dem Display ist die Anwendung Leto zu sehen."
            width="100%"
            :style="{ height: '90vh', objectFit: 'cover' }"
          />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import LetoText from "@/assets/Leto - Text.svg";
import floatingMac from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors.webp";
import floatingMac_200 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@200.webp";
import floatingMac_562 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@562.webp";
import floatingMac_789 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@789.webp";
import floatingMac_924 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@924.webp";
import floatingMac_1077 from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors_@1077.webp";
import workingLady from "@/assets/mockups/webp/macbook-mockup-featuring-a-young-student-doing-homework.webp";
import workingLady_1291 from "@/assets/mockups/webp/macbook-mockup-featuring-a-young-student-doing-homework_@1291.webp";
import workingLady_1088 from "@/assets/mockups/webp/macbook-mockup-featuring-a-young-student-doing-homework_@1088.webp";
import workingLady_659 from "@/assets/mockups/webp/macbook-mockup-featuring-a-young-student-doing-homework_@659.webp";
import workingLady_200 from "@/assets/mockups/webp/macbook-mockup-featuring-a-young-student-doing-homework_@200.webp";

export default {
  name: "HomeView",
  metaInfo: {
    title: "Leto",
    titleTemplate: null,
  },
  data() {
    return {
      bbblurry,
      floatingMac,
      floatingMac_200,
      floatingMac_562,
      floatingMac_789,
      floatingMac_924,
      floatingMac_1077,
      LetoText,
      workingLady,
      workingLady_1291,
      workingLady_1088,
      workingLady_659,
      workingLady_200,
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

.feature {
  color: $primary;
  font-weight: 500;
  // font-size: 1.5em;
}

b {
  color: $primary;
}

#tags b {
  font-weight: 900;
  color: $primary;
}
</style>
