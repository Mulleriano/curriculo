<script setup>

</script>

<template>
<div id="conhecimentos">

  <div class="itens">

  <div class="motion">
  <h3>Motion Design</h3>
  <img src="../assets/conhecimentos/ae.png" alt="After Effects">
  <p>After Effects</p>
  <div class="progress barras" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 80%">80%</div>
  </div>

  <img src="../assets/conhecimentos/pr.png" alt="Premiere Pro">
  <p>Premiere Pro</p>
  <div class="progress barras" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 80%">80%</div>
  </div>

  <img src="../assets/conhecimentos/ai.png" alt="Illustrator">
  <p>Illustrator</p>
  <div class="progress barras" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 80%">80%</div>
  </div>

  <img src="../assets/conhecimentos/ps.png" alt="Photoshop">
  <p>Photoshop</p>
  <div class="progress barras" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 50%">50%</div>
  </div>

  <img src="../assets/conhecimentos/id.png" alt="InDesign">
  <p>InDesign</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 30%">30%</div>
  </div>
</div>

<div class="dev">
  <h3>Desenvolvimento</h3>

  <img src="../assets/conhecimentos/html.png" alt="HTML">
  <p>HTML5</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 80%">80%</div>
  </div>

  <img src="../assets/conhecimentos/css.png" alt="CSS">
  <p>CSS3</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 70%">70%</div>
  </div>

  <img src="../assets/conhecimentos/js.png" alt="JavaScript">
  <p>HTML5</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 80%">80%</div>
  </div>

  <img src="../assets/conhecimentos/vue.png" alt="Vue JS">
  <p>Vue JS</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 10%">10%</div>
  </div>

  <img src="../assets/conhecimentos/figma.png" alt="Figma">
  <p>Figma</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 70%">70%</div>
  </div>
</div>

<div class="motion">
<h3>Idiomas</h3>
  <img src="../assets/conhecimentos/ingles.png" alt="Inglês">
  <p>Inglês</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 70%">70%</div>
  </div>

  <img src="../assets/conhecimentos/espanhol.png" alt="Espanhol">
  <p>Espanhol</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 40%">40%</div>
  </div>

  <img src="../assets/conhecimentos/frances.png" alt="Francês">
  <p>Francês</p>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info text-dark" style="width: 10%">10%</div>
  </div>
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