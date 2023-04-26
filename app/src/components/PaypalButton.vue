<template>
  <div id="paypal-div"></div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
import Paypal from "@/services/PaymentService";
export default {
  name: "PaypalButton",
  mounted() {
    console.log(process.env.VUE_APP_PAYPAL_CLIENT_ID);
    if (process.env.VUE_APP_PAYPAL_CLIENT_ID) {
      loadScript({
        "client-id": process.env.VUE_APP_PAYPAL_CLIENT_ID,
        currency: "EUR",
      })
        .then((paypal) => {
          paypal
            .Buttons({
              fundingSource: "paypal",
              createOrder: Paypal.createOrder,
              onApprove: Paypal.onApprove,
            })
            .render("#paypal-div")
            .catch((error) => {
              console.error("failed to render the PayPal Buttons", error);
            });
        })
        .catch((error) => {
          console.error("failed to load the PayPal JS SDK script", error);
        });
    }
  },
};
</script>
