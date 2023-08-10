//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function cuentaRegresiva()
{
    //creamos objeto de fecha
    const ahora = new Date();
    const final = new Date(2023, 7, 12);
    console.log('ahora sin convertir ' + ahora  );
    console.log('ahora en milisegundos: ' + ahora.getTime()  );
    console.log('final en milisegundos: ' + final.getTime()  );

    //diferencia entre los momentos
    let diferencia = final - ahora;
    console.log(diferencia);
    /*
        el resultado de la diferencia
        es un número expresado en 
        formato UNIX TIMESTAMP
        - el tiempo expresado en milisegundos
        - desde el 01/01/1970
     */

    //obtenemos el tiempo expresado en segundos
    let segundos = Math.trunc( diferencia/1000 );
    console.log(segundos);

    //obtenemos el tiempo expresado en minutos
    let minutos = Math.trunc( segundos/60 );
    console.log(minutos);

    //obtenemos el tiempo expresado en horas
    let horas = Math.trunc( minutos/60 );
    console.log( horas );

    //obtenemos el tiempo expresado en días
    let dias = Math.trunc( horas/24 );
    console.log( dias );

    /* calculamos erl resto en horas, minutos y segundos */
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

    //ceros iniciales
    // segundos = agregarCero(segundos);
    // minutos = agregarCero(minutos);
    // horas = agregarCero(horas);
    // dias = agregarCero(dias);

    /* imprimimos en las span */
    txtDias.innerText = agregarCero(dias);
    txtHoras.innerText = agregarCero(horas);
    txtMinutos.innerText = agregarCero(minutos);
    txtSegundos.innerText = agregarCero(segundos);;

}

function agregarCero( numero )
{
    if( numero < 10 ){
        numero = '0' + numero;
    }
    return numero;
}

cuentaRegresiva();
setInterval( cuentaRegresiva );