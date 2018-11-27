<template>
    <header class="Header">
      <nav class="Navigation">
        <!--
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        -->
        <div class="row">
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
        </div>
        
        
      </nav>
    </header>
</template>

<script>
export default {
    name: 'MapHeader'
}
</script>


<style lang="scss">

$orange: #e4502a;
$gray: #333333;
$light-blue: #35acaf;

.Header {
  background-color: $orange;
  background: url(../assets/navbar.png) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // padding: 1.5em 3em;
  padding: 3.5em 3em 3.5em 3em;
  position: relative;
  margin: 0;
  max-width: 100%;
  height: auto;

  &-text {
    color: white;
    display: inline-block;
  }

  h1, h2 {
    margin: 0;
    padding: 0;
  }
}

@font-face {
  font-family: 'Barlow Semi Condensed Thin';
  src: url('../assets/fonts/BARLOWSEMICONDENSED-THIN.TTF');
}

@font-face {
  font-family: 'Barlow Semi Condensed ExtraLight';
  src: url('../assets/fonts/BARLOWSEMICONDENSED-EXTRALIGHTITALIC.TTF');
}

@font-face {
  font-family: 'Barlow Semi Condensed Medium';
  src: url('../assets/fonts/BARLOWSEMICONDENSED-MEDIUM.TTF');
}

.Navigation {

  &-main {
    display: flex;
    list-style: none;
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    margin: 0;

    &Item {
      position: relative;
      background-color: $gray;
      border: 1px solid white;
      margin: 0 3px;
      padding: 2px 4px 2px 12px;
      min-width: 150px;
      text-align: center;
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        color: white;
        border-right: 1px solid white;
        border-top: 1px solid white;
        background-color: $orange;
        left: 0;
        top: 50%;
        line-height: 10px;
        border-radius: 50%;
        transform: translate(-33%, -50%) rotateZ(45deg);
      }
      &:hover {
        background-color: $light-blue;
        font-family: 'Barlow Semi Condensed Medium', sans-serif;
      }
    }

    &ItemLink {
      color: white;
      text-decoration: none;
      font-family: 'Barlow Semi Condensed ExtraLight', sans-serif;
      font-size: 16px;
      &:hover {
        font-family: 'Barlow Semi Condensed Medium', sans-serif;
        text-decoration: none;
        color: white;
      }
    }


  }

  &-second {
    display: inline-block;
    list-style: none;
    position: absolute;
    top: 0;
    right: 2em;
    
    &ItemLink {
      color: white;
      text-decoration: none;
      font-family: 'Barlow Semi Condensed Thin', sans-serif;
      font-size: 16px;
    }

    & li::before {
      content: "\2022";
      color: white;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
}
</style>

