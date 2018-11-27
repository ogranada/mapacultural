
export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export function getIconUrlFromTag(feature) {
  return getIconFromString(feature.properties["tags"].trim());
}

export function getIconFromString(str) {
  let iconPath = false;
  switch (str) {
    case "Artes":
      iconPath = "markers/iconos para mapa interactivo 2018-29 (1).svg";
      break;
    case "Arte Publico":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Biblioteca":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Centros de formación artistica":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Colecciones y archivos":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Edificios, casas o conjuntos emblemáticos":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Monumentos":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Puntos historicos":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Salas de exposición":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Teatros":
      iconPath = "markers/iconos para mapa interactivo 2018-25.svg";
      break;
    case "Cafés":
      iconPath = "markers/iconos para mapa interactivo 2018-39 (1).svg";
      break;
    case "Mercados agroecológicos":
      iconPath = "markers/iconos para mapa interactivo 2018-39 (1).svg";
      break;
    case "Restaurantes":
      iconPath = "markers/iconos para mapa interactivo 2018-39 (1).svg";
      break;
    case "Hotel":
      iconPath = "markers/iconos para mapa interactivo 2018-42 (1).svg";
      break;
    case "Operador Turistico":
      iconPath = "markers/iconos para mapa interactivo 2018-42 (1).svg";
      break;
    case "Parque Tematico":
      iconPath = "markers/iconos para mapa interactivo 2018-42 (1).svg";
      break;
    case "Arquitectura":
      iconPath = "markers/iconos para mapa interactivo 2018-34 (1).svg";
      break;
    case "Investigación desarrollo e innovación":
      iconPath = "markers/iconos para mapa interactivo 2018-34 (1).svg";
      break;
    case "Mercados creativos":
      iconPath = "markers/iconos para mapa interactivo 2018-34 (1).svg";
      break;
    case "Jardin Botanico":
      iconPath = "markers/iconos para mapa interactivo 2018-27.svg";
      break;
    case "Mirador":
      iconPath = "markers/iconos para mapa interactivo 2018-27.svg";
      break;
    case "Monumento Natural":
      iconPath = "markers/iconos para mapa interactivo 2018-27.svg";
      break;
    case "Parques naturales":
      iconPath = "markers/iconos para mapa interactivo 2018-27.svg";
      break;
    case "Reserva natural":
      iconPath = "markers/iconos para mapa interactivo 2018-27.svg";
      break;
    case "Zoologico":
      iconPath = "markers/iconos para mapa interactivo 2018-27.svg";
      break;
    case "Relajación, meditación, yoga":
      iconPath = "markers/iconos para mapa interactivo 2018-43 (2).svg";
      break;
    case "Cocinas tradicionales y etnogastronomía":
      iconPath = "markers/iconos para mapa interactivo 2018-26.svg";
      break;
    case "Conciertos":
      iconPath = "markers/iconos para mapa interactivo 2018-26.svg";
      break;
    case "Estudios de historia, memoria y patrimonio":
      iconPath = "markers/iconos para mapa interactivo 2018-26.svg";
      break;
    case "Festivales, fiestas y ferias":
      iconPath = "markers/iconos para mapa interactivo 2018-26.svg";
      break;
    case "Mercados ancestrales y de agricultura":
      iconPath = "markers/iconos para mapa interactivo 2018-26.svg";
      break;
    case "Esctitura y producción literaria":
      iconPath = "markers/iconos para mapa interactivo 2018-31 (1).svg";
      break;
    case "Prensa, periodicos, revistas":
      iconPath = "markers/iconos para mapa interactivo 2018-31 (1).svg";
      break;
    case "Promocion de lectura y escritura":
      iconPath = "markers/iconos para mapa interactivo 2018-31 (1).svg";
      break;
    case "Centros de formación":
      iconPath = "markers/iconos para mapa interactivo 2018-47.svg";
      break;
    case "Observatorios":
      iconPath = "markers/iconos para mapa interactivo 2018-47.svg";
      break;
    case "Universidad":
      iconPath = "markers/iconos para mapa interactivo 2018-47.svg";
      break;
    case "Centro Comercial":
      iconPath = "markers/iconos para mapa interactivo 2018-45.svg";
      break;
    case "Empresa del sector privado":
      iconPath = "markers/iconos para mapa interactivo 2018-37 (1).svg";
      break;
    case "Niñez":
      iconPath = "markers/iconos para mapa interactivo 2018-37 (1).svg";
      break;
    case "Organización de la sociedad civil":
      iconPath = "markers/iconos para mapa interactivo 2018-37 (1).svg";
      break;
    case "Danza":
      iconPath = "markers/iconos para mapa interactivo 2018-29 (1).svg";
      break;
    case "Teatro":
      iconPath = "markers/iconos para mapa interactivo 2018-29 (1).svg";
      break;
    case "Títeres y marionetas":
      iconPath = "markers/iconos para mapa interactivo 2018-29 (1).svg";
      break;
    case "Fotografía":
      iconPath = "markers/iconos para mapa interactivo 2018-28.svg";
      break;
    case "Graffiti":
      iconPath = "markers/iconos para mapa interactivo 2018-28.svg";
      break;
    case "Instalación":
      iconPath = "markers/iconos para mapa interactivo 2018-28.svg";
      break;
    case "Cine":
      iconPath = "markers/iconos para mapa interactivo 2018-32 (1).svg";
      break;
    case "Fotografia":
      iconPath = "markers/iconos para mapa interactivo 2018-32 (1).svg";
      break;
    case "Medio de comunicación":
      iconPath = "markers/iconos para mapa interactivo 2018-32 (1).svg";
      break;
    case "Radio":
      iconPath = "markers/iconos para mapa interactivo 2018-32 (1).svg";
      break;
    case "Organización comunitaria":
      iconPath = "markers/iconos para mapa interactivo 2018-38 (1).svg";
      break;
    case "Parques":
      iconPath = "markers/iconos para mapa interactivo 2018-50.svg";
      break;
    case "Plaza":
      iconPath = "markers/iconos para mapa interactivo 2018-50.svg";
      break;
    case "Discotecas y clubes nocturnos":
      iconPath = "markers/iconos para mapa interactivo 2018-40 (1).svg";
      break;
    case "Lugares de bohemia":
      iconPath = "markers/iconos para mapa interactivo 2018-40 (1).svg";
      break;
    case "Alcaldía":
      iconPath = "markers/iconos para mapa interactivo 2018-48.svg";
      break;
    case "Entidades descentralizadas":
      iconPath = "markers/iconos para mapa interactivo 2018-48.svg";
      break;
    case "Gobernación":
      iconPath = "markers/iconos para mapa interactivo 2018-48.svg";
      break;
    case "Iglesia":
      iconPath = "markers/iconos para mapa interactivo 2018-44 (2).svg";
      break;
    case "Centros de recreación":
      iconPath = "markers/iconos para mapa interactivo 2018-41 (2).svg";
      break;
    case "Infraestructura deportiva":
      iconPath = "markers/iconos para mapa interactivo 2018-41 (2).svg";
      break;
    case "Mercado artesanal":
      iconPath = "markers/iconos para mapa interactivo 2018-36 (1).svg";
      break;
    case "Producción de animaciones":
      iconPath = "markers/iconos para mapa interactivo 2018-33 (1).svg";
      break;
    case "Conversatorio":
      iconPath = "markers/iconos para mapa interactivo 2018-30 (1).svg";
      break;
    case "Interpretación":
      iconPath = "markers/iconos para mapa interactivo 2018-30 (1).svg";
      break;
    case "Moda":
      iconPath = "markers/iconos para mapa interactivo 2018-35 (1).svg";
      break;
    default:
      window.console.warn(`Pending icon for category "${str}".`);
      break;
  }
  return iconPath;
}
