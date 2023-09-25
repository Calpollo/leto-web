<template>
  <div id="kundeninformationen">
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
        <h1 data-aos="fade-up">kundeninformationen</h1>
        <p data-aos="fade-up">
          Hier findest du all das Info-Material, das wir für dich
          zusammengestellt haben, nochmal zum Download
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        :style="{ width: '500px', maxWidth: '90%' }"
      >
        <b-list-group>
          <b-list-group-item
            v-for="{ filename, link } in kundeninformationen"
            :key="link"
            class="d-flex justify-content-between align-items-center"
          >
            <span>
              {{ filename }}
            </span>
            <b-button :href="link" target="_blank">
              <b-icon-download />
            </b-button>
          </b-list-group-item>
        </b-list-group>
      </div>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";

export default {
  data() {
    return {
      bbblurry,
      kundeninformationen: [
        {
          filename: "Kundeninformationen (Broschüre)",
          link: "2023-09-21 Kundeninformation.pdf",
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
</style>
