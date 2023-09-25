export default function ({ store, redirect }) {
  if (!store.state.authenticated || !localStorage.getItem("token")) {
    return redirect("/login")
  }
}
