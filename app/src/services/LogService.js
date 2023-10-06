import ax from "./RequestService";

export default {
  getLogs() {
    return ax.get("/admin/log/").then(response => response.data)
  },
}