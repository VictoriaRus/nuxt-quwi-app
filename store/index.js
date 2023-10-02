export const state = () => ({
  authenticated: false,
  error: {},
})

export const getters = {
  getAuth: state => state.authenticated,
  getError: state => state.error,
}

export const mutations = {
  setAuth(state, payload) {
    state.authenticated = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
}

export const actions = {
  async goLogin({ commit }, payload) {
    try {
      await fetch("https://api.quwi.com/v2/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if (response.token) {
            localStorage.setItem("token", response.token);
            commit("setAuth", true);
          } else {
            commit("setError", response.first_errors);
          }
        })
    } catch (e) {
      console.log(e);
      localStorage.removeItem("token");
    }
  }
}
