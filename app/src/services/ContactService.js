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
  saveContact(contact) {
    return ax.put(`/contact/${contact.id}`, contact).then(response => response.data)
      .catch(error => {
        console.warn(error);
        throw error
      })
  },
}