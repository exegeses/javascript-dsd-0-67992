//ubicamos elemento/s dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');
const botones = document.querySelectorAll('nav button');

//declaramos función/es de control
function hide()
{
    caja.style.display = 'none';
}

function show()
{
    caja.style.display = 'block';
}

/* hacemos que el segundo botón ejecute una función
 en el evento click */
botones[1].addEventListener( 
            'click', 
            function()
            {
                show();
            } 
        );



