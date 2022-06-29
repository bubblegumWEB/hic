const subsidiariaCaja = document.querySelectorAll(".main__subsidiarias-caja");
const subsidiariaCajaInfo = document.querySelectorAll(
  ".main__subsidiarias-caja__moreinfo"
);
const subsidiariaCajaCerrar = document.querySelectorAll(
  ".main__subsidiarias-caja__moreinfo-botoncerrar"
);

subsidiariaCaja.forEach((caja) => {
  caja.addEventListener("click", (e) => {
    subsidiariaCajaInfo.forEach((cajaInfo) => {
      if (e.target.id === cajaInfo.dataset.cajainfo) {
        cajaInfo.classList.remove("d-none");
      }
      subsidiariaCajaCerrar.forEach((butoncerrar) => {
        butoncerrar.addEventListener("click", () => {
          cajaInfo.classList.add("d-none");
        });
      });
    });
  });
});
