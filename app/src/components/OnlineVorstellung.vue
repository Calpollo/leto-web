<template>
  <b-card-text>
    <div class="accordion" role="tablist">
      <!-- Installation -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-online-1 variant="link">
            Installation <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-online-1"
          accordion="online-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Für die Online-Version brauchst du nichts zu installieren. Logge
              dich einfach unter
              <a href="https://api.leto.andreasnicklaus.de">
                api.leto.andreasnicklaus.de
              </a>
              ein und arbeite los!
            </b-card-text>
            <b-card-text>
              Du kannst du Funktionen der Online-Version auch über die lokale
              Installation auf deinem Gerät nutzen. Schau dir dafür die
              Installationsanweisungen für die lokale Version an.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- Funktionen -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-online-2 variant="link">
            Funktionsumfang <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-online-2"
          accordion="online-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Folgende Funktionen sind in der Version
              <b>Online</b> enthalten:
            </b-card-text>
            <b-card-text>
              <b-row>
                <b-col cols="12" md="6">
                  <ul style="margin-left: 16px">
                    <li>Extra Login für Therapeuten</li>
                    <li>Nutzerverwaltung</li>
                    <li>Stundenabrechnungen für Therapeuten</li>
                    <li>Rechnungen mit deinem Unternehmenslogo</li>
                  </ul>
                </b-col>
                <b-col cols="12" md="6">
                  <ul style="margin-left: 16px">
                    <li>Backups in der Cloud</li>
                    <li>Synchronisierung mit all deinen Geräten</li>
                    <li>Technischer Support per Telefon</li>
                  </ul>
                </b-col>
              </b-row>
            </b-card-text>
            <b-card-text>
              Folgende Funktionen sind auch in der Version
              <b>Lokal</b> enthalten:
            </b-card-text>
            <b-card-text>
              <b-row>
                <b-col cols="12" md="6">
                  <ul style="margin-left: 16px">
                    <li>
                      Erstellung von unbegrenzten Patientenakten, Terminen und
                      Rezepten.
                    </li>
                    <li>Unbegrenzte Anzahl an Therapeuten</li>
                    <li>Automatische Terminvorauswahl</li>
                    <li>Kalendaransicht aller Termine nach Therapeut</li>
                    <li>Terminfilterfunktionen</li>
                    <li>
                      Schnellverwaltungsoptionen: Neues Rezept, Folgerezept,
                      Patient nicht erschienen
                    </li>
                  </ul>
                </b-col>
                <b-col cols="12" md="6">
                  <ul style="margin-left: 16px">
                    <li>
                      Such- & Filterfunktionen der Patientenakten und Rezepte
                    </li>
                    <li>
                      Statistische Auswertung der Patienten, Rezepte, Ärzte,
                      Krankenkassen uvm.
                    </li>
                    <li>Individalisierbare Kontaktdaten und PDF-Vorlagen</li>
                    <li>E-Mailversand in der App</li>
                    <li>
                      Sammelabrechnungen für mehrere Patienten und Rezepte
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- Für wen? -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-online-3 variant="link">
            Für wen ist diese Version geeignet?
            <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-online-3"
          accordion="online-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Die Online-Version empfehlen wir
              <b> etablierten Praxen </b>, die mit mehreren Mitarbeitern ihre
              Termin und Patienten verwalten wollen und deren
              <b> Verwaltungsaufwand </b>
              ihr aktuelle Kapazität übersteigt.
            </b-card-text>
            <b-card-text>
              Wenn du bereits ein anderes Programm benutzt und dir Lizenz- und
              Nutzungsgebühren einsparen willst, ist diese Version für dich.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- Kosten -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-online-4 variant="link">
            Kosten <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-online-4"
          accordion="online-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Du kannst die Online-Version für nur
              <b>15,00€ im Monat</b> nutzen. Dafür kannst du die Online-Version
              im vollen Umfang nutzen.
            </b-card-text>
            <b-card-text>
              Diese Version bekommt
              <b>automatische Updates und Kundensupport</b>
              wird nur in vollem Umfang möglich sein. Zusätzlich kannst du uns
              auch telefonisch kontaktieren.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-card-text>
</template>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

b {
  color: $primary;
}
</style>
