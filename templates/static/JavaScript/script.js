mario = document.querySelector('.mario'); /*No regresara la clase que tendremos creada en css.*/
pipe = document.querySelector('.pipe'); /*No regresara la clase que tendremos creada en css.*/
grass = document.querySelector('.grass'); /*No regresara la clase que tendremos creada en css.*/
textStart = document.querySelector('text-start')
audioStart = new Audio('static/audio/theme.mp3') /*Con este llamado tendremos el audio de inicio del juego.*/
audioGameOver = new Audio('static/audio/gameover.mp3') /*Con este llamado al momento de fallar, tendra un audio diferente del principal.*/
floor1 = document.querySelector('.floor-1') /*No regresara la clase que tendremos creada en css.*/
floor2 = document.querySelector('.floor-2') /*No regresara la clase que tendremos creada en css.*/
floor3 = document.querySelector('.floor-3') /*No regresara la clase que tendremos creada en css.*/



/*================ Funcion de Inicio del Juego ===================*/ 

const start = () => { /*Con esta constante inicializaremos el juego.*/

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)"; /*En esta seccion nos llamara al texto que tenemos en el Html y al momento de iniciar la partida este desaparecera.*/

    pipe.classList.add('pipe-animation'); /*Tendremos el llamado de la animacion del tubo.*/

    mario.src="/static/Img/mario.gif"; /*Con esta nos llamara a la imagen que tenemos en gif, ademas de estilos.*/
    mario.style.width = '150px';
    mario.style.marginLeft = '50px';

    function grassAnimation(){ /*Crearemos una funcion la cual haga el llamdo de la animacion de la graba, con su tiempo respectivo.*/
        grass.classList.add('grass-animation');
            }setInterval(grassAnimation, 8000);


    function floorAnimation1(){ /*Crearemos una funcion las cuales hara el llamado de las tres animaciones de nuestro suelo.*/
        floor1.classList.add('floor-animation-1');
            }setInterval(floorAnimation1, 0);

    function floorAnimation2(){
        floor2.classList.add('floor-animation-2');
            }setInterval(floorAnimation2, 0);
                           
    function floorAnimation3(){
        floor3.classList.add('floor-animation-3');
            }setInterval(floorAnimation3, 3100); 
          
    audioStart.play(); /*Aqui inicializara la musica que llamamos en la parte superior.*/
}

document.addEventListener('keydown', start); /*Aqui al aplastar cualquier tecla iniciara el juego.*/



/*================ Funcion de Salto ===================*/ 

const jump = () => { /*Con esta constante haremos el llamado de nuestra funcion de salto*/
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500); 
}

document.addEventListener('keydown', jump); /*Aqui al aplastar cualquier tecla el personaje saltara.*/



/*================ Código para acabar el juego ===================*/ 

const checkGameOver = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /*Concatenamos y remplazamos las cadenas con los pixeles*/
    const grassPosition = grass.offsetLeft;                                         /*el personaje tendra ya tendra un bloqueo el cual cumple la funcion*/
    const floorPosition1 = floor1.offsetLeft;
    const floorPosition2 = floor2.offsetLeft;
    const floorPosition3 = floor3.offsetLeft;

   
    /*Con esta condicional comprobamos si el salto es mas pequeño que 80 pixeles*/    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {

            pipe.style.animation = 'none'; /*Definiremos para que se detenga la animacion del tubo*/
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none'; /*Definiremos para que se detenga la animacion del personaje*/
            mario.style.bottom = `${marioPosition}px`; 

            mario.src = '/static/Img/game-over.png'; /*Cuando toca el tubo y pierde esta cambia de imagen a la que definimos como game-over*/
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            grass.style.animation = 'none'; /*Definiremos para que se detenga la animacion de la grama*/
            grass.style.left = `${grassPosition}px`;

            floor1.style.animation = 'none'; /*Definiremos para que se detenga la animacion del suelo*/
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none'; /*Definiremos para que se detenga la animacion del suelo*/
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none'; /*Definiremos para que se detenga la animacion del suelo*/
            floor3.style.left = `${floorPosition3}px`;

            document.getElementById("text-start").style.color = "black"; /*Volvremos a llamar al texto pero en esta ocuacion con un texto difernte.*/
            document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";


            function stopAudioStart(){ /*Funcion para el audio*/
                audioStart.pause();
                }stopAudioStart();

            audioGameOver.play(); /*Se reproducira la musica de Game Over.*/

            function stopAudio(){ /*Despues que haya fallado el la musica se detendra.*/
                audioGameOver.pause();
                }setTimeout(stopAudio, 8000);

            clearInterval(checkGameOver);
         }
}, 10);

