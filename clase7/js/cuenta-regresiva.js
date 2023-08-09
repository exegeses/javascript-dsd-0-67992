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
    
}

cuentaRegresiva();