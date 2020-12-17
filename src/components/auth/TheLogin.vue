<template>
  <form class="login-form">
    <h1>Inicio de Sesión</h1>
    <div class="mb-3">
      <!-- <label for="exampleInputEmail1">Correo Electrónico</label> -->
      <div class="input-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="login.email"
          placeholder="Tu correo"
        />
        <div class="input-group-text bg-light">
          <span class="fa fa-user-circle-o icon"></span>
        </div>
      </div>
      <small id="emailHelp" class="form-text text-light">
        No se compartirá tu correo con nadie más
      </small>
    </div>
    <div class="mb-3">
      <!-- <label for="exampleInputPassword1">Contraseña</label> -->
      <div class="input-group">
        <input
          :type="passwordFieldType"
          class="form-control"
          v-model="login.password"
          id="exampleInputPassword1"
          placeholder="Tu contraseña"
        />
        <div class="input-group-append">
          <button
            id="show_password"
            class="btn btn-light"
            type="button"
            @click.prevent="switchVisibility"
          >
            <span class="fa fa-eye-slash icon"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-light btnSubmit" @click.prevent="loginUser">
        Entrar
      </button>
    </div>
  </form>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      passwordFieldType: "password",
    };
  },
  methods: {
    async loginUser() {
      try {
        //console.log(this.login)
        let response = await this.$http.post("/api/auth/signin", this.login);
        // console.log(response.data);
        let token = response.data.accessToken;
        //let user = response.data.user;

        localStorage.setItem("jwt", token);
        //localStorage.setItem('user', JSON.stringify(user));
        if (token) {
          swal("Autenticado", "Login Correcto", "success");
          this.$router.push("/home");
        }
      } catch (e) {
        swal("Oh, no", "Algo saliò mal", "error");
      }
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>


<style scoped>
h1{
    text-align: center;
    color: #fff;
}
.login-form {
  padding: 5%;
  background: #0062cc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
  .btnSubmit{
    font-weight: 600;
    color: #0062cc;
    background-color: #fff;
}

</style>