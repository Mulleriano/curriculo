<script setup>

</script>

<template>
  <div id="footer">

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