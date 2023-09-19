import ax from "./RequestService";

export default {
  getAll() {
    return ax.get("/contact/").then(response => response.data)
  },
  create(name,
    email,
    address,
    phone,
    personName,
    personPhone,
    personEmail,) {
    return ax.post("/contact", {
      name,
      email,
      address,
      phone,
      personName,
      personPhone,
      personEmail,
    }).then(response => response.data)
  },
  deleteContact(id) {
    return ax.delete("/contact/" + id).then(response => response.data)
  },
  getMessageTemplates() {
    return ax.get("/email/").then(response => response.data)
  },
  sendEmail(emailidentifier, contactIdList) {
    return ax.post("/email/" + emailidentifier, { contactIdList }).then(response => response.data)
  }
}