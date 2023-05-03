<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sobre from './components/Sobre.vue'
</script>

<template>
  <div id="container">

    <header>
    
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
      <div class="wrapper">
    
        <h1>Igor Muller dos Santos</h1>
    
        <nav>
          <RouterLink to="/">Sobre</RouterLink>
          <RouterLink to="/conhecimentos">Conhecimentos</RouterLink>
          <RouterLink to="/experiencias">Experiencias</RouterLink>
        </nav>
    
      </div>
    </header>

    <main>
      <RouterView />
    </main>
    
    <footer>

    <h2>Contato</h2>

    </footer>
  </div>
</template>

<style scoped>

header {

}

main {

}

footer {

}

</style>
