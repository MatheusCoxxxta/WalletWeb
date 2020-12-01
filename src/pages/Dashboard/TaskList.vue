<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>
<script>
import { BaseTable } from "@/components";
export default {
  components: {
    BaseTable
  },
  computed: {
    tableData() {
      return this.$t("dashboard.taskList");
    }
  }
};
</script>
<style></style>
