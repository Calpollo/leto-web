<template>
  <div id="StatusView" data-view class="py-2">
    <h1>Status unserer Services</h1>
    <iframe
      title="Statusseite der Leto-Service"
      src="https://leto.betteruptime.com"
      width="100%"
      :style="{ minHeight: '90vh' }"
      frameborder="none"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "StatusView",
  metaInfo: {
    title: "Service Status",
    meta: [
      {
        name: "description",
        content:
          "Alle Leto-Services sind online! Leto ist dein Terminplaner für Physiotherapiepraxen. Schnell. Sicher. Kostenlos.",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
h1 {
  display: none;
}
</style>
