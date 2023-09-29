<template>
  <b-container>
    <b-tabs justified class="m-2">
      <b-tab title="Nutzer">
        <b-row class="my-2">
          <b-col>
            <b-button
              v-b-toggle.userFilterCollapse
              variant="outline-primary"
              block
            >
              <b-icon-filter /> Filter
            </b-button>
          </b-col>
          <b-col cols="auto">
            <b-button
              variant="primary"
              v-b-toggle.newUserCollapse
              href="#newUserCollapse"
            >
              <b-icon-plus />
              Neuer Nutzer
            </b-button>
          </b-col>
        </b-row>
        <b-collapse id="userFilterCollapse" :style="{ textAlign: 'start' }">
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
            <b-col cols="auto">
              <b-form-checkbox v-model="filterShowDeleted"
                >Gelöschte Nutzer anzeigen
              </b-form-checkbox>
            </b-col>
          </b-row>
        </b-collapse>
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
          responsive
        >
          <template #cell(username)="data">
            {{ data.item.username }}
            <b-icon-trash-fill
              v-b-tooltip.hover
              title="Benutzer wurde gelöscht"
              v-if="data.item.deletedAt"
            />
          </template>
          <template #cell(email)="data">
            <a :href="'mailto:' + data.item.email">{{ data.item.email }}</a>
          </template>
          <template #cell(RoleName)="data">
            <span
              :style="{
                color:
                  !data.item.deletedAt && data.item.RoleName == 'Admin'
                    ? '#6927d3'
                    : 'black',
                fontWeight:
                  data.item.deletedAt || data.item.RoleName == 'Standard'
                    ? null
                    : 'bold',
                fontStyle: data.item.deletedAt ? 'italic' : null,
              }"
            >
              {{ data.item.RoleName }}
              <span v-if="data.item.deletedAt">(gelöscht)</span>
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
                  :disabled="data.item.deletedAt != null"
                >
                  <b-icon-chevron-double-up />
                  Upgrade
                </b-dropdown-item>
                <b-dropdown-item
                  variant="warning"
                  v-if="data.item.RoleName != 'Standard'"
                  @click="downgradeUser(data.item.id)"
                  :disabled="data.item.deletedAt != null"
                >
                  <b-icon-chevron-double-down />
                  Downgrade
                </b-dropdown-item>
                <b-dropdown-item
                  @click="changeUserPassword(data.item.id)"
                  :disabled="data.item.deletedAt != null"
                >
                  <b-icon-key />
                  Passwort ändern
                </b-dropdown-item>
                <b-dropdown-item
                  variant="danger"
                  @click="deleteUser(data.item.id)"
                  :disabled="data.item.deletedAt != null"
                >
                  <b-icon-trash />
                  Löschen
                </b-dropdown-item>
                <b-dropdown-item
                  variant="danger"
                  @click="restoreUser(data.item.id)"
                  v-if="data.item.deletedAt != null"
                >
                  <b-icon-arrow-counterclockwise />
                  Nutzer wiederherstellen
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
                      <b-button
                        @click="copyUserInfo(data.item)"
                        variant="light"
                      >
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
        <b-collapse id="newUserCollapse" class="my-2">
          <hr />
          <b-form :style="{ textAlign: 'start' }" @submit="createNewUser">
            <b-form-group label="Benutzername:">
              <b-form-input
                type="text"
                placeholder="Benutzername"
                v-model="newUserUsername"
                required
              />
            </b-form-group>
            <b-form-group label="E-Mail:">
              <b-form-input
                type="email"
                placeholder="info@praxis.de"
                v-model="newUserEmail"
                required
              />
            </b-form-group>
            <b-form-group label="Password:">
              <b-form-input
                type="password"
                v-model="newUserPassword"
                required
              />
            </b-form-group>
            <b-form-group label="Status:" v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                required
                id="newUserStatus-group-1"
                v-model="newUserStatus"
                :options="[
                  { text: 'Standard', value: 'Standard' },
                  { text: 'Basis', value: 'Basis' },
                  { text: 'Admin', value: 'Admin' },
                ]"
                :aria-describedby="ariaDescribedby"
              />
            </b-form-group>
            <b-row align-h="between" no-gutters>
              <b-button variant="outline-danger" v-b-toggle.newUserCollapse>
                Abbrechen
              </b-button>
              <b-button variant="success" type="submit">
                <b-icon-check />Bestätigen
              </b-button>
            </b-row>
          </b-form>
        </b-collapse>
      </b-tab>
      <b-tab title="Kontakte">
        <b-row class="my-2">
          <b-col>
            <b-button
              v-b-toggle.contactFilterCollapse
              variant="outline-primary"
              block
            >
              <b-icon-filter /> Filter
            </b-button>
          </b-col>
          <b-col cols="auto">
            <b-button
              variant="primary"
              v-b-toggle.newContactCollapse
              href="#newContactCollapse"
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
              <b-dropdown-item @click="copyContactEmails">
                <b-icon-files /> E-Mails
              </b-dropdown-item>
              <b-dropdown-item @click="copyContactJson">
                <b-icon-code-square /> Json
              </b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <b-collapse id="contactFilterCollapse">
          <b-row align-v="baseline">
            <b-col>
              <b-form-group label="Name:">
                <b-form-input type="text" v-model="contactFilterName" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="E-Mail:">
                <b-form-input type="email" v-model="contactFilterEmail" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Telefon:">
                <b-form-input type="tel" v-model="contactFilterTel" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Adresse:">
                <b-form-input type="text" v-model="contactFilterAdresse" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Ansprechpartner:">
                <b-form-input
                  type="text"
                  v-model="contactFilterAnsprechpartner"
                />
              </b-form-group>
            </b-col>
            <b-col cols="auto">
              <b-button @click="resetContactFilter">
                <b-icon-x />
              </b-button>
            </b-col>
          </b-row>
        </b-collapse>
        <div :style="{ display: 'grid', placeItems: 'center' }">
          <b-pagination
            v-model="currentContactPage"
            :total-rows="sortedContacts.length"
            :per-page="tableEntriesPerPage"
            aria-controls="contact-table"
            class="mx-auto"
          />
        </div>
        <b-table
          :items="sortedContacts"
          :fields="[
            { key: 'name', sortable: true },
            { key: 'email', label: 'E-Mail', sortable: true },
            { key: 'telefon', sortable: true },
            'adresse',
            'ansprechpartner',
            'aktionen',
          ]"
          :per-page="tableEntriesPerPage"
          :current-page="currentContactPage"
          smalled
          hover
          striped
          responsive
        >
          <template #cell(name)="data">
            <span v-if="contactEditIndex != data.index">
              {{ data.item.name }}
            </span>
            <b-form-input
              v-else
              v-model="data.item.name"
              placeholder="Name der Praxis"
            />
          </template>
          <template #cell(email)="data">
            <a
              :href="'mailto:' + data.item.email"
              v-if="contactEditIndex != data.index"
            >
              {{ data.item.email }}
            </a>
            <b-form-input
              v-else
              v-model="data.item.email"
              type="email"
              placeholder="Allg. E-Mail"
            />
          </template>
          <template #cell(adresse)="data">
            <span v-if="contactEditIndex != data.index">
              {{ data.item.address }}
            </span>
            <b-form-input
              v-else
              v-model="data.item.address"
              placeholder="Anschrift"
            />
          </template>
          <template #cell(telefon)="data">
            <a
              :href="'tel:' + data.item.phone"
              v-if="contactEditIndex != data.index"
            >
              {{ data.item.phone }}
            </a>
            <b-form-input
              v-else
              v-model="data.item.phone"
              type="tel"
              placeholder="Telefonnummer"
            />
          </template>
          <template #cell(ansprechpartner)="data">
            <span v-if="contactEditIndex != data.index">
              <span v-if="data.item.personName">
                {{ data.item.personName }}
                <b-button-group size="sm">
                  <b-button
                    variant="light"
                    v-b-tooltip.hover
                    :title="data.item.personEmail"
                    :href="'mailto:' + data.item.personEmail"
                    :disabled="!data.item.personEmail"
                  >
                    <b-icon-envelope />
                  </b-button>
                  <b-button
                    variant="light"
                    v-b-tooltip.hover
                    :title="data.item.personPhone"
                    :href="'tel:' + data.item.personPhone"
                    :disabled="!data.item.personPhone"
                  >
                    <b-icon-phone />
                  </b-button>
                </b-button-group>
              </span>
              <em v-else>Kein Ansprechpartner</em>
            </span>
            <b-form-group v-else>
              <b-form-input
                v-model="data.item.personName"
                placeholder="Ansprechpartner"
              />
              <b-form-input
                v-model="data.item.personEmail"
                type="email"
                placeholder="E-Mail Ansprechpartner"
              />
              <b-form-input
                v-model="data.item.personPhone"
                type="tel"
                placeholder="Telefonnummer Ansprechpartner"
              />
            </b-form-group>
          </template>
          <template #cell(aktionen)="data">
            <b-button-group>
              <b-button
                v-if="contactEditIndex != data.index"
                @click="contactEditIndex = data.index"
                variant="light"
              >
                <b-icon-pen />
              </b-button>
              <b-button
                v-if="contactEditIndex == data.index"
                @click="
                  saveContact(data.item);
                  contactEditIndex = null;
                "
                variant="success"
              >
                <b-icon-check />
              </b-button>
              <b-button
                v-if="contactEditIndex == data.index"
                @click="
                  updateContacts();
                  contactEditIndex = null;
                "
                variant="danger"
              >
                <b-icon-x />
              </b-button>

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
                  @click="deleteContact(data.item.id)"
                >
                  <b-icon-trash /> Entfernen
                </b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </template>
        </b-table>
        <p v-if="sortedContacts.length == 0">
          Diese Liste ist nach dem Filtern leer.
          <b-button @click="resetContactFilter">Filter zurücksetzen</b-button>
        </p>
        <div :style="{ display: 'grid', placeItems: 'center' }">
          <b-pagination
            v-model="currentContactPage"
            :total-rows="sortedContacts.length"
            :per-page="tableEntriesPerPage"
            aria-controls="contact-table"
            class="mx-auto"
          />
        </div>
        <b-collapse id="newContactCollapse" class="my-2">
          <hr />
          <b-form :style="{ textAlign: 'start' }" @submit="createNewContact">
            <b-row>
              <b-col>
                <b-form-group label="Firma / Unternehmen:">
                  <b-form-input
                    type="text"
                    placeholder="Praxisname"
                    v-model="newContactName"
                    required
                  />
                </b-form-group>
                <b-form-group label="Addresse:">
                  <b-form-input
                    type="text"
                    v-model="newContactAddress"
                    required
                  />
                </b-form-group>
                <b-form-group
                  label="Allg. Telefonnummer:"
                  :state="newContactTelValid"
                  invalid-feedback="Keine Telefonnummer"
                >
                  <b-form-input type="tel" v-model="newContactTel" required />
                </b-form-group>
                <b-form-group label="Allg. E-Mail:">
                  <b-form-input
                    type="email"
                    placeholder="info@praxis.de"
                    v-model="newContactEmail"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Ansprechpartner/-in:">
                  <b-form-input
                    type="text"
                    placeholder="Inge Inhaberin"
                    v-model="newContactPersonName"
                  />
                </b-form-group>
                <b-form-group
                  label="Telefonnummer Ansprechpartner/-in:"
                  :state="newContactPersonTelValid"
                  invalid-feedback="Keine Telefonnummer"
                >
                  <b-form-input type="tel" v-model="newContactPersonTel" />
                </b-form-group>
                <b-form-group label="E-Mail Ansprechpartner/-in:">
                  <b-form-input
                    type="email"
                    placeholder="inhaberin@praxis.de"
                    v-model="newContactPersonEmail"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row align-h="between" no-gutters>
              <b-button variant="outline-danger" v-b-toggle.newContactCollapse>
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
          v-b-toggle.contactFilter-2
          variant="outline-primary"
          class="my-2"
          block
        >
          <b-icon-filter /> Filter
        </b-button>
        <b-collapse id="contactFilter-2">
          <b-row align-v="baseline">
            <b-col>
              <b-form-group label="Name:">
                <b-form-input type="text" v-model="contactFilterName" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="E-Mail:">
                <b-form-input type="email" v-model="contactFilterEmail" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Telefon:">
                <b-form-input type="tel" v-model="contactFilterTel" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Adresse:">
                <b-form-input type="text" v-model="contactFilterAdresse" />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Ansprechpartner:">
                <b-form-input
                  type="text"
                  v-model="contactFilterAnsprechpartner"
                />
              </b-form-group>
            </b-col>
            <b-col cols="auto">
              <b-button @click="resetContactFilter">
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
  </b-container>
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
      filterShowDeleted: false,
      stati: [
        { text: "Admin", value: "Admin" },
        { text: "Basis", value: "Basis" },
        { text: "Standard", value: "Standard" },
      ],
      contacts: [],
      tableEntriesPerPage: 15,
      currentContactPage: 1,
      currentUserPage: 1,
      contactFilterName: null,
      contactFilterEmail: null,
      contactFilterTel: null,
      contactFilterAdresse: null,
      contactFilterAnsprechpartner: null,
      newUserUsername: null,
      newUserEmail: null,
      newUserPassword: null,
      newUserStatus: "Standard",
      newContactName: null,
      newContactEmail: null,
      newContactTel: null,
      newContactAddress: null,
      newContactPersonName: null,
      newContactPersonEmail: null,
      newContactPersonTel: null,
      messageRecipients: [],
      messageTemplates: [],
      messageSelection: null,
      phoneRegex: /[?:+]?[0-9]{1,}/i,
      contactEditIndex: null,
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
        (contactList) => (this.contacts = contactList)
      );
    },
    updateMessageTemplates() {
      ContactService.getMessageTemplates().then((messageTemplateList) => {
        this.messageTemplates = messageTemplateList;
      });
    },
    toast(msg, title, variant = "success") {
      this.$bvToast.toast(msg, {
        title,
        autoHideDelay: 5000,
        variant,
        solid: true,
      });
    },
    downgradeUser(id) {
      UserService.downgrade(id).then(() => {
        this.updateUsers();
        this.toast(
          "Abo-Status erfolgreich herabgesetzt",
          "Abo-Status geupdated"
        );
      });
    },
    upgradeUser(id) {
      UserService.upgrade(id).then(() => {
        this.updateUsers();
        this.toast(
          "Abo-Status erfolgreich hochgesetzt",
          "Abo-Status geupdated"
        );
      });
    },
    deleteUser(id) {
      UserService.deleteUser(id).then(() => {
        this.updateUsers();
        this.toast(
          "Benutzer erfolgreich gelöscht",
          "Nutzer gelöscht",
          "warning"
        );
      });
    },
    restoreUser(id) {
      UserService.restoreUser(id).then(() => {
        this.updateUsers();
        this.toast(
          "Benutzer erfolgreich wiederhergestellt",
          "Nutzer wiederhergestellt"
        );
      });
    },
    changeUserPassword(id) {
      this.selectedUserId = id;
      this.$bvModal.show("changePasswordModal");
    },
    createNewContact(event) {
      event.preventDefault();
      ContactService.create(
        this.newContactName,
        this.newContactEmail,
        this.newContactAddress,
        this.newContactTel,
        this.newContactPersonName,
        this.newContactPersonTel,
        this.newContactPersonEmail
      ).then(() => {
        this.toast(
          `Kontakt ${this.newContactName} wurde erfolgreich erstellt`,
          "Neuer Kontakt erstellt"
        );
        this.updateContacts();
        this.newContactName = null;
        this.newContactEmail = null;
        this.newContactAddress = null;
        this.newContactTel = null;
        this.newContactPersonName = null;
        this.newContactPersonTel = null;
        this.newContactPersonEmail = null;
      });
    },
    createNewUser(event) {
      event.preventDefault();
      UserService.createNew(
        this.newUserUsername,
        this.newUserEmail,
        this.newUserPassword,
        this.newUserStatus
      ).then(() => {
        this.toast(
          `Benutzerkonto ${this.newUserUsername} wurde erfolgreich erstellt`,
          "Neues Benutzerkonto erstellt"
        );
        this.updateUsers();
        this.newUserUsername = null;
        this.newUserEmail = null;
        this.newUserPassword = null;
        this.newUserStatus = "Standard";
      });
    },
    deleteContact(id) {
      ContactService.deleteContact(id).then(() => {
        this.updateContacts();
        this.toast(
          `Kontakt (ID: ${id}) wurde erfolgreich gelöscht`,
          "Kontakt gelöscht",
          "warning"
        );
      });
    },
    saveContact(contact) {
      ContactService.saveContact(contact)
        .then(() => {
          this.updateContacts();
          this.toast(
            `Kontakt ${contact.name} wurde erfolgreich gespeichert`,
            "Kontakt gespeichert"
          );
        })
        .catch((error) => {
          this.updateContacts();

          this.toast(
            error?.response.data.errors.map((e) => e.message).join(". ") ||
              "Ein unbekannter Serverfehler ist aufgetreten",
            error?.response.data.name || "Error",
            "danger"
          );
        });
    },
    sendEmail(event) {
      event.preventDefault();
      ContactService.sendEmail(
        this.messageSelection,
        this.messageRecipients
      ).then((response) => {
        this.toast(response, "Erfolgreich");
        this.messageSelection = null;
        this.messageRecipients = [];
      });
    },
    resetContactFilter() {
      this.contactFilterName = null;
      this.contactFilterAdresse = null;
      this.contactFilterAnsprechpartner = null;
      this.contactFilterEmail = null;
      this.contactFilterTel = null;
    },
    copyContactJson() {
      navigator.clipboard
        .writeText(JSON.stringify(this.sortedContacts, null, 2))
        .then(() => {
          alert("Successfully copied contacts as JSON");
        })
        .catch(() => {
          alert("Something went wrong");
        });
    },
    copyContactEmails() {
      navigator.clipboard
        .writeText(this.sortedContacts.map((k) => k.email).join(", "))
        .then(() => {
          alert("Successfully copied contacts' emails as string");
        })
        .catch(() => {
          alert("Something went wrong");
        });
    },
    copyUserInfo(userinfo) {
      navigator.clipboard
        .writeText(JSON.stringify(userinfo, null, 2))
        .then(() => {
          alert("Successfully copied user infoas JSON");
        })
        .catch(() => {
          alert("Something went wrong");
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
            this.filterStati.includes(user.RoleName) &&
            (this.filterShowDeleted || user.deletedAt == null)
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
    sortedContacts() {
      return [...this.contacts]
        .filter((k) => {
          return (
            (!this.contactFilterName ||
              k.name
                .toLowerCase()
                .includes(this.contactFilterName.toLowerCase())) &&
            (!this.contactFilterEmail ||
              k.email
                .toLowerCase()
                .includes(this.contactFilterEmail.toLowerCase())) &&
            (!this.contactFilterTel ||
              k.phone
                .toLowerCase()
                .includes(this.contactFilterTel.toLowerCase())) &&
            (!this.contactFilterAdresse ||
              k.address
                .toLowerCase()
                .includes(this.contactFilterAdresse.toLowerCase())) &&
            (!this.contactFilterAnsprechpartner ||
              k.personName
                .toLowerCase()
                .includes(this.contactFilterAnsprechpartner.toLowerCase()))
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
      return [...this.sortedContacts].map((k) => {
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
    newContactTelValid() {
      return this.newContactTel && this.phoneRegex.test(this.newContactTel);
    },
    newContactPersonTelValid() {
      return (
        this.newContactPersonTel &&
        this.phoneRegex.test(this.newContactPersonTel)
      );
    },
  },
};
</script>
