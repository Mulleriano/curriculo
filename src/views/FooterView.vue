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

  <div id="footer">

    <h2 class="texto">Contato</h2>
  
    <div id="contact">
      
      <a href="https://wa.me/5541988195602" target="_blank">
        <img src="../assets/whats.png" alt="Whats">
      </a>
      
      <a href="https://github.com/Mulleriano" target="_blank">
        <img src="../assets/github.png" alt="Git Hub">
      </a>

      <a href="https://www.linkedin.com/in/mulleriano/" target="_blank">
        <img src="../assets/linkedin.png" alt="Linkedin">
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

#footer a img {
  width: 50px;
}

#footer h2 {
  font-weight: bold;
  font-size: 1.7rem;
  /* padding: 30px; */
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