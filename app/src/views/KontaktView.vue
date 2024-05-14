<template>
  <div id="Kontakt" data-view>
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Kontakt"
    >
      <div class="px-4">
        <h1 data-aos="fade-up">Kontakt</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Es gibt <b>noch keine Möglichkeit</b>, über die Webseite direkten
          Kontakt aufzubauen. Kommt aber noch.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          Bis dahin kann steht die E-Mail-Adresse
          <b>
            <a
              variant="outline-primary"
              href="mailto:nicklaus.leto@gmail.com?subject=Ich mache den ersten Schritt"
            >
              nicklaus.leto@gmail.com
            </a>
          </b>
          für alle Kontaktaufnahmen zur Verfügung.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <b-button
            variant="primary"
            href="mailto:nicklaus.leto@gmail.com?subject=Ich mache den ersten Schritt"
          >
            Jetzt E-Mail senden
          </b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";

export default {
  name: "KontaktView",
  metaInfo: {
    title: "Kontakt",
    meta: [
      {
        name: "description",
        content:
          "Kontaktiere das Team hinter Leto. Wir beantworten dir alle deine Fragen und Nachrichten so schnell wie möglich.",
      },
    ],
  },
  data() {
    return {
      bbblurry,
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
</style>
