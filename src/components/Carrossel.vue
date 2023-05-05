<script>

export default {
    data () {
      return {
        items: [
          {
            src: '../assets/minhaFoto.jpeg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: '../assets/minhaFoto.jpeg',
          },
          {
            src: '../assets/minhaFoto.jpeg',
          },
        ],
      }
    },
  }

</script>

<template>
    <!-- <div id="carrossel">
        <div class="card">
            <button id="prev" class="setas">&lt;</button>
            <div class="imagens">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
                <img src="../assets/linkedin.png" alt="fotoTeste">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
            </div>
            <button id="next" class="setas">&gt;</button>
        </div>
    </div> -->

    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.card {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.setas {
    background: none;
    border: none;
    color: #07cdf0;
    font-weight: bold;
    font-size: 3rem;
    margin: 0 20px;
    cursor: pointer;
    transition: all ease 0.3s;
}

.setas:hover {
    scale: 1.5;
}

.imagens {
    display: flex;
    width: 500px;
    height: 250px;
    /*         overflow: hidden; */
}

.imagens img {
    width: 100%;
}
</style>