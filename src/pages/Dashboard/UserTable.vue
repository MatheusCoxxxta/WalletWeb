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
    table() {
      return this.$t("dashboard.usersTable");
    }
  }
};
</script>
<style></style>
