const PROJSON = "https://jsonplaceholder.typicode.com/posts"

$("body").prepend('<button id="btn1">JSON</button>');

$("#btn1").click(() => { 
$.getJSON(PROJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.id}</h3>
                                <p> ${dato.title}</p>
                            </div>`)
      }  
    }
    });
});
