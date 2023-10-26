<template>
  <div id="Kontakt">
    <section
      id="landingsection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
    >
      <div class="px-4">
        <h1 data-aos="fade-up">Hilfe</h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          :style="{ maxWidth: '700px' }"
        >
          Wenn mal was falsch läuft, brauchst du schnell Antworten. Deshalb
          haben wir dir unten einige Infos zusammengesammelt, die dir helfen
          können. Wenn's doch nichts bringt, kannst du immer Kontakt aufbauen.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <b-button variant="outline-primary" :to="{ name: 'Kontakt' }">
            <b-icon-envelope />
            Kontakt
          </b-button>
          <b-button
            variant="primary"
            @click="$refs.probleme.scrollIntoView()"
            class="mx-4 my-2"
          >
            <b-icon-arrow-down />
            Bekannte Fragen und Probleme
            <b-icon-arrow-down />
          </b-button>
        </div>
      </div>
    </section>
    <section id="probleme" ref="probleme" class="py-4 pt-6">
      <div :style="{ width: '90%' }" class="accordion" role="tablist">
        <!-- Konto erstellen -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.kontoErstellung variant="primary">
              Wie kann ich ein Konto erstellen?
            </b-button>
          </b-card-header>
          <b-collapse
            id="kontoErstellung"
            visible
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                Um ein Benutzerkonto für Leto zu erstellen, kannst du...
                <ol>
                  <li>
                    auf leto.andreasnicklaus.de im Navigationsmenü am oberen
                    Bildschirmrand auf "Einloggen/Registrieren" klicken und...
                  </li>
                  <li>anschließend unten "Konto erstellen" wählen.</li>
                  <li>
                    Zur Registrierung musst du deine E-Mail-Adresse angeben,
                    einen Benutzernamen wählen und dir selber ein Passwort
                    vergeben.
                  </li>
                  <li>
                    Klicke anschließend auf "Konto erstellen". Dein Konto wird
                    erstellt und du wurst dann automatisch eingeloggt.
                  </li>
                </ol>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Konto upgraden -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.kontoUpgrade variant="primary">
              Wie kann ich mein Konto upgraden?
            </b-button>
          </b-card-header>
          <b-collapse
            id="kontoUpgrade"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                Aktuell kannst du dein Konto noch nicht upgraden. Für weitere
                Informationen kontaktiere
                <a href="mailto:nicklaus.leto@gmail.com">
                  nicklaus.leto@gmail.com </a
                >.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Hier keine passende Antwort -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.FehlerGefunden variant="primary">
              Was kann ich tun, wenn hier keine Antwort finde?
            </b-button>
          </b-card-header>
          <b-collapse
            id="FehlerGefunden"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                <p>
                  Solltest du Probleme haben, kannst du die jederzeit über die
                  <router-link :to="{ name: 'Kontakt' }"
                    >Kontaktseite</router-link
                  >
                  melden.
                </p>
                <p>
                  <b>
                    Als Kooperationspartner wird deine Anfrage schneller
                    beantwortet.
                  </b>
                  Stelle also sicher, dass du bei deiner Kontaktaufnahme
                  eingeloggt bist, damit sie von uns schneller bearbeitet werden
                  kann.
                </p>
                <b-button :to="{ name: 'Kontakt' }" variant="outline-primary">
                  Zur Kontaktseite
                </b-button>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Anzeigefehler bei Änderungen -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.updateError variant="primary">
              Ich habe ein Rezept, einen Kunden oder ein Heilmittel erstellt
              oder bearbeitet, aber die Änderungen werden nicht übernommen. Was
              kann ich tun?
            </b-button>
          </b-card-header>
          <b-collapse
            id="updateError"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                <p>
                  Wenn Änderungen, die du gemacht hast, nicht sofort übernommen
                  werden, kann es sein, dass die Änderungen bei unseren Servern
                  angekommen sind, aber in deiner Ansicht nicht angezeigt
                  werden. Um das Problem zu beheben, kannst du immer erst 3
                  Eskalationsstufen des Problems ausprobieren, die alle alleine
                  das Problem lösen könnten:
                </p>
                <ol>
                  <li>
                    Versuche einmal, zu einer anderen Ansicht zu navigieren, und
                    navigiere anschließend wieder zurück.
                  </li>
                  <li>Logge dich aus und wieder ein.</li>
                  <li>Schließe Leto und start das Programm neu.</li>
                </ol>
                Wenn keine der Eskalationsstufen zu einer Lösung des Problems
                führt, kontaktiere uns über die Kontaktseite oder direkt per
                E-Mail an
                <a href="mailto:nicklaus.leto@gmail.com">
                  nicklaus.leto@gmail.com </a
                >.
                <b-button :to="{ name: 'Kontakt' }" variant="outline-primary">
                  Zur Kontaktseite
                </b-button>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Warum Konto? -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.warumKonto variant="primary">
              Warum brauche ich ein Benutzerkonto, um die kostenlose Version zu
              nutzen?
            </b-button>
          </b-card-header>
          <b-collapse
            id="warumKonto"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                <p>
                  Wenn du Leto nutzt, speicherst und nutzt du Daten, die dich
                  oder deine Patienten identifizieren können. Mit deiner
                  E-Mail-Adresse kannst du kontaktiert werden, wenn es Probleme
                  gibt, oder dein Konto kann gesperrt werden, wenn du gegen
                  Richtlinien und Gesetze verstößt.
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Mehrere Praxen -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.mehrerePraxen variant="primary">
              Kann ich mehrere Praxen/Standorte anlegen und nutzen?
            </b-button>
          </b-card-header>
          <b-collapse
            id="mehrerePraxen"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                <p>
                  <b>Ja!</b> Wenn zu deiner Praxis mehrere Standorte gehören,
                  die getrennt voneinander sind, kannst du mehrere Praxen
                  anlegen und diese getrennt voneinander verwalten.
                </p>
                <p>
                  Diese Standorte haben getrennte Termine, aber teilen sich
                  Therapeuten und Patienten, damit sie ohne Probleme von
                  Standort zu Standort wechseln können.
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Feiertage und Urlaubstage -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.feiertage variant="primary">
              Wie kann ich Feiertage und Urlaubstage im System anlegen?
            </b-button>
          </b-card-header>
          <b-collapse
            id="feiertage"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                <p>
                  Leto unterstützt Feiertage, die über die Praxis verwaltet
                  werden. Klicke dafür in den Einstellungen unter "Standort" auf
                  die drei Punkte <b-icon-three-dots /> und klicke auf
                  "bearbeiten". Hier kannst du Feiertage anlegen, die für deine
                  Praxis gelten.
                </p>
                <p>
                  Zudem untersützt Leto Urlaubstage, die über deine Therapeuten
                  verwaltet werden. Klicke dafür in den Einstellungen unter
                  "Therapeuten" auf die drei Punkte <b-icon-three-dots /> und
                  klicke auf "bearbeiten". Hier kannst du Urlaubstage anlegen,
                  die für deine Therapeuten gelten.
                </p>
                <p>
                  Sowohl für Feiertage als auch für Urlaubstage gilt die Regel,
                  dass an diesen Tage keine Termin erstellt werden sollen. Bei
                  der Rezeptaufnahme werden keine Terminvorschläge generiert,
                  die dieser Regel widersprechen. Solltest du dennoch manuell
                  Termine an Feier oder Urlaubstagen erstellen, wirst du gewarnt
                  und kannst die Warnung ggf. ignorieren.
                </p>
                <p>
                  Sowohl Feier- als auch Urlaubstage haben ein Datum und eine
                  Kennzeichnung, ob sich der Tag jährlich wiederholt. Diese
                  Wiederholung gilt nur für die Folgejahre.
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Geräte -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.devices variant="primary">
              Auf welchen Geräten kann ich Leto nutzen?
            </b-button>
          </b-card-header>
          <b-collapse
            id="devices"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                <p>
                  Leto gibt es als Webversion und als installierbare
                  Desktopanwendung.
                </p>
                <p>
                  Die Webversion kann grundsätzlich auf jedem Gerät mit
                  Internetzugang genutzt werden, wird aber in der Entwicklung
                  nur mit Google Chrome auf einem Windows-PC und einem
                  Android-Handy getestet.
                </p>
                <p>
                  Die Desktopanwendung ist grundsätzlich für alle gängigen
                  Betriebssysteme geeignet. Es gibt ggf. für unterschiedliche
                  Betriebssystemfamilien unterschiedliche Versionen der
                  Software.
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- Offline -->
        <b-card no-body class="mb-1">
          <b-card-header role="tab" header-tag="header" class="p-1">
            <b-button block v-b-toggle.offline variant="primary">
              Brauche ich immer eine Internetverbindung, um Leto zu verwenden?
            </b-button>
          </b-card-header>
          <b-collapse
            id="offline"
            accordion="problems-accordion"
            role="tabpanel"
          >
            <b-card-body
              class="px-5 py-2 pt-3"
              :style="{
                textAlign: 'start',
                display: 'grid',
                placeItems: 'center',
              }"
            >
              <b-card-text>
                <p>
                  Leto gibt es als Webversion und als installierbare
                  Desktopanwendung.
                </p>
                <p>
                  Für die Webversion brauchst du eine durchgängige
                  Internetverbindung. Der Vorteil der Webversion ist, dass du
                  Leto von jedem Gerät und an jedem Ort nutzen kannst, an dem du
                  Internet hast. So kannst du zum Beispiel vor dem Schlafen
                  gehen noch kurz am Handy deine Termine für den nächsten Morgen
                  checken.
                </p>
                <p>
                  Die Desktopanwendung kann sich mit Internetverbindung mit den
                  Leto-Servern verbinden und ist dann funktional identisch mit
                  der Webversion. Die Anwendung kann aber auch Offline genutzt
                  werden. Im Offline-Modus kann nicht auf deine Online-Daten
                  zugegriffen werden. Deshalb wirkt die Desktopanwendung im
                  Offline-Modus so als ob du ein neues Konto nutzen würdest.
                </p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";

export default {
  name: "HilfeView",
  metaInfo: {
    title: "Hilfe",
  },
  data() {
    return {
      bbblurry,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

section {
  min-height: 90vh;

  &#probleme {
    display: grid;
    place-items: center;
  }

  &#landingsection {
    display: grid;
    place-items: center;

    & h1 {
      color: $primary;
      font-size: 5em;
      font-weight: 700;
    }

    & p {
      color: $primary;
    }
  }
}
</style>
