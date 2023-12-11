import store from "@/store";
import ax from "./RequestService";

export default {
  create(username, email, password) {
    return ax.post("/auth/access/", { username, email, password }).then(response => {
      store.dispatch("updateMe")
      return response.data
    })

  },
  setEnabled(id, enabled) {
    return ax.patch("/auth/access/" + id, { enabled }).then(response => {
      store.dispatch("updateMe")
      return response.data
    })
  },
  delete(id) {
    return ax.delete("/auth/access/" + id).then(response => {
      store.dispatch("updateMe")
      return response.data
    })

  }
}