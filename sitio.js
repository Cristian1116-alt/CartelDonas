/* Comportamiento compartido: menú, pie de página, pendientes visibles y animaciones.
   No hace falta editar este archivo; los textos están en datos.js. */
document.documentElement.classList.add("js");

const $ = id => document.getElementById(id);
const pesos = n => "$" + n.toLocaleString("es-CO");
const waLink = (numero, texto) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const conPendientes = s => esc(s).replace(/\[PENDIENTE:[^\]]*\]/g, m => `<mark class="pendiente">${m}</mark>`);

// Menú compartido
(function menu() {
  const top = document.querySelector("header.top");
  if (!top) return;
  const actual = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
  const links = MENU.map(m => {
    const activo = m.href.replace(/\.html$/, "") === actual;
    return `<a href="${m.href}"${activo ? ' aria-current="page"' : ""}>${esc(m.texto)}</a>`;
  }).join("");
  top.innerHTML = `
    <div class="wrap">
      <a class="marca" href="index.html"><b>El Cartel <span>de las Donas</span></b></a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-principal">
        <span class="hamburguesa" aria-hidden="true"><i></i><i></i><i></i></span> Menú
      </button>
      <nav id="menu-principal" aria-label="Secciones">${links}</nav>
    </div>`;
  const btn = top.querySelector(".menu-btn");
  const cerrar = () => { top.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const abierto = top.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", String(abierto));
  });
  top.querySelectorAll("nav a").forEach(a => a.addEventListener("click", cerrar));
  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
  document.addEventListener("click", e => { if (!top.contains(e.target)) cerrar(); });
})();

// Pie de página compartido
(function pie() {
  const f = document.querySelector("footer.pie");
  if (!f) return;
  f.innerHTML = `
    <div class="wrap">
      <span>UNIDOS · El Cartel de las Donas</span>
      <span><a href="https://instagram.com/${INSTAGRAM}" target="_blank" rel="noopener">@${INSTAGRAM}</a> · WhatsApp ${esc(WHATSAPP_PEDIDOS_VISIBLE)}</span>
      <span>Hoy, cada dona cuenta.</span>
    </div>`;
})();

// Animación al aparecer en pantalla (llamar después de pintar el contenido de la página)
function animarEntradas() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { reveals.forEach(el => el.classList.remove("reveal")); return; }
  const io = new IntersectionObserver(entradas => entradas.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("visible");
    io.unobserve(el);
    // Al terminar la entrada, el elemento vuelve a sus propias transiciones (hover rápido).
    setTimeout(() => el.classList.remove("reveal", "visible"), 800 + (parseInt(el.style.getPropertyValue("--d")) || 0));
  }), { rootMargin: "0px 0px -8% 0px" });
  reveals.forEach(el => io.observe(el));
}
