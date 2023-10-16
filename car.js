window.onload = function () {
    const IMAGENES = [
        'images/ed.jpeg',
        'images/meli.jpg',
        'images/Falling.jpeg',
        'images/inge.jpg', 
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');
    }

    function stopIntervalo() {
        clearInterval(intervalo);
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    function mostrarEnGrande() {
        const imagenGrande = new Image();
        imagenGrande.src = IMAGENES[posicionActual];
        const ventana = window.open("", "Imagen en grande", "width=450,height=500");
        ventana.document.write(imagenGrande.outerHTML);
    }

    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    document.querySelector('#mostrarEnGrande').addEventListener('click', mostrarEnGrande);

    renderizarImagen();
}

