<template>
  <section class="dashboard__content">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "ComponentDashboardContent"
};
</script>

<style scoped>
.dashboard__content {
	grid-column-start: 2;
  padding: 20px;
	position: relative;
}
</style>
