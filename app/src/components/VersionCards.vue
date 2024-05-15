<template>
  <b-row align-v="stretch" :style="{ width: '80%' }">
    <b-col class="mb-1">
      <b-card
        title="Lokal"
        title-tag="h2"
        :style="{ height: '100%' }"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <b-list-group>
          <b-list-group-item>Für neue Gründer und Tester</b-list-group-item>
          <b-list-group-item>Kostenlos, für immer</b-list-group-item>
          <b-list-group-item>Basisfunktionen</b-list-group-item>
          <b-list-group-item>Ohne Backup</b-list-group-item>
        </b-list-group>
        <b-button
          v-b-toggle.lokal-collapse
          block
          variant="link"
          v-if="showMore"
          class="text-muted"
        >
          mehr
          <b-icon-chevron-down />
        </b-button>
        <b-collapse id="lokal-collapse" role="tab" v-if="showMore" class="mt-4">
          <LokalVorstellung />
        </b-collapse>
        <template #footer>
          <b-button variant="primary" :to="{ name: 'Register' }">
            Jetzt kostenfrei loslegen
          </b-button>
        </template>
      </b-card>
    </b-col>
    <b-col class="mb-1">
      <b-card
        title="Online"
        title-tag="h2"
        sub-title="+ Lokal"
        sub-title-text-variant="primary"
        sub-title-tag="h3"
        :style="{ height: '100%' }"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <b-list-group>
          <b-list-group-item>Für seriöse Praxen</b-list-group-item>
          <b-list-group-item>Mehrere Benutzer</b-list-group-item>
          <b-list-group-item>Alle stabilen Funktionen</b-list-group-item>
          <b-list-group-item>Cloud-Backup</b-list-group-item>
        </b-list-group>
        <b-button
          v-b-toggle.online-collapse
          block
          variant="link"
          v-if="showMore"
          class="text-muted"
        >
          mehr
          <b-icon-chevron-down />
        </b-button>
        <b-collapse
          id="online-collapse"
          role="tab"
          v-if="showMore"
          class="mt-4"
        >
          <OnlineVorstellung />
        </b-collapse>
        <template #footer>
          <b-button variant="outline-primary" disabled>
            <s>15,00€ / Monat</s>
            bald verfügbar
          </b-button>
        </template>
      </b-card>
    </b-col>
    <b-col class="mb-1">
      <b-card
        title="Kooperation"
        title-tag="h2"
        sub-title="+ Online"
        sub-title-text-variant="primary"
        sub-title-tag="h3"
        :style="{ height: '100%' }"
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        <b-list-group>
          <b-list-group-item>Für alle, die mehr wollen</b-list-group-item>
          <b-list-group-item>Individuelle Softwareupdates</b-list-group-item>
          <b-list-group-item>
            Alle stabilen Funktionen + Beta-Funktionen
          </b-list-group-item>
          <b-list-group-item>Cloud-Backup</b-list-group-item>
        </b-list-group>
        <b-button
          v-b-toggle.kooperation-collapse
          block
          variant="link"
          v-if="showMore"
          class="text-muted"
        >
          mehr
          <b-icon-chevron-down />
        </b-button>
        <b-collapse
          id="kooperation-collapse"
          role="tab"
          v-if="showMore"
          class="mt-4"
        >
          <KooperationVorstellung />
        </b-collapse>
        <template #footer>
          <b-button
            href="mailto:nicklaus.leto@gmail.com?subject=Anfrage für Kooperationskonto"
            variant="primary"
          >
            Kooperation anfragen
          </b-button>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import LokalVorstellung from "@/components/LokalVorstellung.vue";
import OnlineVorstellung from "@/components/OnlineVorstellung.vue";
import KooperationVorstellung from "@/components/KooperationVorstellung.vue";

export default {
  name: "VersionCards",
  props: {
    showMore: {
      type: Boolean,
      default: false,
    },
  },
  components: { LokalVorstellung, OnlineVorstellung, KooperationVorstellung },
};
</script>
