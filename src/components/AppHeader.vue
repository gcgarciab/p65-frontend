<template>
  <header>
    <h1>Banco Misión TIC</h1>

    <nav>
      <router-link :to="{ name: 'Login' }">Iniciar Sesión</router-link>
      <router-link to="/register">Registarse</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background: #2c3e50;
  padding: 10px 5%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header h1 {
  color: #fff;
}

nav {

}

nav a {
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  padding: 6px 20px;
  border: 1px solid;
  border-radius: 6px;
}

nav .router-link-active {
  background-color: #ffffff;
  color: #2c3e50;
}

nav a:first-child {
  margin-right: 20px;
}
</style>
