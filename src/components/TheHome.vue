<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Bienvenido, {{ user.name }}.</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="button"
            @click="logOut"
          >
            Salir
          </button>
        </form>
      </div>
    </nav>

    <div class="nombre">
      {{ user.name }}
    </div>
    <br />
    <div class="userEmail">
      {{ user.email }}
    </div>

    
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {
    getUserDetails() {
      //let user = localStorage.getItem('user');
      let token = localStorage.getItem("jwt");
      let user = VueJwtDecode.decode(token);
      console.log(user);

      if (token) {
        this.user = user;
      }
    },
    logOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped>
.navbar-login {
  width: 305px;
  padding: 10px;
  padding-bottom: 0px;
}

.navbar-login-session {
  padding: 10px;
  padding-bottom: 0px;
  padding-top: 0px;
}

.icon-size {
  font-size: 87px;
}
</style>
