
export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export function getIconUrlFromTag(feature) {
  switch (feature.properties["tags"].trim()) {
    case "Arte Publico":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Biblioteca":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Centros de formación artistica":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Colecciones y archivos":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Edificios, casas o conjuntos emblemáticos":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Monumentos":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Puntos historicos":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Salas de exposición":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Teatros":
      return "markers/iconos para mapa interactivo 2018-25.svg";
    case "Cafés":
      return "markers/iconos para mapa interactivo 2018-39 (1).svg";
    case "Mercados agroecológicos":
      return "markers/iconos para mapa interactivo 2018-39 (1).svg";
    case "Restaurantes":
      return "markers/iconos para mapa interactivo 2018-39 (1).svg";
    case "Hotel":
      return "markers/iconos para mapa interactivo 2018-42 (1).svg";
    case "Operador Turistico":
      return "markers/iconos para mapa interactivo 2018-42 (1).svg";
    case "Parque Tematico":
      return "markers/iconos para mapa interactivo 2018-42 (1).svg";
    case "Arquitectura":
      return "markers/iconos para mapa interactivo 2018-34 (1).svg";
    case "Investigación desarrollo e innovación":
      return "markers/iconos para mapa interactivo 2018-34 (1).svg";
    case "Mercados creativos":
      return "markers/iconos para mapa interactivo 2018-34 (1).svg";
    case "Jardin Botanico":
      return "markers/iconos para mapa interactivo 2018-27.svg";
    case "Mirador":
      return "markers/iconos para mapa interactivo 2018-27.svg";
    case "Monumento Natural":
      return "markers/iconos para mapa interactivo 2018-27.svg";
    case "Parques naturales":
      return "markers/iconos para mapa interactivo 2018-27.svg";
    case "Reserva natural":
      return "markers/iconos para mapa interactivo 2018-27.svg";
    case "Zoologico":
      return "markers/iconos para mapa interactivo 2018-27.svg";
    case "Relajación, meditación, yoga":
      return "markers/iconos para mapa interactivo 2018-43 (2).svg";
    case "Cocinas tradicionales y etnogastronomía":
      return "markers/iconos para mapa interactivo 2018-26.svg";
    case "Conciertos":
      return "markers/iconos para mapa interactivo 2018-26.svg";
    case "Estudios de historia, memoria y patrimonio":
      return "markers/iconos para mapa interactivo 2018-26.svg";
    case "Festivales, fiestas y ferias":
      return "markers/iconos para mapa interactivo 2018-26.svg";
    case "Mercados ancestrales y de agricultura":
      return "markers/iconos para mapa interactivo 2018-26.svg";
    case "Esctitura y producción literaria":
      return "markers/iconos para mapa interactivo 2018-31 (1).svg";
    case "Prensa, periodicos, revistas":
      return "markers/iconos para mapa interactivo 2018-31 (1).svg";
    case "Promocion de lectura y escritura":
      return "markers/iconos para mapa interactivo 2018-31 (1).svg";
    case "Centros de formación":
      return "markers/iconos para mapa interactivo 2018-47.svg";
    case "Observatorios":
      return "markers/iconos para mapa interactivo 2018-47.svg";
    case "Universidad":
      return "markers/iconos para mapa interactivo 2018-47.svg";
    case "Centro Comercial":
      return "markers/iconos para mapa interactivo 2018-45.svg";
    case "Empresa del sector privado":
      return "markers/iconos para mapa interactivo 2018-37 (1).svg";
    case "Niñez":
      return "markers/iconos para mapa interactivo 2018-37 (1).svg";
    case "Organización de la sociedad civil":
      return "markers/iconos para mapa interactivo 2018-37 (1).svg";
    case "Danza":
      return "markers/iconos para mapa interactivo 2018-29 (1).svg";
    case "Teatro":
      return "markers/iconos para mapa interactivo 2018-29 (1).svg";
    case "Títeres y marionetas":
      return "markers/iconos para mapa interactivo 2018-29 (1).svg";
    case "Fotografía":
      return "markers/iconos para mapa interactivo 2018-28.svg";
    case "Graffiti":
      return "markers/iconos para mapa interactivo 2018-28.svg";
    case "Instalación":
      return "markers/iconos para mapa interactivo 2018-28.svg";
    case "Cine":
      return "markers/iconos para mapa interactivo 2018-32 (1).svg";
    case "Fotografia":
      return "markers/iconos para mapa interactivo 2018-32 (1).svg";
    case "Medio de comunicación":
      return "markers/iconos para mapa interactivo 2018-32 (1).svg";
    case "Radio":
      return "markers/iconos para mapa interactivo 2018-32 (1).svg";
    case "Organización comunitaria":
      return "markers/iconos para mapa interactivo 2018-38 (1).svg";
    case "Parques":
      return "markers/iconos para mapa interactivo 2018-50.svg";
    case "Plaza":
      return "markers/iconos para mapa interactivo 2018-50.svg";

    case "Discotecas y clubes nocturnos":
      return "markers/iconos para mapa interactivo 2018-40 (1).svg";
    case "Lugares de bohemia":
      return "markers/iconos para mapa interactivo 2018-40 (1).svg";
    case "Alcaldía":
      return "markers/iconos para mapa interactivo 2018-48.svg";
    case "Entidades descentralizadas":
      return "markers/iconos para mapa interactivo 2018-48.svg";
    case "Gobernación":
      return "markers/iconos para mapa interactivo 2018-48.svg";
    case "Iglesia":
      return "markers/iconos para mapa interactivo 2018-44 (2).svg";
    case "Centros de recreación":
      return "markers/iconos para mapa interactivo 2018-41 (2).svg";
    case "Infraestructura deportiva":
      return "markers/iconos para mapa interactivo 2018-41 (2).svg";
    case "Mercado artesanal":
      return "markers/iconos para mapa interactivo 2018-36 (1).svg";
    case "Producción de animaciones":
      return "markers/iconos para mapa interactivo 2018-33 (1).svg";
    case "Conversatorio":
      return "markers/iconos para mapa interactivo 2018-30 (1).svg";
    case "Interpretación":
      return "markers/iconos para mapa interactivo 2018-30 (1).svg";
    case "Moda":
      return "markers/iconos para mapa interactivo 2018-35 (1).svg";
    default:
      window.console.log("Pending: ", `-${feature.properties["tags"]}-`);
      break;
  }
}
