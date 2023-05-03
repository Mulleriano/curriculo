<script>

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
    <div id="usuario">
        <img id="minhaFoto" alt="Minha foto" class="logo" src="../assets/minhaFoto.jpeg" />

        <h1 id="nome">{{ nome }}</h1>
        <p id="profissao">{{ profissao }}</p>
    </div>
</template>

<style scoped>

/* Estilo do Header */

#usuario {
  /* background-color: aquamarine; */
  width: 100%;
  margin-top: 10px;

  /* Alinhamento centralizado */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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
</style>