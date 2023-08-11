const span = document.querySelector('#contenedor span');
const botones = document.querySelectorAll('#contenedor img');

const prev = botones[0];
const next = botones[1];

const marcas = [
                'Hermes', 'Zara',
                'Boss', 'Aeropostale',
                'Tommy', 'Hollister',
                'Kinping', 'Old Navy'
                ]

let posicion = 0;
//mostrar la primera marca
span.innerText = marcas[ posicion ];

next.addEventListener(
        'click',
        function()
        {
            posicion++;//posicion = posicion + 1;
            if( posicion > 7 ){
                posicion = 0;
            }
            span.innerText = marcas[ posicion ];
        }
);

prev.addEventListener(
            "click", 
            function(){
                    posicion--; 
                    if (posicion < 0) {
                            posicion = 7;
                    }
                    span.innerText = marcas[posicion];
            }
);