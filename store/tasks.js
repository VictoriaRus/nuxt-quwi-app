export const state = () => ({
  tasks: []
})

export const getters = {
  getTasks: state => state.tasks
}

export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  }
}

export const actions = {
  async fetchTasks({commit}) {
    await fetch("https://api.quwi.com/v2/projects-manage/index?filters[is_active]=1&sort=position", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        commit("setTasks", response.projects);
      })
  }
}
