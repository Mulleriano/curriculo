<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      nome: "Igor Muller",
      profissao: "Desenvolvedor Front-End"
    }
  },

  // Estilo do link ativo
  methods: {
    active() {
      this.isActive = false;
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

        <h1 id="nome">{{ nome }}</h1>
        <p id="profissao">{{ profissao }}</p>
      </header>

      <nav>
        <RouterLink class="links" :class="{ active: isActive }" to="/" @click="active">Sobre mim</RouterLink>
        <RouterLink class="links" :class="{ active: isActive }" to="/conhecimentos" @click="active">Conhecimentos</RouterLink>
        <RouterLink class="links" :class="{ active: isActive }" to="/experiencias" @click="active">Experiencias</RouterLink>
      </nav>

      <main>
        <RouterView />
      </main>

      <footer>
        <div class="texto">
          <h2>Contato</h2>
        </div>
        <div id="contact">
          
          <a href="https://wa.me/5541988195602" target="_blank">
            <img src="./assets/whats.png" alt="Whats">
          </a>
          
          <a href="https://github.com/Mulleriano" target="_blank">
            <img src="./assets/github.png" alt="Git Hub">
          </a>
          
          <a href="https://www.linkedin.com/in/mulleriano/" target="_blank">
            <img src="./assets/linkedin.png" alt="Linkedin">
          </a>

        </div>
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
header {
  grid-area: a;
}

nav {
  grid-area: b;
}

main {
  grid-area: c;
}

footer {
  grid-area: d;
}

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
  margin-top: 10px;

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

#nome {
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  font-size: 2.5rem;
}

/* Estilo profissao */
#profissao {
  color: #07cdf0;
  font-weight: bold;
  font-size: 1.7rem;
}

/* Estilo da navegação */

nav {
  max-width: 250px;
  margin: 50px 0;

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
  padding-left: 30px;
  color: #07cdf0;
  transition: all ease 0.1s;
}

/* Estilo do link ativo */
.router-link-exact-active {
  color: #fff;
  background: rgba(7, 205, 240, 0.7);
  box-shadow: 0 8px 32px 0 rgba(9, 197, 230, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(3px);
}

main {
  width: 100%;
  min-height: 50vh;
  padding: 10px 0;
}

footer {
  background-color: #07cdf0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  border-radius: 0 0 10px 10px;
}

footer a img {
  width: 50px;
}

footer h2 {
  font-weight: bold;
  font-size: 1.7rem;
  padding: 30px;
}

#contact {
  background-color: #fff;
  height: 100%;
  width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px 0 0 0;
} 

#contact a {
  margin: 0 50px;
}

</style>
