// Função para tornar os elementos arrastáveis apenas dentro de um retângulo específico
function makeDraggable(element, container) {
    let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

    element.onmousedown = function(e) {
        e.preventDefault();
        
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

        // Calcula a nova posição do quadrado
        let newLeft = element.offsetLeft + offsetX;
        let newTop = element.offsetTop + offsetY;

        // Limita a posição do quadrado dentro do container pai
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft + elementRect.width > containerRect.width) newLeft = containerRect.width - elementRect.width;
        if (newTop + elementRect.height > containerRect.height) newTop = containerRect.height - elementRect.height;

        // Move o quadrado
        element.style.left = newLeft + "px";
        element.style.top = newTop + "px";
    }

    function onMouseUp() {
        // Remove os eventos quando o mouse é liberado
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// Aplica a função makeDraggable para cada quadrado e o respectivo container
makeDraggable(document.querySelector('.small-image1'), document.querySelector('.gradient-rectangle:nth-child(1)'));
makeDraggable(document.querySelector('.small-image2'), document.querySelector('.gradient-rectangle:nth-child(2)'));
makeDraggable(document.querySelector('.small-image3'), document.querySelector('.gradient-rectangle:nth-child(3)'));
makeDraggable(document.querySelector('.small-image4'), document.querySelector('.gradient-rectangle:nth-child(4)'));
