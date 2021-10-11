const PROJSON = "https://germanrtouron.github.io/productos/productos.json"

$.getJSON(PROJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("#productosContent").append(`<div class="tarjetaProducto col">
                                <img src="${dato.imagen}"></img>
                                <h4>${dato.nombre}</h4>
                                <ul>
                                  <li>${dato.desc}</li>
                                </ul>
                                <h5>Precio de lista: $ ${dato.precio}</h5>
                                <button type="button" class="btn btn-primary" id="btnAdidasSuperstar">Agregar al carrito</button>
                            </div>`)
      }  
    }
    });