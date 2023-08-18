//ubicamos elementos dentro del DOM
const css = document.querySelector('link[href="css/light.css"]');
/* const toogle = document.querySelector('.material-symbols-outlined');*/
const boton = document.querySelector('#switcher span');

let modo = 'light';

function themeSwitcher()
{
    if( modo == 'light' ){
        //cambiamos hoja de estilos a dark
        css.href= 'css/dark.css';

        //cambiamos el botoncito
        boton.innerText = 'toggle_off';

        //cambiamos el flag
        modo = 'dark';
    }
    else{
        //cambiamos hoja de estilos a light
        css.href= 'css/light.css';

        //cambiamos el botoncito
        boton.innerText = 'toggle_on';

        //cambiamos el flag
        modo = 'light';
    }
}

boton.addEventListener(
        'click',
        function(){
            themeSwitcher();
        }
);