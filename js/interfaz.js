class Interfaz{
    constructor(){
        this.init();
        this.listado = document.getElementById('resultado-eventos');
    }
    init(){
        this.imprimirCategorias();
    }
    imprimirCategorias(){
        const lista = eventbrite.obtenerCategorias()
        .then(categorias=>{
            //console.log(categorias);
            const cats = categorias.categorias.categories;


            const selectCategorias = document.getElementById('listado-categorias');

            cats.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.id;
                option.appendChild(document.createTextNode(cat.name_localized));

                selectCategorias.appendChild(option);
            });
        })
    }
    //leer respuesta de api y renderizar resultados
    mostrarEventos(eventos){
        //leer eventos y agregar
        const listado = eventos.events;
        this.limpiarResultados();
        //recorrer con foreach
        listado.forEach(evento=>{
            this.listado.innerHTML+=
            `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${evento.logo !==null ? evento.logo.url:''} ">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Informacion del evento</p>
                                <p>${evento.description.text.substring(0,200)}...</p>
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Horario: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
    }

    //metodo que imprime los msjs
    mostrarMensaje(msj,clase){
        const div = document.createElement('div');

        div.classList = clase;
        div.appendChild(document.createTextNode(msj));

        const buscadorDiv = document.getElementById('buscador');
        buscadorDiv.appendChild(div);

        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }
    limpiarResultados(){
        this.listado.innerHTML = '';
    }

    //borrar el msj
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

}