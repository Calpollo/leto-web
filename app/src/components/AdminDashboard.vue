<template>
  <b-tabs justified class="mt-2">
    <b-tab title="Nutzer">
      <b-container class="my-2">
        <b-button
          v-b-toggle.collapse-1
          variant="outline-primary"
          class="my-2"
          block
        >
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
      <div :style="{ display: 'grid', placeItems: 'center' }">
        <b-pagination
          v-model="currentUserPage"
          :total-rows="sortedUsers.length"
          :per-page="tableEntriesPerPage"
          aria-controls="user-table"
          class="mx-auto"
        />
      </div>
      <b-table
        :items="sortedUsers"
        :fields="[
          { key: 'username', label: 'Benutzername', sortable: true },
          { key: 'email', label: 'E-Mail', sortable: true },
          { key: 'RoleName', label: 'Abo-Status', sortable: true },
          'aktionen',
        ]"
        :per-page="tableEntriesPerPage"
        :current-page="currentUserPage"
        smalled
        hover
        striped
      >
        <template #cell(email)="data">
          <a :href="'mailto:' + data.item.email">{{ data.item.email }}</a>
        </template>
        <template #cell(RoleName)="data">
          <span
            :style="{
              color: data.item.RoleName == 'Admin' ? '#6927d3' : 'black',
              fontWeight: data.item.RoleName == 'Standard' ? null : 'bold',
            }"
          >
            {{ data.item.RoleName }}
          </span>
        </template>
        <template #cell(aktionen)="data">
          <b-button-group>
            <b-button variant="light" :id="'userinfotooltip-' + data.item.id">
              <b-icon-info />
            </b-button>
            <b-dropdown no-caret variant="light" right>
              <template #button-content>
                <b-icon-three-dots />
              </template>
              <!-- TODO: password reset (with notification email) -->
              <b-dropdown-item
                variant="success"
                v-if="data.item.RoleName != 'Admin'"
                @click="upgradeUser(data.item.id)"
              >
                <b-icon-chevron-double-up />
                Upgrade
              </b-dropdown-item>
              <b-dropdown-item
                variant="warning"
                v-if="data.item.RoleName != 'Standard'"
                @click="downgradeUser(data.item.id)"
              >
                <b-icon-chevron-double-down />
                Downgrade
              </b-dropdown-item>
              <b-dropdown-item @click="changeUserPassword(data.item.id)">
                <b-icon-key />
                Passwort ändern
              </b-dropdown-item>
              <b-dropdown-item
                variant="danger"
                @click="deleteUser(data.item.id)"
              >
                <b-icon-trash />
                Löschen
              </b-dropdown-item>
            </b-dropdown>
          </b-button-group>
          <b-tooltip
            :target="'userinfotooltip-' + data.item.id"
            triggers="click"
            variant="light"
            placement="topleft"
          >
            <b-card :style="{ minWidth: '500px' }">
              <b-card-header>
                <b-row align-v="baseline">
                  <b-col>
                    <b>
                      {{ data.item.username }}
                    </b>
                  </b-col>
                  <b-col cols="auto">
                    <b-button @click="copyUserInfo(data.item)" variant="light">
                      <b-icon-files />
                    </b-button>
                  </b-col>
                </b-row>
              </b-card-header>
              <b-card-body>
                <b-table stacked :items="[data.item]"> </b-table>
              </b-card-body>
            </b-card>
          </b-tooltip>
        </template>
      </b-table>
      <div :style="{ display: 'grid', placeItems: 'center' }">
        <b-pagination
          v-model="currentUserPage"
          :total-rows="sortedUsers.length"
          :per-page="tableEntriesPerPage"
          aria-controls="user-table"
          class="mx-auto"
        />
      </div>
    </b-tab>
    <b-tab title="Kunden">
      <b-row class="my-2">
        <b-col>
          <b-button v-b-toggle.kundenFilter-1 variant="outline-primary" block>
            <b-icon-filter /> Filter
          </b-button>
        </b-col>
        <b-col cols="auto">
          <b-button
            variant="primary"
            v-b-toggle.newCustomerCollapse
            href="#newCustomerCollapse"
          >
            <b-icon-plus />
            Neuer Kontakt
          </b-button>
        </b-col>
        <b-col cols="auto">
          <b-dropdown variant="primary" right>
            <template #button-content>
              <b-icon-box-arrow-up-right />
            </template>
            <b-dropdown-item @click="copyKundenEmails">
              <b-icon-files /> E-Mails
            </b-dropdown-item>
            <b-dropdown-item @click="copyKundenJson">
              <b-icon-code-square /> Json
            </b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-collapse id="kundenFilter-1">
        <b-row align-v="baseline">
          <b-col>
            <b-form-group label="Name:">
              <b-form-input type="text" v-model="kundenFilterName" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="E-Mail:">
              <b-form-input type="email" v-model="kundenFilterEmail" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Telefon:">
              <b-form-input type="tel" v-model="kundenFilterTel" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Adresse:">
              <b-form-input type="text" v-model="kundenFilterAdresse" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Ansprechpartner:">
              <b-form-input type="text" v-model="kundenFilterAnsprechpartner" />
            </b-form-group>
          </b-col>
          <b-col cols="auto">
            <b-button @click="resetKundenFilter">
              <b-icon-x />
            </b-button>
          </b-col>
        </b-row>
      </b-collapse>
      <div :style="{ display: 'grid', placeItems: 'center' }">
        <b-pagination
          v-model="currentKundenPage"
          :total-rows="sortedKunden.length"
          :per-page="tableEntriesPerPage"
          aria-controls="kunden-table"
          class="mx-auto"
        />
      </div>
      <b-table
        :items="sortedKunden"
        :fields="[
          { key: 'name', sortable: true },
          { key: 'email', label: 'E-Mail', sortable: true },
          { key: 'telefon', sortable: true },
          'adresse',
          'ansprechpartner',
          'aktionen',
        ]"
        :per-page="tableEntriesPerPage"
        :current-page="currentKundenPage"
        smalled
        hover
        striped
      >
        <template #cell(email)="data">
          <a :href="'mailto:' + data.item.email">{{ data.item.email }}</a>
        </template>
        <template #cell(adresse)="data">
          {{ data.item.address }}
        </template>
        <template #cell(telefon)="data">
          <a :href="'tel:' + data.item.phone">{{ data.item.phone }}</a>
        </template>
        <template #cell(ansprechpartner)="data">
          <span v-if="data.item.personName">
            {{ data.item.personName }}
            <b-button-group size="sm">
              <b-button
                variant="light"
                v-b-tooltip.hover
                :title="data.item.personEmail"
                :href="'mailto:' + data.item.personEmail"
              >
                <b-icon-envelope />
              </b-button>
              <b-button
                variant="light"
                v-b-tooltip.hover
                :title="data.item.personPhone"
                :href="'tel:' + data.item.personPhone"
              >
                <b-icon-phone />
              </b-button>
            </b-button-group>
          </span>
          <em v-else>Kein Ansprechpartner</em>
        </template>
        <template #cell(aktionen)="data">
          <b-dropdown no-caret variant="light" right>
            <template #button-content>
              <b-icon-three-dots />
            </template>
            <b-dropdown-item
              v-if="data.item.personEmail"
              :href="'mailto:' + data.item.personEmail"
            >
              <b-icon-envelope /> Ansprechpartner mailen
            </b-dropdown-item>
            <b-dropdown-item
              v-if="data.item.email"
              :href="'mailto:' + data.item.email"
            >
              <b-icon-envelope /> E-Mail schreiben
            </b-dropdown-item>
            <b-dropdown-item
              variant="danger"
              @click="deleteCustomer(data.item.id)"
            >
              <b-icon-trash /> Entfernen
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
      <p v-if="sortedKunden.length == 0">
        Diese Liste ist nach dem Filtern leer.
        <b-button @click="resetKundenFilter">Filter zurücksetzen</b-button>
      </p>
      <div :style="{ display: 'grid', placeItems: 'center' }">
        <b-pagination
          v-model="currentKundenPage"
          :total-rows="sortedKunden.length"
          :per-page="tableEntriesPerPage"
          aria-controls="kunden-table"
          class="mx-auto"
        />
      </div>
      <b-collapse id="newCustomerCollapse" class="my-2">
        <hr />
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
              <b-form-group
                label="Allg. Telefonnummer:"
                :state="newCustomerTelValid"
                invalid-feedback="Keine Telefonnummer"
              >
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
              <b-form-group
                label="Telefonnummer Ansprechpartner/-in:"
                :state="newCustomerPersonTelValid"
                invalid-feedback="Keine Telefonnummer"
              >
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
      <b-button
        v-b-toggle.kundenFilter-2
        variant="outline-primary"
        class="my-2"
        block
      >
        <b-icon-filter /> Filter
      </b-button>
      <b-collapse id="kundenFilter-2">
        <b-row align-v="baseline">
          <b-col>
            <b-form-group label="Name:">
              <b-form-input type="text" v-model="kundenFilterName" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="E-Mail:">
              <b-form-input type="email" v-model="kundenFilterEmail" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Telefon:">
              <b-form-input type="tel" v-model="kundenFilterTel" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Adresse:">
              <b-form-input type="text" v-model="kundenFilterAdresse" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Ansprechpartner:">
              <b-form-input type="text" v-model="kundenFilterAnsprechpartner" />
            </b-form-group>
          </b-col>
          <b-col cols="auto">
            <b-button @click="resetKundenFilter">
              <b-icon-x />
            </b-button>
          </b-col>
        </b-row>
      </b-collapse>
      <b-card>
        <b-card-header> Verfassen </b-card-header>
        <b-card-body :style="{ textAlign: 'start' }">
          <b-form @submit="sendEmail">
            <b-form-group label="Empfänger:" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-if="recipientOptions.length > 0"
                required
                id="messageRecipients-group-1"
                v-model="messageRecipients"
                :options="recipientOptions"
                :aria-describedby="ariaDescribedby"
                name="messageRecipients-1"
              />
              <p v-else>
                Es stehen nach dem Filtern keine Empfänger zur Verfügung.
              </p>
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
                  <b-card-header>{{
                    messageSelection || "Betreff"
                  }}</b-card-header>
                  <b-card-text>
                    <div class="my-2" v-html="selectedEmailHtml"></div>
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
            <b-button variant="success" type="submit"> Senden </b-button>
          </b-form>
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
      tableEntriesPerPage: 15,
      currentKundenPage: 1,
      currentUserPage: 1,
      kundenFilterName: null,
      kundenFilterEmail: null,
      kundenFilterTel: null,
      kundenFilterAdresse: null,
      kundenFilterAnsprechpartner: null,
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
      phoneRegex: /[?:+]?[0-9]{1,}/i,
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
    deleteCustomer(id) {
      ContactService.deleteContact(id).then(this.updateContacts);
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
    resetKundenFilter() {
      this.kundenFilterName = null;
      this.kundenFilterAdresse = null;
      this.kundenFilterAnsprechpartner = null;
      this.kundenFilterEmail = null;
      this.kundenFilterTel = null;
    },
    copyKundenJson() {
      navigator.clipboard
        .writeText(JSON.stringify(this.sortedKunden, null, 2))
        .then(() => {
          alert("successfully copied");
        })
        .catch(() => {
          alert("something went wrong");
        });
    },
    copyKundenEmails() {
      navigator.clipboard
        .writeText(this.sortedKunden.map((k) => k.email).join(", "))
        .then(() => {
          alert("successfully copied");
        })
        .catch(() => {
          alert("something went wrong");
        });
    },
    copyUserInfo(userinfo) {
      console.log(userinfo);
      navigator.clipboard
        .writeText(JSON.stringify(userinfo, null, 2))
        .then(() => {
          alert("successfully copied");
        })
        .catch(() => {
          alert("something went wrong");
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
      return [...this.kunden]
        .filter((k) => {
          return (
            (!this.kundenFilterName ||
              k.name
                .toLowerCase()
                .includes(this.kundenFilterName.toLowerCase())) &&
            (!this.kundenFilterEmail ||
              k.email
                .toLowerCase()
                .includes(this.kundenFilterEmail.toLowerCase())) &&
            (!this.kundenFilterTel ||
              k.phone
                .toLowerCase()
                .includes(this.kundenFilterTel.toLowerCase())) &&
            (!this.kundenFilterAdresse ||
              k.address
                .toLowerCase()
                .includes(this.kundenFilterAdresse.toLowerCase())) &&
            (!this.kundenFilterAnsprechpartner ||
              k.personName
                .toLowerCase()
                .includes(this.kundenFilterAnsprechpartner.toLowerCase()))
          );
        })
        .sort((a, b) => {
          let comparison = 0;
          if (a.name > b.name) comparison = 1;
          if (a.name < b.name) comparison = -1;

          return comparison;
        });
    },
    recipientOptions() {
      return [...this.sortedKunden].map((k) => {
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
    newCustomerTelValid() {
      return this.newCustomerTel && this.phoneRegex.test(this.newCustomerTel);
    },
    newCustomerPersonTelValid() {
      return (
        this.newCustomerPersonTel &&
        this.phoneRegex.test(this.newCustomerPersonTel)
      );
    },
  },
};
</script>
