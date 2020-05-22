<template>
  <nav class="navbar__container">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'ComponentNavbarContainer'
}
</script>
<style scoped>
.navbar__container {
  background-color: #fdfdfd;
	border-radius: 5px;
	box-shadow: 0 0 5px 1px #d9d9d9;
	display: grid;
  grid-template-columns: 1fr;
  height: fit-content;  
  margin-bottom: 20px;
	padding: 20px;
	width: inherit;
}
</style>
