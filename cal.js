function display(value) {
    var screen = document.getElementById('res');
    screen.value += value;
    screen.scrollLeft = screen.scrollWidth; // Scroll to the end
}

function solve() {
    var screen = document.getElementById('res');
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
    // screen.scrollLeft = screen.scrollWidth; // Scroll to the end
}

function clearScreen() {
    var screen = document.getElementById('res');
    screen.value = '';
}
