// Variables
let display = document.getElementById('display');
let historyList = document.getElementById('historyList');

// Función para agregar texto al display
function addToDisplay(value) {
    display.value += value;
}

// Función para realizar el cálculo y mostrar el resultado
function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        saveToHistory(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Función para guardar el resultado en el historial usando localStorage
function saveToHistory(result) {
    let history = localStorage.getItem('calculatorHistory') || '[]';
    history = JSON.parse(history);
    history.push(result);
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
    display.value = result;
    displayHistory();
}

// Función para mostrar el historial en la lista
function displayHistory() {
    historyList.innerHTML = '';
    let history = JSON.parse(localStorage.getItem('calculatorHistory') || '[]');
    history.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `Cálculo ${index + 1}: ${item}`;
        historyList.appendChild(li);
    });
}

// Función para borrar el historial
function clearHistory() {
    localStorage.removeItem('calculatorHistory');
    historyList.innerHTML = '';
}

// Función para borrar el display
function clearDisplay() {
    display.value = '';
}

// Cargar historial al cargar la página
displayHistory();
