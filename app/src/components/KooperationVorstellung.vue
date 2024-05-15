<template>
  <b-card-text>
    <div class="accordion" role="tablist">
      <!-- Installation -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-kooperation-1 variant="link">
            Installation <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-kooperation-1"
          accordion="kooperation-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Für die Online-Versionen brauchst du nichts zu installieren. Logge
              dich einfach unter
              <a href="https://api.leto.andreasnicklaus.de">
                api.leto.andreasnicklaus.de
              </a>
              ein und arbeite los!
            </b-card-text>
            <b-card-text>
              Du kannst du Funktionen der Online-Versionen auch über die lokale
              Installation auf deinem Gerät nutzen. Schau dir dafür die
              Installationsanweisungen für die lokale Version an.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- Funktionen -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-kooperation-2 variant="link">
            Funktionsumfang <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-kooperation-2"
          accordion="kooperation-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Die <b>Kooperation</b>-Version eröffnet die Möglichkeit, alle
              <b>Beta-Funktionen</b> auszuprobieren und
              <b>deine Anforderungen</b> umsetzen zu lassen.
            </b-card-text>

            <b-card-text>
              Folgende Funktionen sind auch in der Version
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
          <b-button block v-b-toggle.accordion-kooperation-3 variant="link">
            Für wen ist diese Version geeignet?
            <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-kooperation-3"
          accordion="kooperation-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Ein <b>Kooperationskonto</b> ist geeignet für alle, die eine
              Individuallösung für Ihre Praxis suchen, weil sie kein passenden
              Programm finden. Diese Version erlaubt es dir, uns deine
              Anforderungen mitzuteilen, die wir im nächsten Update einspielen
              können.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- Kosten -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-kooperation-4 variant="link">
            Kosten <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-kooperation-4"
          accordion="kooperation-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Je nach deinen Ansprüchen und deiner Kooperationsbereitschaft mit
              uns machen wir dir ein passenden Angebot für dein Nutzerkonto.
            </b-card-text>
            <b-card-text>
              Diese Version bekommt
              <b>automatische Updates und erweiterten Kundensupport</b>.
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
