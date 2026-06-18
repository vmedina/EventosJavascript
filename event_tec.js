document.addEventListener('keydown', function(event) {
    document.getElementById('resultado').textContent = 'Tecla presionada: ' + event.key;
    });

    document.addEventListener('keyup', function(event) {
    document.getElementById('resultado').textContent = 'Tecla soltada: ' + event.key;
    });