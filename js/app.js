const eventbrite = new EventBrite();
const ui = new Interfaz();


//listener al buscador
document.getElementById('buscarBtn').addEventListener('click',(e)=>{
    e.preventDefault();

    //leer texto del input buscar

    const texto = document.getElementById('evento').value;

    const categorias = document.getElementById('listado-categorias');
    const categoriaSelec = categorias.options[categorias.selectedIndex].value;

    
    //realizar validacion del input

    if (texto !== '') {
        eventbrite.obtenerEventos(texto,categoriaSelec)
            .then(eventos=>{
                if (eventos.eventos.events.length>0) {
                    ui.limpiarResultados();
                    ui.mostrarEventos(eventos.eventos)
                }else{
                    ui.mostrarMensaje('No hay resultados','alert alert-info mt-4')
                }
                
            })
            
    }else{
        //mostrar mensjae de error
        ui.mostrarMensaje('Escribe algo para buscar', 'alert alert-danger mt-4')
    }


})