<template>
  <div class="timeline__container">
    <section>
      <div class="timeline__content">
        <div class="timeline__box">
          <h3>HOJE</h3>
          <span>R$ 12.90</span>
        </div>
        <div class="timeline__box timeline__icon">
          <i>icon</i>
        </div>
        <div class="timeline__box">
          <span>teste</span>
          <span>teste</span>
        </div>
      </div>
    </section>
		<section>
      <div class="timeline__content">
        <div class="timeline__box">
          <h3>ONTEM</h3>
          <span>R$ 12.90</span>
        </div>
        <div class="timeline__box timeline__icon">
          <i>icon</i>
        </div>
        <div class="timeline__box">
          <span>teste</span>
          <span>teste</span>
        </div>
      </div>
    </section>
		<section>
      <div class="timeline__content">
        <div class="timeline__box">
          <h3>Quarta - 20/05</h3>
          <span>R$ 12.90</span>
        </div>
        <div class="timeline__box timeline__icon">
          <i>icon</i>
        </div>
        <div class="timeline__box">
          <span>teste</span>
          <span>teste</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.timeline__container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}
.timeline__content {
  align-items: center;
  column-gap: 10px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr fit-content(0) 3fr;
	width: inherit;
}
.timeline__content:last-child {
	text-align: center;
}
.timeline__box {
	display: grid;
	gap: 10px;
	grid-auto-flow: row;
  padding: 40px;
}
.timeline__box:first-child {
  border-right: 1px solid darkolivegreen;
}
.timeline__box:last-child {
	left: -15%;
	position: relative;
	text-align: left;
}
.timeline__icon {
  display: grid;
  left: -58%;
  position: relative;
}
.timeline__icon i {
  background-color: #5e9463;
  border-radius: 50px;
  width: fit-content;
  padding: 10px;
  text-align: center;
}
</style>
