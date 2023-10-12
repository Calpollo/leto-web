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
        <h1 data-aos="fade-up" class="text-break">
          Kunden&shy;informa&shy;tionen
        </h1>
        <p data-aos="fade-up">
          Hier findest du all das Info-Material, das wir für dich
          zusammengestellt haben, nochmal zum Download
        </p>
      </div>
      <b-row
        :style="{ width: '100%' }"
        align-h="center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <b-col cols="11" md="7">
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
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";

export default {
  name: "KundenInformationen",
  metaInfo: {
    title: "Kundeninformationen",
  },
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
