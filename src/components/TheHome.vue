<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">Sprint - 3 - Front-End</a>
        <span class="text-light">PAGINA PRINCIPAL DE {{ user.name |upper }}</span>
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

        <div class="d-flex" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <button
              class="btn btn-outline-light my-2 my-sm-0"
              type="button"
              @click="logOut"
            >
              Salir
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="card text-dark bg-info mb-3" style="max-width: 18rem">
        <div class="card-header">Datos de Usuario</div>
        <div class="card-body">
          <h5 class="card-title">Bienvenido</h5>
          <p class="card-text">Usuario: {{ user.name |capitalize}}</p>
          <p class="card-text">Email: {{ user.email }}</p>
        </div>
      </div>
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
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  upper: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
  },  
  
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
