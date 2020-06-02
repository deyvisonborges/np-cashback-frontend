<template>
	<div class="np__modal" v-if="show">
		<h3>{{message}}</h3>
		<div class="np__modal--buttons"> 
			<button class="aceitar"> {{acept}} </button>
			<button class="negar" 
				@click="setStateModal(showProp)"> 
				{{decline}} 
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		message: { type: String },
		acept: { type: String }, 
		decline: { type: String },
		showProp: { type: Boolean },
	},
	name: "ComponentModal",
	data() {
		return {
			show: true,
		}
	},
	methods: {
		setStateModal(state) { this.show = state; }
	}
}
</script>

<style scoped>
.np__modal {
	background-color: #ffffff;
	border-radius: 20px;
	box-shadow: 0 0 15px 0 #c3c3c3;
	position: fixed;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	margin: 15pc auto;
	height: fit-content;
	text-align: center;
	padding: 10px;
	transition: top .30s cubic-bezier(1, -0.74, 0, 1.26);
	width: 150px;
	z-index: 1;
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
	outline: none;
}
.np__modal--buttons button:hover {
	box-shadow: 0 0 15px 0 #c3c3c3;
	cursor: pointer;
	font-weight: bold;
} 
.np__modal--buttons .aceitar {
	background-color: #0fc768;
	padding: 10px;
}
.np__modal--buttons .aceitar:active {
	box-shadow: 0 0 0 1px rgb(15, 199, 104);
  top: 3px;
}
.np__modal--buttons .negar {
	background-color: #ff3d3d;
	padding: 10px;	
}
.np__modal--buttons .negar:active {
	box-shadow: 0 0 0 1px #df2c2c;
  top: 3px;
}
</style>
