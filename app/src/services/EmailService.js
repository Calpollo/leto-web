import ax from "./RequestService";

export default {
  getMessageTemplates() {
    return ax.get("/admin/email/").then(response => response.data)
  },
  sendEmail(emailidentifier, contactIdList) {
    return ax.post("/admin/email/" + emailidentifier, { contactIdList }).then(response => response.data)
  }
}