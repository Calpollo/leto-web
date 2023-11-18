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
      <div class="d-none d-lg-flex">
        <!-- spacer -->
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
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";

export default {
  name: "DownloadView",
  metaInfo: {
    title: "Download",
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
