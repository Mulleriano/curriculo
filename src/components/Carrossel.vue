<script>

</script>

<template>
    <div id="carrossel">
        <div class="card">
            <a id="prev" class="setas">&lt;</a>
            <div class="imagens">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
                <img src="../assets/linkedin.png" alt="fotoTeste">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
                <img src="../assets/minhaFoto.jpeg" alt="fotoTeste">
            </div>
            <a id="next">&gt;</a>
        </div>
    </div>
</template>

<style scoped>

    .card {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    .setas {
        color: #07cdf0;
        font-weight: bold;
        font-size: 3rem;
        margin: 0 20px;
        cursor: pointer;
        transition: all ease 0.3s;
    }

    .setas:hover {
        scale:1.5;
    }

    .imagens {
        display: flex;
        width: 250px;
        height: 250px;
        overflow: hidden;
    }
    .imagens img {
        width: 100%;
    }

</style>