export const state = () => ({
	local_payload: null
});

export const mutations = {
	SET_LOCAL_TOKEN_AUTH(state, payload) {
		state.local_payload = payload;
	}
}

export const actions = {
	async login({ commit }, { email, password }) {
		try {
			console.log(commit)
			console.log(email)
			console.log(password)
			
			const data = await fetch('https://localhost:3000');
      // .then((response) => response.json())
      // .then((json) => setData(json.movies))
      // .catch((error) => console.error(error))
      // .finally(() => setLoading(false));
			
			// const { data } = await axios.post('/', { email, password })
			commit('SET_LOCAL_TOKEN_AUTH', data);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				console.log(error.response)
				throw new Error(error.response.data.message)
			}
			return error;
		}
	},
}
