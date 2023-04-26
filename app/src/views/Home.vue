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
        <img :src="LetoText" alt="" />
        <p class="mt-2">
          <b>Dein Terminplaner</b>
        </p>
      </div>
      <div :style="{ width: '50%', maxWidth: '500px' }">
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
        <b-button variant="transparent" pill class="mt-4" href="#sectionB">
          <b-icon-arrow-down variant="primary" />
        </b-button>
      </div>
    </section>
    <section id="sectionB">
      <b-row no-gutters>
        <b-col cols="6">
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
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <p>Termine automatisch planen</p>
            <p>Rechnungen verschicken</p>
            <p>Statistiken ansehen</p>
            <b-button :to="{ name: 'Funktionen' }" variant="primary">
              <b-icon-arrow-right />
              Funktionen
            </b-button>
          </div>
        </b-col>
      </b-row>
    </section>
    <section id="sectionC">
      <b-row no-gutters>
        <b-col>
          <div
            :style="{ display: 'grid', height: '100%', placeItems: 'center' }"
          >
            <p>über 97% verfügbar</p>
            <p>Persönlicher Support</p>
            <p>Individuell anpassbar</p>
            <b-button :to="{ name: 'Preise' }" variant="primary">
              <b-icon-arrow-right />
              Preise
            </b-button>
          </div>
        </b-col>
        <b-col cols="6">
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
  height: 90vh;

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
