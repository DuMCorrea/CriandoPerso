// Função para tornar os elementos arrastáveis
function makeDraggable(element) {
    let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

    element.onmousedown = function(e) {
        e.preventDefault();
        
        // Defina a posição como absoluta, se ainda não estiver
        if (window.getComputedStyle(element).position !== 'absolute') {
            element.style.position = 'absolute';
        }
        
        // Pega a posição inicial do mouse
        startX = e.clientX;
        startY = e.clientY;
        
        // Adiciona os eventos de movimento e soltura do mouse
        document.onmousemove = onMouseMove;
        document.onmouseup = onMouseUp;
    };

    function onMouseMove(e) {
        e.preventDefault();
        
        // Calcula o deslocamento
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;
        
        // Atualiza a posição inicial para a nova posição do mouse
        startX = e.clientX;
        startY = e.clientY;
        
        // Move o elemento
        element.style.top = (element.offsetTop + offsetY) + "px";
        element.style.left = (element.offsetLeft + offsetX) + "px";
    }

    function onMouseUp() {
        // Remove os eventos quando o mouse é liberado
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// Aplica a função makeDraggable para cada quadrado
makeDraggable(document.querySelector('.small-image1'));
makeDraggable(document.querySelector('.small-image2'));
makeDraggable(document.querySelector('.small-image3'));
makeDraggable(document.querySelector('.small-image4'));
