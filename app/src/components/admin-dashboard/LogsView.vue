<template>
  <b-tabs card pills v-if="logData">
    <b-tab v-for="{ logs, file } in logData" :key="file" :title="file">
      <LogTable :logs="logs" :perPage="perPage" :file="file" />
    </b-tab>
  </b-tabs>
  <b-spinner v-else class="m-4" />
</template>

<script>
import LogService from "@/services/LogService";
import LogTable from "@/components/admin-dashboard/LogTable.vue";
export default {
  data() {
    return {
      logData: null,
      perPage: 200,
    };
  },
  components: { LogTable },
  mounted() {
    this.updateLogData();
  },
  methods: {
    updateLogData() {
      LogService.getLogs().then((logData) => {
        this.handleLogData(logData).then((processedLogData) => {
          this.logData = Object.freeze(processedLogData);
        });
      });
    },
    async handleLogData(logData) {
      return logData.map((log) => {
        log.logs = log.logs.split("\n").reverse();
        log.logs = log.logs
          .map((l) => {
            return {
              date: l.split("Z")[0] + "Z",
              logEntry: l.split("Z").splice(1).join("Z"),
            };
          })
          .filter(({ date, logEntry }) => date && logEntry);
        return log;
      });
    },
  },
};
</script>
