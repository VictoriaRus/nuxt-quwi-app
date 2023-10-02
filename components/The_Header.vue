<template>
  <div class="header">
    <div>
      <Logo/>
    </div>
    <div>
      <a href="https://quwi.com">PROJECTS</a>
      <a href="#" @click="logout">LOGOUT</a>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "The_Header",
  components: { Logo },
  methods: {
    async logout() {
      await fetch("https://api.quwi.com/v2/auth/logout", {
        method: "POST",
        body: JSON.stringify({
          "anywhere": true
        }),
        headers: {
          "Authorization": `Bearer ${ localStorage.getItem("token") }`,
          "Content-type": "application/json",
        }
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.$store.commit("setAuth", false);
          localStorage.removeItem("token");
        })
        .then(() => this.$router.push("/login"))
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  text-align: right;
  padding: 0 20px;
  height: 46px;
  position: fixed;
  width: 100%;
  z-index: 1001;
}

.header a {
  display: inline-block;
  font-size: 16px;
  color: #595959;
  padding: 0 15px;
  line-height: 46px;
}

.header a:hover {
  background-color: #e0e0e0;
}

@media screen and (max-width: 415px) {
  .header a {
    padding: 0 5px;
  }
}
</style>
