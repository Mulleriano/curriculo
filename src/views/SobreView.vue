<script setup>
import Carrossel from "../components/Carrossel.vue";
</script>

<template>
  <div id="sobreMim">
    <h2>Sobre mim</h2>

    <p>
      Adoro passar o tempo com a minha família que é composta pela minha noiva maravilhosa, 2 gatos (o Jorel e o Peter) e uma cachorra chamada Ivy. Gosto
      também de fazer Beatbox e de aprender coisas novas.
    </p>

    <!-- Abaixo coloquei algumas fotos pra mostrar um pouco mais da minha vida! -->
    <!-- <Carrossel /> -->
  </div>
</template>

<style scoped>
#sobreMim {
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
#sobreMim::-webkit-scrollbar {
  width: 10px;
}

#sobreMim::-webkit-scrollbar-thumb {
  background-color: #07cdf0;
  border-radius: 50px;
}

h2 {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #07cdf0;
  margin-bottom: 20px;
}

p {
  color: white;
  font-size: 1.1rem;
  line-height: 30px;
}
</style>