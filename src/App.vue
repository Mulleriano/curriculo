<script setup>
/* Rotas */
import { RouterLink, RouterView } from 'vue-router';

/* Components */
import Cabecalho from './components/Cabecalho.vue';
import Rodape from './components/Rodape.vue';
</script>

<template>
  <div id="container">

    <!-- Box de conteúdo -->
    <div id="content">

      <header>
        <Cabecalho />
      </header>

      <nav>
        <RouterLink to="/" class="links" :class="{ active: isActive }" @click="active">
          Sobre mim
        </RouterLink>

        <RouterLink to="/conhecimentos" class="links" :class="{ active: isActive }" @click="active">
          Conhecimentos
        </RouterLink>

        <RouterLink to="/experiencias" class="links" :class="{ active: isActive }" @click="active">
          Experiencias
        </RouterLink>
      </nav>

      <main>
        <RouterView />
      </main>

      <footer>
        <Rodape />
      </footer>

    </div>
  </div>
</template>

<style scoped>
/* Estilo do container para o conteúdo */
#container {
  background: url('https://img.wallpapersafari.com/desktop/1920/1080/19/51/a415uP.jpeg') no-repeat;
  background-size: cover;
  min-height: 100vh;

  /* Alinhamento centralizado */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Variáveis para criação do grid */
header {grid-area: a;}
nav {grid-area: b;}
main {grid-area: c;}
footer {grid-area: d;}

#content {
  /* Display de grid */
  display: grid;
  grid-template:
    "a a a a"
    "b c c c"
    "b c c c"
    "d d d d" / 1fr 1fr 1fr 1fr;

  /* Estilo do box de conteúdo */
  background-color: white;
  width: 50%;

  /* glassmorph */
  background: rgba(10, 37, 66, 0.2);
  box-shadow: 0 8px 32px 0 rgba(9, 197, 230, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(157, 150, 191, 0.18);
}

/* Estilo da navegação */

nav {
  max-width: 100%;
  margin: 100px 0;

  /* Alinhamento dos links na navegação */
  display: flex;
  flex-direction: column;
}

/* Estilo dos links */
.links {
  /* Alinhamento dos links individuais */
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  font-size: 1.7rem;
  height: 100%;
  padding: 0 30px;
  color: #07cdf0;
  transition: all ease 0.2s;
}

/* Estilo do link ativo */
.router-link-exact-active {
  color: #fff;
  background: rgba(7, 205, 240, 0.7);
  box-shadow: 0 8px 32px 0 rgba(9, 197, 230, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(3px);
}

/* Estilo dos conteúdos */
main {
  width: 100%;
  min-height: 50vh;
  margin-top: 20px;
}
</style>
