<template>
  <div id="paypal-div"></div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
import { Paypal } from "@/services/PaymentService";
export default {
  name: "PaypalButton",
  mounted() {
    if (process.env.VUE_APP_PAYPAL_CLIENT_ID) {
      loadScript({
        "client-id": process.env.VUE_APP_PAYPAL_CLIENT_ID,
        currency: "EUR",
        intent: "subscription",
        vault: true,
      })
        .then((paypal) => {
          paypal
            .Buttons({
              fundingSource: "paypal",
              createSubscription: Paypal.createSubscription,
              // createOrder: Paypal.createOrder,
              // onApprove: (data, actions) =>
              // Paypal.onApprove(data, actions)
              onApprove: (data, actions) =>
                Paypal.onSubscriptionApprove(data, actions)
                  .then((msg) => {
                    this.$store.commit("updateMe");
                    const toast = {
                      msg,
                      variant: "success",
                      title: "Kauf erfolgreich",
                    };
                    this.$router.push(
                      "/account?toast=" + JSON.stringify(toast)
                    );
                  })
                  .catch((msg) => {
                    const toast = {
                      msg,
                      variant: "danger",
                      title: "Kauf nicht erfolgreich",
                    };
                    console.log(toast);
                    this.$router.push(
                      "/account?toast=" + JSON.stringify(toast)
                    );
                  }),
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
