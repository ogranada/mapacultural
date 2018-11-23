/*global L*/

<template>
  <div class="CulturalMap">
    <div class="CulturalMap-map" id="CulturalMap"></div>
    <cultural-items-menu />
  </div>
</template>

<script>
import CulturalItemsMenu from "@/components/CulturalItemsMenu";

function getIconFromTag(feature) {
  switch (feature.properties["tags"].trim()) {
    case "Arte Publico":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Biblioteca":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Centros de formación artistica":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Colecciones y archivos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Edificios, casas o conjuntos emblemáticos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Monumentos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Puntos historicos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Salas de exposición":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Teatros":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-25.svg",
        iconSize: [30.4, 30.4]
      });
    case "Cafés":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-39 (1).svg",
        iconSize: [26.6, 26.6]
      });
    case "Mercados agroecológicos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-39 (1).svg",
        iconSize: [26.6, 26.6]
      });
    case "Restaurantes":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-39 (1).svg",
        iconSize: [26.6, 26.6]
      });
    case "Hotel":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-42 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Operador Turistico":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-42 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Parque Tematico":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-42 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Arquitectura":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-34 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Investigación desarrollo e innovación":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-34 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Mercados creativos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-34 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Jardin Botanico":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-27.svg",
        iconSize: [30.4, 30.4]
      });
    case "Mirador":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-27.svg",
        iconSize: [30.4, 30.4]
      });
    case "Monumento Natural":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-27.svg",
        iconSize: [30.4, 30.4]
      });
    case "Parques naturales":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-27.svg",
        iconSize: [30.4, 30.4]
      });
    case "Reserva natural":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-27.svg",
        iconSize: [30.4, 30.4]
      });
    case "Zoologico":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-27.svg",
        iconSize: [30.4, 30.4]
      });
    case "Relajación, meditación, yoga":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-43 (2).svg",
        iconSize: [30.4, 30.4]
      });
    case "Cocinas tradicionales y etnogastronomía":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-26.svg",
        iconSize: [30.4, 30.4]
      });
    case "Conciertos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-26.svg",
        iconSize: [30.4, 30.4]
      });
    case "Estudios de historia, memoria y patrimonio":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-26.svg",
        iconSize: [30.4, 30.4]
      });
    case "Festivales, fiestas y ferias":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-26.svg",
        iconSize: [30.4, 30.4]
      });
    case "Mercados ancestrales y de agricultura":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-26.svg",
        iconSize: [30.4, 30.4]
      });
    case "Esctitura y producción literaria":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-31 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Prensa, periodicos, revistas":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-31 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Promocion de lectura y escritura":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-31 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Centros de formación":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-47.svg",
        iconSize: [30.4, 30.4]
      });
    case "Observatorios":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-47.svg",
        iconSize: [30.4, 30.4]
      });
    case "Universidad":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-47.svg",
        iconSize: [30.4, 30.4]
      });
    case "Centro Comercial":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-45.svg",
        iconSize: [30.4, 30.4]
      });
    case "Empresa del sector privado":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-37 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Niñez":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-37 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Organización de la sociedad civil":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-37 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Danza":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-29 (1).svg",
        iconSize: [22.8, 22.8]
      });
    case "Teatro":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-29 (1).svg",
        iconSize: [22.8, 22.8]
      });
    case "Títeres y marionetas":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-29 (1).svg",
        iconSize: [22.8, 22.8]
      });
    case "Fotografía":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-28.svg",
        iconSize: [22.8, 22.8]
      });
    case "Graffiti":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-28.svg",
        iconSize: [22.8, 22.8]
      });
    case "Instalación":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-28.svg",
        iconSize: [22.8, 22.8]
      });
    case "Cine":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-32 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Fotografia":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-32 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Medio de comunicación":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-32 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Radio":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-32 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Organización comunitaria":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-38 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Parques":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-50.svg",
        iconSize: [22.8, 22.8]
      });
    case "Plaza":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-50.svg",
        iconSize: [22.8, 22.8]
      });

    case "Discotecas y clubes nocturnos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-40 (1).svg",
        iconSize: [26.6, 26.6]
      });
    case "Lugares de bohemia":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-40 (1).svg",
        iconSize: [26.6, 26.6]
      });
    case "Alcaldía":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-48.svg",
        iconSize: [22.8, 22.8]
      });
    case "Entidades descentralizadas":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-48.svg",
        iconSize: [22.8, 22.8]
      });
    case "Gobernación":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-48.svg",
        iconSize: [22.8, 22.8]
      });
    case "Iglesia":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-44 (2).svg",
        iconSize: [22.8, 22.8]
      });
    case "Centros de recreación":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-41 (2).svg",
        iconSize: [26.6, 26.6]
      });
    case "Infraestructura deportiva":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-41 (2).svg",
        iconSize: [26.6, 26.6]
      });
    case "Mercado artesanal":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-36 (1).svg",
        iconSize: [22.8, 22.8]
      });
      break;
    case "Producción de animaciones":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-33 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Conciertos":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-30 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Conversatorio":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-30 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Interpretación":
      return window.L.icon({
        iconUrl: "markers/iconos para mapa interactivo 2018-30 (1).svg",
        iconSize: [30.4, 30.4]
      });
    case "Moda":
      return window.L.icon({
          iconUrl: "markers/iconos para mapa interactivo 2018-35 (1).svg",
          iconSize: [26.6, 26.6]
        });
    default:
      window.console.log("Pending: ", `-${feature.properties["tags"]}-`);
      break;
  }
}

export default {
  name: "CulturalMap",
  methods: {
    async loadFile(name) {
      let result = {
        features: []
      };
      try {
        const response = await fetch(`/data/${name}`);
        if (response.status >= 200 && response.status < 300) {
          result = await response.json();
        }
      } catch (error) {
        // nothing to do...
      }
      return result;
    },
    async loadFiles() {
      let data = await Promise.all([
        this.loadFile("Artes_escenicas_23.json"),
        this.loadFile("Artes_visuales_22.json"),
        this.loadFile("Artesanias_21.json"),
        this.loadFile("Audiovisual_7.json"),
        this.loadFile("Centros_Educativos_19.json"),
        this.loadFile("Centros_religiosos_17.json"),
        this.loadFile("Corto_Circuito_Ruta_25.json"),
        this.loadFile("De_compras_18.json"),
        this.loadFile("Deportes_20.json"),
        this.loadFile("Diseo_16.json"),
        this.loadFile("Entidades_gubernamentales_15.json"),
        this.loadFile("Entretenimiento_y_ocio_nocturno_13.json"),
        this.loadFile("Espacios_urbanos_12.json"),
        this.loadFile("Gremiales_redes_civicas_14.json"),
        this.loadFile("Grupos_sociales_comunitarios_10.json"),
        this.loadFile("La_Cuadra_24.json"),
        this.loadFile("Literatura_prensa_9.json"),
        this.loadFile("Media_Interactiva_8.json"),
        this.loadFile("Musica_6.json"),
        this.loadFile("Patrimonio_Inmaterial_5.json"),
        this.loadFile("Patrimonio_Material_4.json"),
        this.loadFile("Patrimonio_natural_3.json"),
        this.loadFile("Salud_bienestar_2.json"),
        this.loadFile("Servcios_creativos_1.json"),
        this.loadFile("Servcios_operadores_turist_0.json"),
        this.loadFile("Servicios_gastronomicos_11.json")
      ]);
      data = data.reduce((acc, elm) => {
        /*
        elm.features.forEach(item => {
          acc.push({
            ...item,
            type: elm.type,
            _name: elm.name
          });
        });
        */
        acc.push(elm);
        return acc;
      }, []);
      // window.console.log(data);
      data.forEach(elm => {
        let layer = window.L.geoJSON(elm, {
          // onEachFeature: onEachFeature
          pointToLayer: function(feature, latlng) {
            const icon = getIconFromTag(feature);
            const markerData = {};
            if (icon) {
              markerData["icon"] = icon;
            }
            return window.L.marker(latlng, markerData);
          }
        });
        let cluster = new window.L.MarkerClusterGroup({
          showCoverageOnHover: false,
          spiderfyDistanceMultiplier: 1
        });
        cluster.addLayer(layer);
        cluster.addTo(this.map);
      });
      /*
      data.features
        .map(window.console.log)
        ;
      */
    }
  },
  mounted() {
    const INITIAL_POS = [4.7906272149218285, -75.68756103515626];
    this.map = window.L.map("CulturalMap").setView(INITIAL_POS, 13);
    window.L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib2dyYW5hZGEiLCJhIjoiY2puZ2ljYTg1MDNobjNrcGFlNndwOHR6ZiJ9.T4ym4ItHL-gaYd-uHmdeZQ",
      {
        maxZoom: 18,
        attribution: "Jennifer Esguerra + Juliana Aguirre",
        id: "mapbox.streets"
      }
    ).addTo(this.map);
    this.map.on("click", function(e) {
      window.console.log({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
    this.loadFiles();
  },
  components: {
    CulturalItemsMenu
  }
};
</script>

<style lang="scss">
.CulturalMap {
  position: relative;

  &-map {
    height: calc(100vh - 102px);
  }
}
</style>

