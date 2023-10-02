<template>
  <form v-on:submit.prevent class="login-form">
    <div class="form-logo">
      <Logo/>
    </div>
    <div class="form-item">
      <Input v-model.trim="email" type="email" placeholder="Email"/>
    </div>
    <div class="form-item">
      <Input v-model.trim="password" type="password" placeholder="Password"/>
    </div>
    <div class="form-but">
      <Button :onClick="login">Login</Button>
    </div>
    <p class="error" v-if="error.email">{{ error.email }}</p>
    <p class="error" v-if="error.password">{{ error.password }}</p>
  </form>
</template>

<script>
import Logo from "~/components/Logo";
import Input from "~/components/Input";
import Button from "~/components/Button";

export default {
  name: "LoginForm",
  components: { Logo, Input, Button },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
   error() {
      return this.$store.getters.getError
    }
  },
  methods: {
    login() {
      this.$store.dispatch("goLogin", {
        email: this.email,
        password: this.password,
      }).then(() => this.$router.push("/tasks"))
    },
  },
}
</script>

<style scoped>
.login-form {
  width: 440px;
  padding: 35px 40px 50px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .11);
  box-shadow: 0 0 12px rgba(0, 0, 0, .25);
  border-radius: 15px;
  text-align: center;
}

.form-logo {
  margin-bottom: 40px;
}

.form-item {
  margin-bottom: 20px;
}

.form-item:nth-last-child(1) {
  margin-bottom: 0;
}

.form-but {
  margin-top: 30px;
}

.error {
  margin-top: 10px;
  color: #c44512;
}

@media screen and (max-width: 415px) {
  .login-form {
    width: 95%;
  }
}
</style>
