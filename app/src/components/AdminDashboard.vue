<template>
  <b-tabs justified class="mt-2">
    <b-tab title="Nutzer">
      <b-container class="my-2">
        <b-button v-b-toggle.collapse-1 variant="light" class="my-2">
          <b-icon-filter /> Filter
        </b-button>
        <b-collapse id="collapse-1" :style="{ textAlign: 'start' }">
          <b-row>
            <b-col>
              <b-form-group description="Benutzername">
                <b-form-input v-model="filterBenutzername" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group description="E-Mail-Adresse">
                <b-form-input v-model="filterEmail" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group description="Status" v-slot="{ ariaDescribedby }">
                <!-- TODO: move selection to a modal -->
                <b-form-checkbox-group
                  id="statusFilter-group-1"
                  v-model="filterStati"
                  :options="stati"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-1"
                ></b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-collapse>
      </b-container>
      <b-list-group :style="{ textAlign: 'start' }">
        <!-- TODO: password reset (with notification email) -->
        <b-list-group-item>
          <b-row>
            <b-col><b>Benutzername</b></b-col>
            <b-col><b>E-Mail</b></b-col>
            <b-col :style="{ textAlign: 'center' }"><b>Abo-Status</b></b-col>
            <b-col :style="{ textAlign: 'end' }"><b>Aktionen</b></b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item v-for="user in sortedUsers" :key="user.id">
          <b-row>
            <b-col cols="3">
              {{ user.username }}
            </b-col>
            <b-col cols="3">
              {{ user.email }}
            </b-col>
            <b-col cols="3" :style="{ textAlign: 'center' }">
              {{ user.RoleName }}
            </b-col>
            <b-col cols="3" :style="{ textAlign: 'end' }">
              <b-button-group>
                <b-button
                  variant="success"
                  v-if="user.RoleName != 'Admin'"
                  @click="upgradeUser(user.id)"
                >
                  <b-icon-chevron-double-up />
                </b-button>
                <b-button
                  variant="warning"
                  v-if="user.RoleName != 'Standard'"
                  @click="downgradeUser(user.id)"
                >
                  <b-icon-chevron-double-down />
                </b-button>
                <b-button @click="changeUserPassword(user.id)">
                  <b-icon-key />
                </b-button>
                <b-button variant="danger" @click="deleteUser(user.id)">
                  <b-icon-trash />
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-tab>
    <b-tab title="Kunden">
      <b-table
        :items="sortedKunden"
        :fields="[
          'name',
          'email',
          'telefon',
          'adresse',
          'ansprechpartner',
          'aktionen',
        ]"
      >
        <template #cell(adresse)="data">
          {{ data.item.address }}
        </template>
        <template #cell(telefon)="data">
          {{ data.item.phone }}
        </template>
        <template #cell(ansprechpartner)="data">
          {{ data.item.personName }}, {{ data.item.personEmail }},
          {{ data.item.personPhone }}
        </template>
        <template #cell(aktionen)="data">
          <b-dropdown no-caret variant="light" right>
            <template #button-content>
              <b-icon-three-dots />
            </template>
            <!-- TODO: Button onClicks -->
            <b-dropdown-item v-if="data.item.email">
              <b-icon-envelope /> Ansprechpartner mailen
            </b-dropdown-item>
            <b-dropdown-item v-if="data.item.personEmail">
              <b-icon-envelope /> Nachricht schreiben
            </b-dropdown-item>
            <b-dropdown-item variant="danger">
              <b-icon-trash /> Entfernen
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
      <b-button variant="primary" block v-b-toggle.newCustomerCollapse>
        <b-icon-plus />Neuer Kunde
      </b-button>
      <b-collapse id="newCustomerCollapse" class="my-2">
        <b-form :style="{ textAlign: 'start' }" @submit="createNewCustomer">
          <b-row>
            <b-col>
              <b-form-group label="Firma / Unternehmen:">
                <b-form-input
                  type="text"
                  placeholder="Praxisname"
                  v-model="newCustomerName"
                  required
                />
              </b-form-group>
              <b-form-group label="Allg. E-Mail:">
                <b-form-input
                  type="email"
                  placeholder="info@praxis.de"
                  v-model="newCustomerEmail"
                  required
                />
              </b-form-group>
              <b-form-group label="Allg. Telefonnummer:">
                <b-form-input type="tel" v-model="newCustomerTel" required />
              </b-form-group>
              <b-form-group label="Addresse:">
                <b-form-input
                  type="text"
                  v-model="newCustomerAddress"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Ansprechpartner/-in:">
                <b-form-input
                  type="text"
                  placeholder="Inge Inhaberin"
                  v-model="newCustomerPersonName"
                />
              </b-form-group>
              <b-form-group label="E-Mail Ansprechpartner/-in:">
                <b-form-input
                  type="email"
                  placeholder="inhaberin@praxis.de"
                  v-model="newCustomerPersonEmail"
                />
              </b-form-group>
              <b-form-group label="Telefonnummer Ansprechpartner/-in:">
                <b-form-input type="tel" v-model="newCustomerPersonTel" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row align-h="between" no-gutters>
            <b-button variant="outline-danger" v-b-toggle.newCustomerCollapse>
              Abbrechen
            </b-button>
            <b-button variant="success" type="submit">
              <b-icon-check />Bestätigen
            </b-button>
          </b-row>
        </b-form>
      </b-collapse>
    </b-tab>
    <b-tab title="Nachrichten">
      <b-card>
        <b-card-header>
          <b-button block variant="light" v-b-toggle.messageComposition>
            Verfassen
          </b-button>
        </b-card-header>
        <b-card-body>
          <b-collapse id="messageComposition" :style="{ textAlign: 'start' }">
            <b-form @submit="sendEmail">
              <b-form-group label="Empfänger:" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  required
                  id="messageRecipients-group-1"
                  v-model="messageRecipients"
                  :options="recipientOptions"
                  :aria-describedby="ariaDescribedby"
                  name="messageRecipients-1"
                ></b-form-checkbox-group>
              </b-form-group>
              <b-row>
                <b-col cols="auto">
                  <b-form-group label="Nachricht:" v-slot="{ ariaDescribedby }">
                    <b-form-radio-group
                      required
                      id="messageTemplates-group-1"
                      v-model="messageSelection"
                      :options="messageOptions"
                      :aria-describedby="ariaDescribedby"
                      name="messageTemplates"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-card>
                    <b-card-header>Betreff</b-card-header>
                    <b-card-text>
                      <div class="my-2" v-html="selectedEmailHtml"></div>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
              <b-button variant="success" type="submit"> Senden </b-button>
            </b-form>
          </b-collapse>
        </b-card-body>
      </b-card>
      <!-- TODO: add list of sent emails -->
    </b-tab>
  </b-tabs>
</template>

<script>
import UserService from "@/services/UserService";
import ContactService from "@/services/ContactService";

export default {
  name: "AdminDashboard",
  data() {
    return {
      users: [],
      filterBenutzername: null,
      filterEmail: null,
      filterStati: ["Admin", "Basis", "Standard"],
      stati: [
        { text: "Admin", value: "Admin" },
        { text: "Basis", value: "Basis" },
        { text: "Standard", value: "Standard" },
      ],
      kunden: [],
      newCustomerName: null,
      newCustomerEmail: null,
      newCustomerTel: null,
      newCustomerAddress: null,
      newCustomerPersonName: null,
      newCustomerPersonEmail: null,
      newCustomerPersonTel: null,
      messageRecipients: [],
      messageTemplates: [],
      messageSelection: null,
    };
  },
  mounted() {
    this.updateUsers();
    this.updateContacts();
    this.updateMessageTemplates();
  },
  methods: {
    updateUsers() {
      UserService.getAll().then((users) => (this.users = users));
    },
    updateContacts() {
      ContactService.getAll().then(
        (contactList) => (this.kunden = contactList)
      );
    },
    updateMessageTemplates() {
      ContactService.getMessageTemplates().then((messageTemplateList) => {
        this.messageTemplates = messageTemplateList;
      });
    },
    downgradeUser(id) {
      UserService.downgrade(id).then(() => {
        this.updateUsers();
        this.$bvToast.toast("Abo-Status erfolgreich herabgesetzt", {
          title: "Abo-Status geupdated",
          autoHideDelay: 5000,
          variant: "success",
          solid: true,
        });
      });
    },
    upgradeUser(id) {
      UserService.upgrade(id).then(() => {
        this.updateUsers();
        this.$bvToast.toast("Abo-Status erfolgreich hochgesetzt", {
          title: "Abo-Status geupdated",
          autoHideDelay: 5000,
          variant: "success",
          solid: true,
        });
      });
    },
    deleteUser(id) {
      // TODO: confirm before deletion
      UserService.deleteUser(id).then(() => {
        this.updateUsers();
        this.users = this.users.filter((u) => u.id != id);
        this.$bvToast.toast("Benutzer erfolgreich gelöscht", {
          title: "Nutzer gelöscht",
          autoHideDelay: 5000,
          variant: "warning",
          solid: true,
        });
      });
    },
    changeUserPassword(id) {
      this.selectedUserId = id;
      this.$bvModal.show("changePasswordModal");
    },
    createNewCustomer(event) {
      event.preventDefault();
      ContactService.create(
        this.newCustomerName,
        this.newCustomerEmail,
        this.newCustomerAddress,
        this.newCustomerTel,
        this.newCustomerPersonName,
        this.newCustomerPersonTel,
        this.newCustomerPersonEmail
      ).then(this.updateContacts);
    },
    sendEmail(event) {
      event.preventDefault();
      ContactService.sendEmail(
        this.messageSelection,
        this.messageRecipients
      ).then((response) => {
        this.$bvToast.toast(response, {
          title: "Erfolgreich",
          autoHideDelay: 5000,
          variant: "success",
          solid: true,
        });
        this.messageSelection = null;
        this.messageRecipients = [];
      });
    },
  },
  computed: {
    sortedUsers() {
      return [...this.users]
        .filter(
          (user) =>
            (!this.filterBenutzername ||
              user.username
                .toLowerCase()
                .indexOf(this.filterBenutzername.toLowerCase()) != -1) &&
            (!this.filterEmail ||
              user.email
                .toLowerCase()
                .indexOf(this.filterEmail.toLowerCase()) != -1) &&
            this.filterStati.includes(user.RoleName)
        )
        .sort((a, b) => {
          let comparison = 0;
          if (a.RoleName > b.RoleName) comparison = 1;
          if (a.RoleName < b.RoleName) comparison = -1;

          if (a.username > b.username) comparison += 0.1;
          if (a.username < b.username) comparison -= 0.1;
          return comparison;
        });
    },
    sortedKunden() {
      return [...this.kunden].sort((a, b) => {
        let comparison = 0;
        if (a.name > b.name) comparison = 1;
        if (a.name < b.name) comparison = -1;

        return comparison;
      });
    },
    recipientOptions() {
      return [...this.kunden].map((k) => {
        return {
          text: `${k.name} (${k.personName || "keine Ansprechperson"})`,
          value: k.id,
        };
      });
    },
    messageOptions() {
      return [...this.messageTemplates].map((m) => {
        return { text: m.file, value: m.file };
      });
    },
    selectedEmailHtml() {
      return this.messageTemplates.find((m) => m.file == this.messageSelection)
        ?.html;
    },
  },
};
</script>
