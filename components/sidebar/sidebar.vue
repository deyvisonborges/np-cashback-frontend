<template>
  <aside class="sidebar__container">
    <article class="sidebar__content">
      <slot></slot>
    </article>
  </aside>
</template>

<script>
export default {
  name: 'ComponentSidebar'
};
</script>

<style>
.sidebar__container {
  background-color: #363a45;
  display: grid;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  width: 15vw;
}
.sidebar__content {
  display: grid;
  position: relative;
}
</style>
