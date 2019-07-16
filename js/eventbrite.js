class EventBrite{

    constructor(){
        this.token = 'BHIGI6GZXM4G5PDZR6GU';
        this.ordenar = 'date';
    }

    async obtenerEventos(txt,cate){
        const respuesta = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${txt}&sort_by=${this.ordenar}&categories=${cate}&token=${this.token}`);

        const eventos = await respuesta.json();

        return {
            eventos
        }
    }


    //obtener categorias en init()
    async obtenerCategorias(){
        //consultar las categorias a las rest api de event brite
        const respuestaCat = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token}`);

        //esperar respuesta con devolucion de json
        const categorias = await respuestaCat.json();

        return {
            categorias
        }
    }



}



/*Clave secreta de cliente
SA6THNF4IZF34IOYTIVPTBNNBJQ7EM3JZQSGJZBETGVQFMLZTF
Private API key
BHIGI6GZXM4G5PDZR6GU
Public API key
BBRB6L2QT3FC6SMY6VGM*/
