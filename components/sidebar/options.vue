<template>
  <ul>
		<!-- o slot deve receber filhos do tipo <li> -->
		<slot></slot>
    <li>
      <nuxt-link to='/dashboard/balances-report'>balances report</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/dashboard/clients-report'>clients report</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/dashboard/planning'>planning</nuxt-link>
    </li>
    <li>
      <nuxt-link class="np__return" to='/'>exit</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ComponentSidebarOptions'
}
</script>

<style>
ul {
	display: grid;
	grid-auto-flow: row;
	padding: 10px 20px;
	position: relative;
}
ul li {
	list-style: none;
	padding: 10px;
}
ul li a {
	color: #679e63;
	text-decoration: none;
}
ul li a:hover {
	background-color: #679e63;
	color: #f3f3f3;
	padding: 5px;
}
.np__return::before {
	color: #679e63;
	content: '<';
	font-size: 1.1rem;
	font-weight: bold;
	text-align: center;
	padding: 5px;
}
</style>
