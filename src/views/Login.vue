<template>
  <section class="login">
    <form @submit.prevent="login()">
      <h3 class="form-title">Iniciar Sesión</h3>
      <input
        type="text"
        placeholder="Escriba su usuario"
        class="form-input"
        v-model="username"
      >
      <input
        type="password"
        placeholder="Contraseña"
        class="form-input"
        v-model="password"
      >
      <button type="submit" class="form-button">Iniciar sesión</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",

  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login() {
      axios.post('https://p65-bank-backend.herokuapp.com/login/', {
        username: this.username,
        password: this.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(result => {
        console.log(result.data)
      }).catch(error => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
  .login {
    width: 30%;
    height: 50%;
    border: 2px solid #2c3e50;
    border-radius: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 10%;
    justify-content: space-around;
    height: 100%;
  }

  .form-title {
    text-align: center;
  }

  .form-input {
    height: 30px;
    font-size: 16px;
    padding: 5px 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .form-button {
    height: 30px;
    background-color: #2c3e50;
    color: #ffffff;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .form-button:hover {
    opacity: 0.85;
  }
</style>
