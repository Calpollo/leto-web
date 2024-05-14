<template>
  <div id="Downloads" data-view>
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Downloadbereich"
    >
      <div class="d-flex flex-row-reverse pr-3 pt-2" :style="{ width: '100%' }">
        <div>
          <p
            class="h1"
            :style="{
              textAlign: 'right',
              marginRight:
                this.$vuetify.breakpoint.width < 768
                  ? '10px'
                  : $store.state.loggedIn
                  ? '140px'
                  : '100px',
            }"
          >
            <b-icon-arrow-up animation="cylon-vertical" />
          </p>
          <p :style="{ fontSize: '.9rem' }">
            Jetzt die <b>Web-Version</b> ausprobieren!
          </p>
        </div>
      </div>
      <div :style="{ padding: '30px' }">
        <h1 data-aos="fade-up">Download</h1>
        <p data-aos="fade-up">
          Finde den Download, der zu deinem System passt.
        </p>
      </div>
      <b-row
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        :style="{ width: '100%' }"
        align-h="center"
      >
        <b-col cols="11" md="7">
          <b-list-group>
            <b-list-group-item
              v-for="({ version, type, ghRef, instable }, index) in downloads"
              :key="version"
              class="d-flex justify-content-between align-items-center"
            >
              <span>
                Leto Version {{ version }}
                <b-badge v-if="type">{{ type }}</b-badge>
                <b-badge
                  v-if="instable == true"
                  variant="danger"
                  class="ml-2"
                  v-b-tooltip.hover
                  title="Diese Version ist nicht mehr aktuell und einige Funktionen funktionieren möglichweise nicht mehr. Nutze stattdessen eine neuere Version oder die Online-Version von Leto."
                >
                  <b-icon-exclamation-triangle />
                  nicht stabil
                </b-badge>
              </span>
              <b-button
                :href="ghRef"
                :variant="index == 0 ? 'primary' : 'outline-secondary'"
              >
                <b-icon-download class="mr-2" />
                Download
              </b-button>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </section>
    <section role="region" id="anleitungen">
      <b-list-group style="text-align: left">
        <b-list-group-item class="flex-column align-items-start">
          <h5 class="mb-1">Welche Version soll ich installieren?</h5>

          <p class="mb-1">
            Unabhängig von deinem Gerät und Betriebssystem kannst du über die
            obige Downloadliste eine Version aussuchen und das zu deinem Gerät
            passenden Programm herunterladen.
          </p>

          <p class="mb-1">
            Hinweis: Wenn du alte Versionen downloadest, kann es zu funktionalen
            Problemen kommen. Wir empfehlen deshalb, nur die neueste Version zu
            nutzen.
          </p>
        </b-list-group-item>
        <b-list-group-item class="flex-column align-items-start">
          <h5 class="mb-1">Installationsanleitung</h5>

          <ol style="margin-left: 16px">
            <li>
              Suche eine Version aus der obigen Downloadliste aus. (Empfehlung:
              Wähle die neueste Version)
            </li>
            <li>
              Lade von der Downloadseite die zu deinem Betriebssystem passende
              Anwendung runter.
            </li>
            <li>Führe die runtergeladene Anwendung auf deinem Gerät aus.</li>
            <li>Leto ist jetzt auf deinem Gerät installiert. Viel Spaß!</li>
          </ol>
        </b-list-group-item>
        <b-list-group-item class="flex-column align-items-start">
          <h5 class="mb-1">Ich habe noch Fragen</h5>

          <p>Unsere Hilfeseite beantwortet viele häufig gestellte Fragen:</p>
          <b-button :to="{ name: 'Hilfe' }" variant="primary">
            Zur Hilfeseite
          </b-button>
          <p>
            Über unsere Kontaktseite kannst du uns deine Fragen direkt stellen:
          </p>
          <b-button :to="{ name: 'Kontakt' }" variant="primary">
            Zur Kontaktseite
          </b-button>
        </b-list-group-item>
      </b-list-group>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";

export default {
  name: "DownloadView",
  metaInfo: {
    title: "Download",
    meta: [
      {
        name: "description",
        content:
          "Downloade Leto, deinen Terminplaner für Physiotherapiepraxen. Erhältlich für alle modernen Geräte unter Windows, macOS und Linux. Schnell. Sicher. Kostenlos.",
      },
    ],
  },
  data() {
    return {
      bbblurry,
      downloads: [
        {
          version: "v0.1.4-alpha",
          type: "alpha",
          ghRef:
            "https://github.com/Calpollo/Leto/releases/download/alpha-v0.1.4/leto.Setup.0.1.4.exe",
          instable: true,
        },
        {
          version: "v0.1.3-alpha",
          type: "alpha",
          ghRef:
            "https://github.com/Calpollo/Leto/releases/download/alpha-v0.1.3/leto.Setup.0.1.3.exe",
          instable: true,
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
    display: flex;
    // place-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10vh;
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

#anleitungen {
  display: grid;
  place-items: center;

  padding: 32px 64px;

  & p {
    margin: 16px 0 8px;
  }
}
</style>
