<template>
  <div id="Checkout" :style="{ display: 'grid', placeItems: 'center' }">
    <b-card title="Abonnement kaufen">
      <b-row>
        <b-col :style="{ textAlign: 'start' }"> Leto Basis (Abonnement) </b-col>
        <b-col :style="{ textAlign: 'end' }"> 15,00€ / Monat </b-col>
      </b-row>
      <PaypalButton />
    </b-card>
  </div>
</template>

<script>
import PaypalButton from "@/components/PaypalButton.vue";
export default {
  name: "CheckoutView",
  components: { PaypalButton },
};
</script>
