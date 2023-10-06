<template>
  <div>
    <b-input-group prepend="Suchen" class="mb-2">
      <b-input v-model="searchTerm"></b-input>
    </b-input-group>
    <div :style="{ display: 'grid', placeItems: 'center' }">
      <b-pagination
        v-model="currentPage"
        :total-rows="filteredLogs?.length || 0"
        :per-page="perPage"
        :aria-controls="`${file}-table`"
      />
    </div>

    <b-table
      :id="`${file}-table`"
      :items="filteredLogs"
      :per-page="perPage"
      :current-page="currentPage"
      small
      striped
      hover
      responsive
      foot-clone
      :style="{ textAlign: 'start' }"
    >
      <template #cell(date)="data">
        <p
          :style="{ fontWeight: '500', width: 'max-content' }"
          @click="() => (parseDates = !parseDates)"
          variant="light"
        >
          {{
            parseDates
              ? new Date(data.item.date).toLocaleString("de")
              : data.item.date
          }}
        </p>
      </template>
    </b-table>

    <div :style="{ display: 'grid', placeItems: 'center' }">
      <b-pagination
        v-model="currentPage"
        :total-rows="filteredLogs?.length || 0"
        :per-page="perPage"
        :aria-controls="`${file}-table`"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logs: Array,
    perPage: Number,
    file: String,
  },
  data() {
    return {
      currentPage: 1,
      searchTerm: null,
      parseDates: true,
    };
  },
  computed: {
    filteredLogs() {
      return this.logs.filter(
        ({ date, logEntry }) =>
          !this.searchTerm ||
          date.toLowerCase().includes(this.searchTerm) ||
          logEntry.toLowerCase().includes(this.searchTerm)
      );
    },
  },
};
</script>
