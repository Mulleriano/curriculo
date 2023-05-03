<script>
import { RouterLink, RouterView } from 'vue-router'
import Sobre from './components/Sobre.vue'

export default {
  data() {
    return {
      nome: "Igor Muller",
      profissao: "Desenvolvedor Front-End"
    }
  }
}

</script>

<template>
  <div id="container">

    <!-- Box de conteúdo -->
    <div id="content">

      <header>
        <img id="minhaFoto" alt="Minha foto" class="logo" src="@/assets/minhaFoto.jpeg" />

        <h1>{{ nome }}</h1>
        <p id="profissao">{{ profissao }}</p>
      </header>

      <nav>
        <RouterLink class="teste" to="/">Sobre mim</RouterLink>
        <RouterLink class="teste" to="/conhecimentos">Conhecimentos</RouterLink>
        <RouterLink class="teste" to="/experiencias">Experiencias</RouterLink>
      </nav>

      <main>
        <RouterView />
      </main>

      <footer>
        <h2>Contato</h2>
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
    "d d d d";

  /* Estilo do box de conteúdo */
  background-color: white;
  width: 50%;
  border-radius: 5px;
  padding: 10px;

  /* glassmorph */
  background: rgba(10, 37, 66, 0.2);
  box-shadow: 0 8px 32px 0 rgba(9, 197, 230, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(157, 150, 191, 0.18)
}

/* Estilo do Header */
header {
  /* background-color: aquamarine; */
  width: 100%;

  /* Alinhamento centralizado */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Estilo da foto */
#minhaFoto {
  border-radius: 50%;
  border: 7px solid rgb(7, 205, 240);
  box-shadow: 0 5px 30px 0 rgba(9, 197, 230, 0.5);
  width: 200px;
}

h1 {
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  font-size: 40px;
}

#profissao {
  color: #07cdf0;
  font-weight: bold;
  font-size: 25px;
}

nav {
  margin: 10px;
  background-color: #070c13;
  padding: 20px;
  border-radius: 30px;
}

nav .teste {
  background-color: red;
  display: flex;
  flex-direction: row;
  padding: 20px;
}

main {
  /* background-color: burlywood; */
  width: 100%;
  min-height: 50vh;
  padding: 10px 0;
  background-color: #07cdf0;
}

footer {
  /* background-color: cadetblue; */
  width: 100%;
  background-color: aliceblue;
}</style>
