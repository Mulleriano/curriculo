<script setup>

</script>

<template>
  <div id="footer">

    <button type="button" class="btn btn-lg btn-danger popover" data-bs-toggle="popover" data-bs-title="Copyright" data-bs-content="Fundo utilizado:https://img.wallpapersafari.com/desktop/1920/1080/19/51/a415uP.jpeg
      Animação utilizada (lottie-player)
      Ícones baixados em Icons8.com">Copyright</button>

    <span class="contato">Contato</span>

    <div id="contact">

      <a href="https://wa.me/5541988195602" target="_blank">
        <img src="../assets/contato/whats.png" alt="Whats">
      </a>

      <a href="https://github.com/Mulleriano" target="_blank">
        <img src="../assets/contato/github.png" alt="Git Hub">
      </a>

      <a href="https://www.linkedin.com/in/mulleriano/" target="_blank">
        <img src="../assets/contato/linkedin.png" alt="Linkedin">
      </a>

    </div>
  </div>
</template>

<style scoped>
#footer {
  background-color: #07cdf0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  border-radius: 0 0 10px 10px;
  padding-left: 3rem;
}

/* Tamanho padrão para os ícones */
#footer a img {
  width: 50px;
}

.contato {
  font-weight: bold;
  font-size: 1.7rem;
  padding-left: 30px;
}

/* Layout dos ícones */
#contact {
  background-color: #fff;
  height: 100%;
  width: 60%;
  padding: 20px 0;
  border-radius: 50px 0 10px 0;

  /* Alinhamento dos ícones */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#contact a {
  margin: 0 30px;
}

.popover{
  background-color: #084686;
  color:#fff;
  border: none;
}

@media screen and (max-width: 1024px) {
  /* Tamanho padrão para os ícones */
  #footer a img {
    width: 30px;
  }

  .contato {
    font-weight: bold;
    font-size: 1.3rem;
    padding-left: 20px;
  }

  #contact a {
    margin: 0 10px;
  }
}
</style>