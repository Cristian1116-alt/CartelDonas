/* =====================================================================
   DATOS Y TEXTOS EDITABLES DE TODO EL SITIO
   Cambia aquí números, textos, precios y fotos. Todas las páginas leen
   este archivo. Lo que diga [PENDIENTE: ...] se muestra tal cual en la
   página (resaltado en amarillo) hasta que lo reemplaces.
   ===================================================================== */

// WhatsApp de pedidos (solo números, con 57 adelante).
const WHATSAPP_PEDIDOS = "573052227062";
const WHATSAPP_PEDIDOS_VISIBLE = "+57 305 222 7062";

// WhatsApp para "Sé parte del Cártel" (quienes quieren ayudar a vender).
const WHATSAPP_UNETE = "573148765567";

const INSTAGRAM = "elcarteldelasdonas_";

const PRECIO = 5000;

// Aviso de atención y entregas.
const AVISO_ATENCION = "Atención 24/7";
const AVISO_ENTREGAS = "Pide tu domicilio el día anterior, antes de las 2:00 p. m., para confirmar disponibilidad.";
const DOMICILIO = "Domicilio: $3.000 en Cali, Palmira y Yumbo.";

// Medios de pago.
const PAGOS_TEXTO = "Nequi y efectivo.";
const PAGOS_PENDIENTE = "[PENDIENTE: confirmar medios de pago (Nequi y otros)]"; // deja "" cuando esté confirmado

// Menú (el mismo en todas las páginas).
const MENU = [
  { href: "index.html", texto: "Inicio" },
  { href: "cajas.html", texto: "Catálogo" },
  { href: "puntos.html", texto: "Puntos físicos" },
  { href: "universidades.html", texto: "Universidades" },
  { href: "donaciones.html", texto: "Nuestra labor" },
  { href: "unete.html", texto: "Sé parte" }
];

// Puntos físicos.
const PUNTOS = [
  { nombre: "Parque del Ingenio", horario: "9:30 a. m. a 1:30 a. m.", detalle: "" },
  { nombre: "Estadio", horario: "9:30 a. m. a 1:30 a. m.", detalle: "[PENDIENTE: dirección o punto de referencia]" }
];

// Universidades donde venden.
const UNIVERSIDADES = [
  "Universidad Santiago de Cali", "Universidad del Valle", "IUPC", "Universidad Camacho",
  "Bellas Artes", "ICESI", "Javeriana"
];

// Sé parte del Cártel.
const UNETE = {
  titulo: "Sé parte del Cártel",
  texto: "¿Quieres ayudarnos a vender? Escríbenos y te contamos cómo sumarte.",
  mensaje: "Hola, me interesa unirme al Cártel de las Donas y ayudar a vender.",
  pendiente: "" // si hay algo por confirmar, escríbelo aquí como "[PENDIENTE: ...]"
};

// Nuestra labor (donaciones.html). Solo muestra la labor: sin botones ni cifras.
const LABOR = {
  titulo: "Nuestra labor",
  texto: [
    "En El Cartel también compramos donas para donarlas. Creemos que compartir algo dulce es una forma sencilla de acompañar a otros.",
    "Aquí guardamos algunos momentos de esa labor."
  ]
};

// Fotos de la labor: pon los archivos en img/ con estos nombres.
// IMPORTANTE: nunca fotos con rostros de niños ni de beneficiarios, ni fotos
// que muestren la situación de alguien de forma humillante. Mejor manos, cajas, donas.
// Mientras una foto no exista, se ve un recuadro con el aviso de pendiente.
const FOTOS_LABOR = [
  { img: "img/donacion-1.jpg", pie: "Cajas listas para compartir" },
  { img: "img/donacion-2.jpg", pie: "Hechas con el mismo cariño" },
  { img: "img/donacion-3.jpg", pie: "Gracias a quienes se suman" }
];
const AVISO_FOTOS_LABOR = "[PENDIENTE: fotos de la labor]";

// Donas por sabor. Para poner la foto de un sabor, agrégala en FOTOS, por ejemplo: Arequipe: "img/arequipe.jpg".
const FOTOS = {};
const SABORES = ["Arequipe", "Chantilly", "Chocobruce", "Chocochantilly", "Chocolate", "ChocoManí", "Chocopepitas", "Fresa", "Maracuyá", "Mora"];

const PASTELES = [
  { id: "pastel-pollo", nombre: "Pastel de pollo", desc: "Hojaldre dorado relleno de pollo.", img: "img/pasteles.jpg" },
  { id: "pastel-jyq", nombre: "Pastel de jamón y queso", desc: "Hojaldre dorado relleno de jamón y queso.", img: "img/pasteles.jpg" }
];

// Cajas: se piden directo por WhatsApp, fuera del carrito.
const CAJAS = [
  { nombre: "CAJA x 6", precio: 30000, desc: "6 donas para antojarse.", img: "img/caja-x6.jpg" },
  { nombre: "CAJA x 22", precio: 100000, desc: "22 donas para la oficina o la familia.", img: "img/caja-x22.jpg" },
  { nombre: "CAJA x 30", precio: 135000, desc: "30 donas para la fiesta.", img: "img/caja-x30.jpg" },
  { nombre: "CAJA Pasteles y Donas", precio: 100000, desc: "Lo dulce y lo salado en una sola caja.", img: "img/caja-pasteles-donas.jpg" },
  { nombre: "DONATÓN x 100", precio: 430000, desc: "50 donas y 50 pasteles para eventos grandes.", img: "img/donaton-x100.jpg", destacada: true }
];
