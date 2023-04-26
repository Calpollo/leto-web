<template>
  <div id="paypal-div"></div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
export default {
  name: "PaypalButton",
  methods: {
    // eslint-disable-next-line no-unused-vars
    async createOrder(data, actions) {
      // TODO: outsource to service and axios (.json() will be .data)
      const response = await fetch(
        "http://localhost:8080/payments/paypal/orders",
        {
          method: "POST",
        }
      );
      const details = await response.json();
      return details.id;
    },
    async onApprove(data, actions) {
      // TODO: outsource to service and axios (.json() will be .data)
      const response = await fetch(
        `http://localhost:8080/payments/paypal/orders/${data.orderID}/capture`,
        {
          method: "POST",
        }
      );
      const details = await response.json();
      // Three cases to handle:
      //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      //   (2) Other non-recoverable errors -> Show a failure message
      //   (3) Successful transaction -> Show confirmation or thank you

      // This example reads a v2/checkout/orders capture response, propagated from the server
      // You could use a different API or structure for your 'orderData'

      const errorDetail = Array.isArray(details.details) && details.details[0];
      if (errorDetail && errorDetail.issue === "INSTRUMENT_DECLINED") {
        return actions.restart(); // Recoverable state, per:
        // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
      }

      if (errorDetail) {
        let msg = "Sorry, your transaction could not be processed.";
        if (errorDetail.description) msg += "" + errorDetail.description;
        if (details.debug_id) msg += " (" + details.debug_id + ")";
        // TODO: change from alert to failure page
        return alert(msg); // Show a failure message (try to avoid alerts in production environments)
      }

      // Successful capture! For demo purposes:
      // TODO: get relevant information from details
      console.log("Capture result", details, JSON.stringify(details, null, 2));
      const transaction = details.purchase_units[0].payments.captures[0];
      alert(
        "Transaction " +
          transaction.status +
          ": " +
          transaction.id +
          "See console for all available details"
      );
    },
  },
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

              // eslint-disable-next-line no-unused-vars
              createOrder: this.createOrder,
              onApprove: this.onApprove,
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
