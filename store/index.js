export const state = () => ({
  authenticated: false
})

export const getters = {
  getAuth: state => state.authenticated
}

export const mutations = {
  setAuth(state, payload) {
    state.authenticated = payload;
  }
}

export const actions = {
  async goLogin({commit}, payload) {
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
          if(response.token){
            localStorage.setItem("token", response.token);
            commit("setAuth", true);
          }
        })
    } catch (e) {
      console.log(e);
      localStorage.removeItem("token");
    }
  }
}

