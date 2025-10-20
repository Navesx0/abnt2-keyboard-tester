document.addEventListener('keydown', function(event) {
    // Verifica a tecla 44 (PrintScreen) ou o código 'PrintScreen'
    if (event.key === 'PrintScreen' || event.keyCode === 44) {
        console.log("Tentativa de PrintScreen detectada.");
        event.preventDefault(); // Tenta bloquear a ação
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Testador de Teclado Carregado.");

    // Mapeamento do event.code para o seletor CSS do elemento da tecla
    // O event.code representa a tecla física, o que é mais confiável
    const keyMap = {
        'Escape': '.esc',
        'F1': '.f-key:nth-of-type(1) .fkey:nth-child(1)',
        'F2': '.f-key:nth-of-type(1) .fkey:nth-child(2)',
        'F3': '.f-key:nth-of-type(1) .fkey:nth-child(3)',
        'F4': '.f-key:nth-of-type(1) .fkey:nth-child(4)',
        'F5': '.f-key:nth-of-type(2) .fkey:nth-child(1)',
        'F6': '.f-key:nth-of-type(2) .fkey:nth-child(2)',
        'F7': '.f-key:nth-of-type(2) .fkey:nth-child(3)',
        'F8': '.f-key:nth-of-type(2) .fkey:nth-child(4)',
        'F9': '.f-key:nth-of-type(3) .fkey:nth-child(1)',
        'F10': '.f-key:nth-of-type(3) .fkey:nth-child(2)',
        'F11': '.f-key:nth-of-type(3) .fkey:nth-child(3)',
        'F12': '.f-key:nth-of-type(3) .fkey:nth-child(4)',
        '44': '.print-screen',
        'ScrollLock': '.scroll-lock',
        'Pause': '.pause',

        'Backquote': '.row:nth-of-type(2) .key:nth-child(1)', // ' ou "
        'Digit1': '.row:nth-of-type(2) .key:nth-child(2)',
        'Digit2': '.row:nth-of-type(2) .key:nth-child(3)',
        'Digit3': '.row:nth-of-type(2) .key:nth-child(4)',
        'Digit4': '.row:nth-of-type(2) .key:nth-child(5)',
        'Digit5': '.row:nth-of-type(2) .key:nth-child(6)',
        'Digit6': '.row:nth-of-type(2) .key:nth-child(7)',
        'Digit7': '.row:nth-of-type(2) .key:nth-child(8)',
        'Digit8': '.row:nth-of-type(2) .key:nth-child(9)',
        'Digit9': '.row:nth-of-type(2) .key:nth-child(10)',
        'Digit0': '.row:nth-of-type(2) .key:nth-child(11)',
        'Minus': '.row:nth-of-type(2) .key:nth-child(12)',
        'Equal': '.row:nth-of-type(2) .key:nth-child(13)',
        'Backspace': '.backspace',

        'Tab': '.tab',
        'KeyQ': '.row:nth-of-type(3) .key:nth-child(2)',
        'KeyW': '.row:nth-of-type(3) .key:nth-child(3)',
        'KeyE': '.row:nth-of-type(3) .key:nth-child(4)',
        'KeyR': '.row:nth-of-type(3) .key:nth-child(5)',
        'KeyT': '.row:nth-of-type(3) .key:nth-child(6)',
        'KeyY': '.row:nth-of-type(3) .key:nth-child(7)',
        'KeyU': '.row:nth-of-type(3) .key:nth-child(8)',
        'KeyI': '.row:nth-of-type(3) .key:nth-child(9)',
        'KeyO': '.row:nth-of-type(3) .key:nth-child(10)',
        'KeyP': '.row:nth-of-type(3) .key:nth-child(11)',
        'BracketLeft': '.row:nth-of-type(3) .key:nth-child(12)', // ´ ou `
        'BracketRight': '.row:nth-of-type(3) .key:nth-child(13)',// [ ou {
        'Enter': '.enter',

        'CapsLock': '.capslock',
        'KeyA': '.row4 .key:nth-child(2)',
        'KeyS': '.row4 .key:nth-child(3)',
        'KeyD': '.row4 .key:nth-child(4)',
        'KeyF': '.row4 .key:nth-child(5)',
        'KeyG': '.row4 .key:nth-child(6)',
        'KeyH': '.row4 .key:nth-child(7)',
        'KeyJ': '.row4 .key:nth-child(8)',
        'KeyK': '.row4 .key:nth-child(9)',
        'KeyL': '.row4 .key:nth-child(10)',
        'Semicolon': '.row4 .key:nth-child(11)', // Ç
        'Quote': '.row4 .key:nth-child(12)', // ~ ou ^
        'Backslash': '.row4 .key:nth-child(13)', // ] ou } -> No seu HTML está na quarta linha

        'ShiftLeft': '.left-shift',
        'IntlBackslash': '.row:nth-of-type(5) .key:nth-child(2)', // \ ou |
        'KeyZ': '.row:nth-of-type(5) .key:nth-child(3)',
        'KeyX': '.row:nth-of-type(5) .key:nth-child(4)',
        'KeyC': '.row:nth-of-type(5) .key:nth-child(5)',
        'KeyV': '.row:nth-of-type(5) .key:nth-child(6)',
        'KeyB': '.row:nth-of-type(5) .key:nth-child(7)',
        'KeyN': '.row:nth-of-type(5) .key:nth-child(8)',
        'KeyM': '.row:nth-of-type(5) .key:nth-child(9)',
        'Comma': '.row:nth-of-type(5) .key:nth-child(10)',
        'Period': '.row:nth-of-type(5) .key:nth-child(11)',
        'Slash': '.row:nth-of-type(5) .key:nth-child(12)',
        'ShiftRight': '.right-shift',

        'ControlLeft': '.left-ctrl',
        'MetaLeft': '.win:nth-child(2)', // Windows Key
        'AltLeft': '.left-alt',
        'Space': '.space',
        'AltRight': '.right-alt',
        'MetaRight': '.win:nth-child(6)', // Windows Key
        'ContextMenu': '.menu',
        'ControlRight': '.right-ctrl',

        // Teclas de navegação
        'Insert': '.insert',
        'Home': '.home',
        'PageUp': '.page-up',
        'Delete': '.mid .line-key div:nth-child(3) .key:nth-child(1)',
        'End': '.mid .line-key div:nth-child(3) .key:nth-child(2)',
        'PageDown': '.mid .line-key div:nth-child(3) .key:nth-child(3)',

        'ArrowUp': '.arrow-up',
        'ArrowLeft': '.arrow-left',
        'ArrowDown': '.arrow-down',
        'ArrowRight': '.arrow-right',

        // Teclado Numérico
        'NumLock': '.numlock',
        'NumpadDivide': '.num-divide',
        'NumpadMultiply': '.num-multiply',
        'NumpadSubtract': '.num-subtract',
        'Numpad7': '.num-7',
        'Numpad8': '.num-8',
        'Numpad9': '.num-9',
        'NumpadAdd': '.num-add',
        'Numpad4': '.num-4',
        'Numpad5': '.num-5',
        'Numpad6': '.num-6',
        'Numpad1': '.num-1',
        'Numpad2': '.num-2',
        'Numpad3': '.num-3',
        'Numpad0': '.num-0',
        'NumpadDecimal': '.num-decimal',
        'NumpadEnter': '.num-enter'
    };

    document.addEventListener('keydown', (event) => {
        // Impede a ação padrão de algumas teclas no navegador (como F5 recarregar a página)
        event.preventDefault();

        // Constrói o seletor para encontrar o elemento com o data attribute correspondente ao código da tecla pressionada
        const selector = `[data-key-code="${event.code}"]`;
        const keyElement = document.querySelector(selector);

        if (keyElement) {
            // Se encontrou o elemento, adiciona a classe .pressed para mudar a cor
            keyElement.classList.add('pressed');
        } else {
            // Se não encontrou, mostra no console qual tecla não foi mapeada no HTML.
            // Isso ajuda a encontrar o código de outras teclas que você queira adicionar.
            console.log(`Tecla não mapeada no HTML: ${event.code}`);
        }
    });
});

document.addEventListener('keydown', (event) => {
    // 1. Pega o código da tecla pressionada
    const keyCode = event.code;

    // 2. Localiza o elemento DIV correspondente
    // Observe que a query agora procura múltiplos códigos
    const keyElement = document.querySelector(
        `[data-key-code="${keyCode}"]`
    );

    if (keyElement) {
        // Trata a tecla normalmente
        keyElement.classList.add('active');
        console.log(`Tecla ${keyCode} pressionada.`);
    }
});