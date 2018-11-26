<template>
    <header class="Header">
      <picture>
        <img src="logo" alt="Logo">
      </picture>
      <div class="Header-text">
        <h1>Mapa Cultural</h1>
        <h2>interactivo de Pereira y Risaralda</h2>
      </div>
      <nav class="Navigation">
        <!--
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        -->
        <ul class="Navigation-main">
          <li class="Navigation-mainItem"><a class="Navigation-mainItemLink" href="#">Lugares</a></li>
          <li class="Navigation-mainItem"><a class="Navigation-mainItemLink" href="#">Organizaciones</a></li>
          <li class="Navigation-mainItem"><a class="Navigation-mainItemLink" href="#">Personas</a></li>
          <li class="Navigation-mainItem"><a class="Navigation-mainItemLink" href="#">Circuitos</a></li>
          <li class="Navigation-mainItem"><a class="Navigation-mainItemLink" href="#">Densidades</a></li>
        </ul>
        <ul class="Navigation-second">
          <li class="Navigation-secondItem"><a href="#" class="Navigation-secondItemLink">Estadisticas</a></li>
          <li class="Navigation-secondItem"><a href="#" class="Navigation-secondItemLink">Documentos</a></li>
          <li class="Navigation-secondItem"><a href="#" class="Navigation-secondItemLink">Cronicas de Rutas</a></li>
          <li class="Navigation-secondItem"><a href="#" class="Navigation-secondItemLink">Directorio</a></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'MapHeader'
}
</script>

