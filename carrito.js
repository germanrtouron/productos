//---------------------------------------------------------
//---------------------VARIABLES---------------------------
//---------------------------------------------------------
//-----VARIABLE PRECIO TOTAL DE CARRITO
totalSuma = 0;
idDivCarritoElement = 100;
//-------------ELEMENTOS DEL DOM---------
//-----TEXTO "CARRITO VACIO" DEL CARRITO
carritoVacio = document.getElementById("carritoVacio");
//-----DIV DONDE SE ENLISTAN LOS ITEMS DEL CARRITO
popupItems = document.getElementById("popupItems");
//-----ELEMENTOS DEL TOTAL DEL CARRITO
totalCarritoElement = document.getElementById("totalCarrito");
resultadoTotalCarritoElement = document.getElementById("resultadoTotalCarrito");
//---------------------------------------------------------
//---------------------ARRRAYS-----------------------------
//---------------------------------------------------------
//-----ARRAY CARRITO
carrito = [];
//---------------------------------------------------------
//---------------------FUNCIONES---------------------------
//---------------------------------------------------------
//-----FUNCION SUMAR PRECIOS AL CARRITO
const sumarPrecio = x => totalSuma = totalSuma + x;
//-----FUNCION SUMAR ITEMS AL CARRITO
function carritoNombre (a) {
    let articulo = document.createElement("p");
    articulo.innerHTML = `Producto: ${a} (1)`;
    popupItems.appendChild(articulo);
}
function carritoPrecio (p) {
    let articulo = document.createElement("p");
    articulo.innerHTML = `Precio: $${p}`;
    articulo.style.fontWeight = 600;
    popupItems.appendChild(articulo);
}
function carritoImg (img) {
    let imagen = document.createElement("img");
    imagen.src = img;
    popupItems.appendChild(imagen);
}
//-----FUNCION VACIAR CARRITO
function vaciarCarrito () {
    carrito = [];
    totalSuma = 0;
    popupItems.parentNode.removeChild(popupItems);
    let items = document.createElement("div");
    items.setAttribute("id", "popupItems");
    popupItems = items;
    popupCont.appendChild(items);
    carritoVacio.style.display = "block";
    totalCarritoElement.style.display = "none";
    btnVaciarCarrito.style.display = "none";
    btnComprarCarrito.style.display = "none";
}
//---------------------------------------------------------
//------------------EVENTOS DE BOTONES---------------------
//---------------------------------------------------------
//-----VACIAR CARRITO
btnVaciarCarrito.onclick = () => {
    vaciarCarrito();
}
btnComprarCarrito.onclick = () => {
    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
    location.href = "resumenCarrito.html";
}
//---------------------------------------------------------
//------------------COMPRAR CARRITO------------------------
//---------------------------------------------------------
//-----AGREGAR AL CARRITO
function btnClickAgregar() {
    console.log();
    sumarPrecio();
    carrito.push();
};
//-----ZAPATILLAS
btnAdidasSuperstar.onclick = () => {
    carrito.push(adidasSuperstar);
    sumarPrecio(adidasSuperstar.precio);
    carritoImg(adidasSuperstar.imagen);
    carritoNombre(adidasSuperstar.nombre);
    carritoPrecio(adidasSuperstar.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnNikeAirmax270.onclick = () => {
    carrito.push(nikeAirmax270);
    sumarPrecio(nikeAirmax270.precio);
    carritoImg(nikeAirmax270.imagen);
    carritoNombre(nikeAirmax270.nombre);
    carritoPrecio(nikeAirmax270.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnPumaFlyerRunner.onclick = () => {
    carrito.push(pumaFlyerRunner);
    sumarPrecio(adidasSuperstar.precio);
    carritoImg(pumaFlyerRunner.imagen);
    carritoNombre(pumaFlyerRunner.nombre);
    carritoPrecio(pumaFlyerRunner.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnNikeJordanMax200.onclick = () => {
    carrito.push(nikeJordanMax200);
    sumarPrecio(nikeJordanMax200.precio);
    carritoImg(nikeJordanMax200.imagen);
    carritoNombre(nikeJordanMax200.nombre);
    carritoPrecio(nikeJordanMax200.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
//-----PANTALONES
btnPantAdidasAdiColor.onclick = () => {
    carrito.push(pantAdidasAdiColor);
    sumarPrecio(pantAdidasAdiColor.precio);
    carritoImg(pantAdidasAdiColor.imagen);
    carritoNombre(pantAdidasAdiColor.nombre);
    carritoPrecio(pantAdidasAdiColor.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnPantAdidasTiro.onclick = () => {
    carrito.push(pantAdidasTiro);
    sumarPrecio(pantAdidasTiro.precio);
    carritoImg(pantAdidasTiro.imagen);
    carritoNombre(pantAdidasTiro.nombre);
    carritoPrecio(pantAdidasTiro.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnPantPumaIntlGame.onclick = () => {
    carrito.push(pantPumaIntlGame);
    sumarPrecio(pantPumaIntlGame.precio);
    carritoImg(pantPumaIntlGame.imagen);
    carritoNombre(pantPumaIntlGame.nombre);
    carritoPrecio(pantPumaIntlGame.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnPantNikeSportsWear.onclick = () => {
    carrito.push(pantNikeSportsWear);
    sumarPrecio(pantNikeSportsWear.precio);
    carritoImg(pantNikeSportsWear.imagen);
    carritoNombre(pantNikeSportsWear.nombre);
    carritoPrecio(pantNikeSportsWear.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
//-----REMERAS
btnRemAdidasAeroReady.onclick = () => {
    carrito.push(remAdidasAeroReady);
    sumarPrecio(remAdidasAeroReady.precio);
    carritoImg(remAdidasAeroReady.imagen);
    carritoNombre(remAdidasAeroReady.nombre);
    carritoPrecio(remAdidasAeroReady.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnRemAdidasMFiCamoTee.onclick = () => {
    carrito.push(remAdidasMFiCamoTee);
    sumarPrecio(remAdidasMFiCamoTee.precio);
    carritoImg(remAdidasMFiCamoTee.imagen);
    carritoNombre(remAdidasMFiCamoTee.nombre);
    carritoPrecio(remAdidasMFiCamoTee.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnRemNikeFutura.onclick = () => {
    carrito.push(remNikeFutura);
    sumarPrecio(remNikeFutura.precio);
    carritoImg(remNikeFutura.imagen);
    carritoNombre(remNikeFutura.nombre);
    carritoPrecio(remNikeFutura.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnRemPumaAvenir.onclick = () => {
    carrito.push(remPumaAvenir);
    sumarPrecio(remPumaAvenir.precio);
    carritoImg(remPumaAvenir.imagen);
    carritoNombre(remPumaAvenir.nombre);
    carritoPrecio(remPumaAvenir.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnRemFilaStorm.onclick = () => {
    carrito.push(remFilaStorm);
    sumarPrecio(remFilaStorm.precio);
    carritoImg(remFilaStorm.imagen);
    carritoNombre(remFilaStorm.nombre);
    carritoPrecio(remFilaStorm.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
//-----ACCESORIOS
btnPelotaAdidasArgentina.onclick = () => {
    carrito.push(pelotaAdidasArgentina);
    sumarPrecio(pelotaAdidasArgentina.precio);
    carritoImg(pelotaAdidasArgentina.imagen);
    carritoNombre(pelotaAdidasArgentina.nombre);
    carritoPrecio(pelotaAdidasArgentina.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnEspinillerasAdidasPredator20.onclick = () => {
    carrito.push(espinillerasAdidasPredator20);
    sumarPrecio(espinillerasAdidasPredator20.precio);
    carritoImg(espinillerasAdidasPredator20.imagen);
    carritoNombre(espinillerasAdidasPredator20.nombre);
    carritoPrecio(espinillerasAdidasPredator20.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnGuantesAdidasPredator.onclick = () => {
    carrito.push(guantesAdidasPredator);
    sumarPrecio(guantesAdidasPredator.precio);
    carritoImg(guantesAdidasPredator.imagen);
    carritoNombre(guantesAdidasPredator.nombre);
    carritoPrecio(guantesAdidasPredator.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
btnBolsoAdidasTiro.onclick = () => {
    carrito.push(bolsoAdidasTiro);
    sumarPrecio(bolsoAdidasTiro.precio);
    carritoImg(bolsoAdidasTiro.imagen);
    carritoNombre(bolsoAdidasTiro.nombre);
    carritoPrecio(bolsoAdidasTiro.precio);
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}