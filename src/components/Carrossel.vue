<script>
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