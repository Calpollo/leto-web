<template>
  <div id="Home">
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
        <img
          :src="LetoText"
          alt=""
          :style="{ width: '100%' }"
          data-aos="fade-up"
        />
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
          <b-button variant="transparent" pill class="mt-4" href="#sectionB">
            <b-icon-arrow-down variant="primary" />
          </b-button>
        </div>
      </div>
    </section>
    <section id="sectionB">
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
    <section id="sectionC">
      <b-row no-gutters :style="{ minHeight: '90vh' }">
        <b-col cols="12" md="6" class="d-md-none">
          <img
            :src="workingLady"
            alt=""
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
            alt=""
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
import LetoText from "@/assets/Leto - Text.png";
import floatingMac from "@/assets/mockups/webp/mockup-of-a-macbook-floating-on-a-surface-with-two-colors.webp";
import workingLady from "@/assets/mockups/webp/macbook-mockup-featuring-a-young-student-doing-homework.webp";

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
      LetoText,
      workingLady,
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
