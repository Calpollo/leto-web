<template>
  <b-card-text>
    <div class="accordion" role="tablist">
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-lokal-1 variant="link">
            Installation <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-lokal-1"
          accordion="lokal-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Um dir die lokale Version zu installieren, befolge folgende
              Schritte:
            </b-card-text>
            <b-card-text>
              <ol style="margin-left: 16px">
                <li>
                  Gehe zur
                  <router-link :to="{ name: 'Download' }">
                    Download-Seite von Leto </router-link
                  >.
                </li>
                <li>
                  Suche eine Version aus der obigen Downloadliste aus.
                  (Empfehlung: Wähle die neueste Version)
                </li>
                <li>
                  Lade von der Downloadseite die zu deinem Betriebssystem
                  passende Anwendung runter.
                </li>
                <li>
                  Führe die runtergeladene Anwendung auf deinem Gerät aus.
                </li>
                <li>Leto ist jetzt auf deinem Gerät installiert. Viel Spaß!</li>
              </ol>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- Funktionen -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-lokal-2 variant="link">
            Funktionsumfang <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-lokal-2"
          accordion="lokal-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Folgende Funktionen sind in der Version
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
                    <li>Technischer Support per E-Mail</li>
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
          <b-button block v-b-toggle.accordion-lokal-3 variant="link">
            Für wen ist diese Version geeignet?
            <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-lokal-3"
          accordion="lokal-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Die lokale Version ist am besten geeignet für neue Gründer oder
              Tester, die Leto erst mal
              <b>ohne Investition ausprobieren</b> wollen. Auf diese Weise musst
              du nichts investieren und kannst
              <b>herausfinden, ob Leto für deine Praxis geeignet ist</b>.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- Kosten -->
      <b-card no-body>
        <b-card-header header-tag="header" role="tab">
          <b-button block v-b-toggle.accordion-lokal-4 variant="link">
            Kosten <b-icon-chevron-down class="ml-6" />
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-lokal-4"
          accordion="lokal-accordion"
          role="tabpanel"
          class="text-left"
        >
          <b-card-body>
            <b-card-text>
              Die lokale Version ist komplett kostenlos nutzbar. Das heißt, dass
              du alle Funktionen der kostenlosen Version in vollem Umfang nutzen
              kannst und von uns keine Rechnungen bekommst.
            </b-card-text>
            <b-card-text>
              Diese Version wird Updates bekommen, aber Kundensupport wird nur
              in begrenztem Umfang möglich sein. Wenn dir unser voller Support
              ein wichtiges Anliegen ist, empfehlen wir eine der bezahlten
              Varianten.
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
