<template>
	<div class="np__modal">
		<h3><slot></slot></h3>
		<div class="np__modal--buttons"> 
			<button class="aceitar">aceitar</button>
			<button class="negar">sair</button>
		</div>
	</div>
</template>

<script>
export default { name: "ComponentModal" }
</script>

<style scoped>

.np__modal {
	background-color: #ffffff;
	border-radius: 20px;
	box-shadow: 0 0 15px 0 #c3c3c3;
	height: fit-content;
	text-align: center;
	left: 50%;
	padding: 10px;
	position: absolute;
	top: 50%;
	width: 150px;
}
.np__modal h3 {
	margin: 10px 0;
	padding: 10px 0;
}
.np__modal--buttons {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
}
.np__modal--buttons button {
	border: none;
	border-radius: 10px;
	margin: 5px;
}
.np__modal--buttons button:hover {
	box-shadow: 0 0 15px 0 #c3c3c3;
	cursor: pointer;
	font-weight: bold;
} 
.np__modal--buttons .aceitar {
	background-color: rgb(61, 255, 93);
	padding: 10px;
}
.np__modal--buttons .negar {
	background-color: rgb(255, 61, 61);
	padding: 10px;	
}
</style>
