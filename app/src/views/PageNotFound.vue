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
        <h1 :style="{ fontSize: '7em', fontWeight: 700 }" data-aos="fade-up">
          Ups!
        </h1>
        <p class="mt-2" data-aos="fade-up" data-aos-delay="100">
          <b>Diese Seite gibt es nicht!</b>
        </p>
        <p class="mb-1" data-aos="fade-up" data-aos-delay="200">
          Du wirst in {{ secondsToRedirect }} Sekunden zur Startseite
          weitergeleitet...
        </p>
        <b-progress
          class="my-3"
          :value="secondsLeft"
          :max="secondsToRedirect"
          show-value
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor-placement="bottom"
        >
          <b-button :to="{ name: 'Home' }" variant="primary">
            Zur Startseite
          </b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";

const RedirectSeconds = 7;

export default {
  name: "PageNotFound",
  metaInfo: {
    title: "404",
  },
  data() {
    return {
      bbblurry,
      secondsToRedirect: RedirectSeconds,
      secondsLeft: RedirectSeconds,
      interval: null,
      notfoundURL: this.$route.path,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.secondsLeft > 1) this.secondsLeft -= 1;
      else {
        clearInterval(this.interval);
        if (this.$route.path == this.notfoundURL)
          this.$router.push({ name: "Home" });
      }
    }, 1000);
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
    color: $primary;
  }
}
</style>
