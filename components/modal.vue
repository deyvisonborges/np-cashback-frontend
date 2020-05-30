<template>
	<div class="np__modal" v-if="show">
		<h3>{{message}}</h3>
		<div class="np__modal--buttons"> 
			<button class="aceitar"> {{button_acept}} </button>
			<button class="negar" 
				@click="setStateModal(showProp)"> 
				{{button_decline}} 
			</button>
		</div>
		<span class="np__modal--error">{{err}}</span>
	</div>
</template>

<script>
export default { 
	props: [  'message', 'button_acept', 'button_decline', 'showProp' ],
	name: "ComponentModal",
	data() {
		return {
			show: true,
			err: null
		}
	},
	methods: {
		setInformationsModal(message, acept, decline) {
			this.message = message;
			this.button_acept = acept;
			this.button_decline = decline;
		},
		setStateModal(state) {
			if(!state) {
				this.err = 'erro ao pegar stat da modal[true/false]';
				return;
				this.err = null;
			};
			this.show = state;
		}
	}
}
</script>

<style scoped>
.np__modal {
	background-color: #ffffff;
	border-radius: 20px;
	box-shadow: 0 0 15px 0 #c3c3c3;
	height: fit-content;
	text-align: center;
	left: 50vh;
	padding: 10px;
	position: absolute;
	top: 50vh;
	transition: all 0.7ms;
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
	background-color: rgb(61, 255, 93);
	padding: 10px;
}
.np__modal--buttons .aceitar:active {
	box-shadow: 0 0 0 1px rgb(15, 199, 104);
  top: 3px;
}
.np__modal--buttons .negar {
	background-color: rgb(255, 61, 61);
	padding: 10px;	
}
.np__modal--buttons .negar:active {
	box-shadow: 0 0 0 1px #df2c2c;
  top: 3px;
}
.np__modal--error {
	color: red;
	font-size: 0.5rem;
}
</style>
