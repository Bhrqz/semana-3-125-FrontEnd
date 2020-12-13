<template>
  
  <form>
    <h1>
      Inicio de Sesión
    </h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Correo Electrónico</label>
    <input type="email" 
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    v-model="login.email"
    placeholder="Tu correo">
    <small id="emailHelp" class="form-text text-muted">No se compartirá tu correo con nadie más</small>
  </div>

  
  <div class="form-group">


    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password"
    class="form-control" 
    v-model="login.password"
    id="exampleInputPassword1" 
    placeholder="Tu contraseña">
  </div>

  


  <button type="submit" 
  class="btn btn-primary"
  @click.prevent="loginUser"
  >Entrar</button>

</form>




</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
export default {
  data(){
    return{
      login:{
        email: '',
        password:''
      }
    }
  },
  methods:{
    async loginUser(){
      try{
      //console.log(this.login)
        let response = await this.$http.post('/api/usuario/login', this.login);
        console.log(response.data);
        let token = response.data.tokenReturn;
        let user = response.data.user;

        localStorage.setItem('jwt', token);
        localStorage.setItem('user', JSON.stringify(user));
      if (token){
        swal("Autenticado", "Login Correcto", "success");
        this.$router.push('/home');
            }
      }
      catch(e) {
        swal("Oh, no", "Algo saliò mal", "error");
      }
     }
  }}

</script>


<style scoped>

</style>