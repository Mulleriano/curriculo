<script setup>

</script>

<template>
  <div id="sobreMim">
    <h2>Sobre mim</h2>

    <p>
      Minha família é composta pela minha noiva maravilhosa, 2 gatos (o Jorel e o Peter) e uma cachorra chamada Ivy. Gosto de fazer Beatbox e de aprender coisas novas. Abaixo coloquei algumas fotos pra mostrar um pouco mais da minha vida!
    </p>

    
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
  font-size: 1.2rem;
  line-height: 30px;
}

/* Estilo do Scrollbar */
#sobreMim::-webkit-scrollbar {
  width: 10px;
}

#sobreMim::-webkit-scrollbar-thumb {
background-color: #07cdf0;
border-radius: 50px;
}
</style>