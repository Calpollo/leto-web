<template>
  <div id="Checkout" :style="{ display: 'grid', placeItems: 'center' }">
    <b-card title="Abonnement kaufen">
      <b-row>
        <b-col :style="{ textAlign: 'start' }"> Leto Basis (Abonnement) </b-col>
        <b-col :style="{ textAlign: 'end' }"> 15,00€ / Monat </b-col>
      </b-row>
      <PaypalButton />
      <StripeButton />
    </b-card>
  </div>
</template>

<script>
import PaypalButton from "@/components/PaypalButton.vue";
import StripeButton from "@/components/StripeButton.vue";
export default {
  name: "CheckoutView",
  metaInfo: {
    title: "Checkout",
  },
  components: { PaypalButton, StripeButton },
};
</script>
