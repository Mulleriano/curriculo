<script setup>

</script>

<template>
  <div id="conhecimentos">

    <div class="itens">
      <div class="motion">
        <h3>Motion Design</h3>
        <img src="../assets/conhecimentos/ae.png" alt="After Effects">
        <p>After Effects</p>

        <img src="../assets/conhecimentos/pr.png" alt="Premiere Pro">
        <p>Premiere Pro</p>

        <img src="../assets/conhecimentos/ai.png" alt="Illustrator">
        <p>Illustrator</p>

        <img src="../assets/conhecimentos/ps.png" alt="Photoshop">
        <p>Photoshop</p>

        <img src="../assets/conhecimentos/id.png" alt="InDesign">
        <p>InDesign</p>
      </div>

      <div class="dev">
        <h3>Desenvolvimento</h3>

        <img src="../assets/conhecimentos/html.png" alt="HTML">
        <p>HTML5</p>

        <img src="../assets/conhecimentos/css.png" alt="CSS">
        <p>CSS3</p>

        <img src="../assets/conhecimentos/js.png" alt="JavaScript">
        <p>HTML5</p>
  

        <img src="../assets/conhecimentos/vue.png" alt="Vue JS">
        <p>Vue JS</p>

        <img src="../assets/conhecimentos/figma.png" alt="Figma">
        <p>Figma</p>
      </div>

      <div class="motion">
        <h3>Idiomas</h3>
        <img src="../assets/conhecimentos/ingles.png" alt="Inglês">
        <p>Inglês</p>

        <img src="../assets/conhecimentos/espanhol.png" alt="Espanhol">
        <p>Espanhol</p>

        <img src="../assets/conhecimentos/frances.png" alt="Francês">
        <p>Francês</p>
       
      </div>
    </div>

  </div>
</template>

<style scoped>
#conhecimentos {
  border-top: 3px solid rgba(7, 205, 240, 0.7);
  border-left: 3px solid rgba(7, 205, 240, 0.7);
  border-radius: 50px 0 0 0;
  height: 450px;
  width: 100%;
  padding: 30px 50px;
  overflow-y: auto;
  margin-bottom: 20px;
}

/* Estilo do Scrollbar */
#conhecimentos::-webkit-scrollbar {
  width: 10px;
}

#conhecimentos::-webkit-scrollbar-thumb {
  background-color: #07cdf0;
  border-radius: 50px;
}

img {
  width: 50px;
  margin-top: 10px;
}

/* Grid de conhecimentos */
.itens {
  display: grid;
  grid-template: 200px / auto auto auto;
  text-align: center;
  column-gap: 20px;
  margin-bottom: 20px;
}

@media screen and (max-width: 1024px) {
  #conhecimentos {
    height: 300px;
  }
  .itens {
    column-gap: 10px;
    margin-bottom: 10px;
  }

  img {
    width: 40px;
    margin-top: 10px;
  }

  #conhecimentos {
    padding: 20px 5px;
  }
}
</style>