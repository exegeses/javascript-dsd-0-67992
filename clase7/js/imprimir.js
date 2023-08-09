//ubicamos elementos dentro del DOM
const contenedor = document.querySelector('#contenedor');
const btnTexto = document.querySelector('#btnTexto');
const btnImagen = document.querySelector('#btnImagen');

btnTexto.addEventListener
        (
            'click',
            function(){
                contenedor.innerText = 'texto generado';
            }
        );

btnImagen.addEventListener
        (
            'click',
            function()
            {
                contenedor.innerHTML = '<img src="imgs/js.png">';
            }
        );