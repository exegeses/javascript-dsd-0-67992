//ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

//### botones
const btnRedbull = document.querySelectorAll('a');
const btnFerrari = document.querySelectorAll('a');
const btnAmartin = document.querySelectorAll('a');
const btnMercedes = document.querySelectorAll('a');

/* estado inicaial: ocultamos los div ferrari, amartin, mercedes */
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

btnRedbull[0].addEventListener(
        'click',
        function(){
            redbull.style.display = 'flex';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);

btnFerrari[1].addEventListener(
            'click',
            function(){
                redbull.style.display = 'none';
                ferrari.style.display = 'flex';
                amartin.style.display = 'none';
                mercedes.style.display = 'none';
            }
);

btnAmartin[2].addEventListener(
        'click',
        function(){
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'flex';
            mercedes.style.display = 'none';
        }
);

btnMercedes[3].addEventListener(
        'click',
        function(){
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'flex';
        }
);