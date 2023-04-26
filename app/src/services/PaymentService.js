import axios from "axios";

const ax = axios.create({
    baseURL:
        process.env.NODE_ENV == "production"
            ? "https://leto.andreasnicklaus.de/api/"
            : "http://localhost:8080/",
});

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
                // TODO: route to error page
                return alert(msg);
            }

            console.log("Capture result", details, JSON.stringify(details, null, 2));
            const transaction = details.purchase_units[0].payments.captures[0];
            // TODO: route to success page
            // TODO: save information on the backend
            alert(
                "Transaction " +
                transaction.status +
                ": " +
                transaction.id +
                "See console for all available details"
            );
        })
    }
}

export { Paypal }
export default Paypal
