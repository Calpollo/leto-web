<template>
  <div id="StatusView" data-view>
    <iframe
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
  },
};
</script>
