<template>
  <b-button block @click="startSubscription" variant="success">
    Checkout
  </b-button>
</template>

<script>
import { Stripe } from "@/services/PaymentService";
export default {
  name: "StripeButton",
  methods: {
    startSubscription() {
      Stripe.createSubscription();
    },
  },
};
</script>
