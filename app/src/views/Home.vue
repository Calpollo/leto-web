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
            :src="workingLady"
            alt=""
            width="100%"
            :style="{ height: '40vh', objectFit: 'cover' }"
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
            <p data-aos="fade-left">Termine automatisch planen</p>
            <p data-aos="fade-left">Rechnungen verschicken</p>
            <p data-aos="fade-left">Statistiken ansehen</p>
            <div data-aos="fade-left">
              <b-button :to="{ name: 'Funktionen' }" variant="primary">
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
            <p data-aos="fade-left">über 97% verfügbar</p>
            <p data-aos="fade-left">Persönlicher Support</p>
            <p data-aos="fade-left">Individuell anpassbar</p>
            <div data-aos="fade-left">
              <b-button :to="{ name: 'Preise' }" variant="primary">
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
import floatingMac from "@/assets/mockups/mockup-of-a-macbook-floating-on-a-surface-with-two-colors-a20461.png";
import workingLady from "@/assets/mockups/macbook-mockup-featuring-a-young-student-doing-homework-m16386-r-el2 (2).png";

export default {
  name: "HomeView",
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

b {
  color: $primary;
}

#tags b {
  font-weight: 900;
  color: $primary;
}
</style>
