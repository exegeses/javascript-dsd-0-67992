//ubicamos elemento dentro del DOMO
const txt = document.querySelector('#txt');

/***
 * mostrar reloj digital
 * formato    20:19:45
 */

//declaramos función
function hora()
{
    //creamos objeto de fecha
    const fecha = new Date();

    //obtenemos el número de las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas;
    }

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }


    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

hora();
//actualizamos el llamado a la fuinción hora
setInterval( hora, 1000 );