<template>
  <div id="kundeninformationen" data-view>
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Kundeninformationen"
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
          zusammengestellt haben, nochmal zum Download. Wenn du eine Information
          mal nicht finden solltest, schreib uns gerne eine Nachricht über
          <router-link
            :to="{ name: 'Kontakt' }"
            :style="{ textDecoration: 'underline' }"
          >
            unsere Kontaktseite </router-link
          >.
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
              v-for="{ filename, link, description } in kundeninformationen"
              :key="link"
              class="d-flex justify-content-between align-items-center"
            >
              <p class="m-0 mr-2 text-left">
                <b>
                  {{ filename }}
                </b>
                <br />
                <small class="text-muted">
                  {{ description }}
                </small>
              </p>
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
    meta: [
      {
        name: "description",
        content:
          "Hier findest du alle Kundeninformationen über Leto, deinen Terminplaner für Physiotherapiepraxen. Schnell. Sicher. Kostenlos.",
      },
    ],
  },
  data() {
    return {
      bbblurry,
      kundeninformationen: [
        {
          filename: "Kundeninformationen (Broschüre)",
          link: "2023-09-21 Kundeninformation.pdf",
          description:
            "Informationen für interessierte Kunden und persönliche Nachricht der Entwickler",
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
