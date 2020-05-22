<template>
  <main class="dashboard__container">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "ComponentDashboardContainer"
};
</script>

<style scoped>
.dashboard__container {
	background-color: #f3f3f3;
  display: grid;
  grid-template-columns: 15vw auto;
  height: 100vh;
	position: relative;
}
</style>
