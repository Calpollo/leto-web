import ax from "./RequestService";

const Paypal = {
    // eslint-disable-next-line no-unused-vars
    createOrder(data, actions) {
        return ax.post("/payments/paypal/orders").then(response => {
            return response.data.id
        })
    },
    onApprove(data, actions) {
        return ax.post(`/payments/paypal/orders/${data.orderID}/capture`).then(response => {
            const details = response.data;
            const errorDetail = Array.isArray(details.details) && details.details[0]
            if (errorDetail && errorDetail.issue === "INSTRUMENT_DECLINED") {
                return actions.restart();
            }

            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you

            // This example reads a v2/checkout/orders capture response, propagated from the server
            // You could use a different API or structure for your 'orderData'

            // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/


            if (errorDetail) {
                let msg = "Sorry, your transaction could not be processed.";
                if (errorDetail.description) msg += "" + errorDetail.description;
                if (details.debug_id) msg += " (" + details.debug_id + ")";
                console.warn(msg)
                Promise.reject(msg)
            }

            return "Upgrade erfolgreich"
        }).catch(error => {
            console.warn(error)
            Promise.reject(error.response.data)
        })
    },
    createSubscription(data, actions) {
        return actions.subscription.create({
            plan_id: process.env.VUE_APP_PAYPAL_BASIS_PLANID
        })
    },
    onSubscriptionApprove(data, actions) {
        console.log("PaymentService.Paypal.onSubscriptionApprove")
        console.log(data)
        console.log(actions)
    }
}

const Stripe = {
    createSubscription() {
        return ax.post("/payments/stripe/orders").then(response => response.data)
    }
}

export { Paypal, Stripe }
