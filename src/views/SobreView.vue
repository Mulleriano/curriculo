<script setup></script>

<template>
  <div id="sobreMim">
    <p>
      Adoro passar o tempo com a minha família que é composta pela minha noiva
      maravilhosa, 2 gatos (o Jorel e o Peter) e uma cachorra chamada Ivy. Gosto
      também de fazer Beatbox, andar de bike e de aprender coisas novas.
    </p>

          <div id="fotos">
      <div>
      <div class="bia">
      <div class="escrito"><strong>Noiva</strong></div>
      </div>
      </div>

      <div>
      <div class="peter">
      <div class="escrito"><strong>Peter</strong></div>
      </div>
      </div>

      <div>
      <div class="ivy">
      <div class="escrito"><strong>Ivy</strong></div>
      </div>
      </div>

      <div>
      <div class="jorel">
      <div class="escrito"><strong>Jorel</strong></div>
      </div>
      </div>
    </div>
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

#fotos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
}

.bia {
background: url("../assets/sobre/bia.jpeg") no-repeat center;
background-size: 100% auto;
width: 270px;
height: 270px;
border: 2px solid #07cdf0;
border-radius: 10px;
}

.escrito {
padding: 20px;
transition: opacity 0.2s linear;
height: 270px;
color: transparent;
}

.bia:hover .escrito {
background: #07cdf0;
color: white;
text-align: center;
padding-top: 40%;
font-size: 1.5rem;
border-radius: 10px;
}

.peter:hover .escrito {
background: #07cdf0;
color: white;
text-align: center;
padding-top: 40%;
font-size: 1.5rem;
border-radius: 10px;
}
.peter {
background: url("../assets/sobre/peter.jpeg") no-repeat center;
background-size: cover;
width: 270px;
height: 270px;
border: 2px solid #07cdf0;
border-radius: 10px;
}

.ivy {
background: url("../assets/sobre/ivy.jpeg") no-repeat center;
background-size: cover;
width: 270px;
height: 270px;
border: 2px solid #07cdf0;
border-radius: 10px;
}

.ivy:hover .escrito {
background: #07cdf0;
color: white;
text-align: center;
padding-top: 40%;
font-size: 1.5rem;
border-radius: 10px;
}

.jorel {
background: url("../assets/sobre/jorel.jpeg") no-repeat center;
background-size: cover;
width: 270px;
height: 270px;
border: 2px solid #07cdf0;
border-radius: 10px;
}

.jorel:hover .escrito {
background: #07cdf0;
color: white;
text-align: center;
padding-top: 40%;
font-size: 1.5rem;
border-radius: 10px;
}



@media screen and (max-width: 1024px) {
  #sobreMim {
    height: 300px;
  }

  #fotos {
    grid-template-columns: 1fr;
  }

  .bia,
  .ivy,
  .jorel,
  .peter {
    width: 220px;
    height: 220px;
  }
}
</style>
