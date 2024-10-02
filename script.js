const apiUrl = 'https://apiteste-0dlj.onrender.com'; // Nova URL base da API

// Função para ligar o LED
async function turnOnLed() {
    try {
        const response = await fetch(`${apiUrl}/led/on`, { method: 'POST' });
        if (response.ok) {
            document.getElementById('ledStatus').innerText = 'Status do LED: Ligado';
        }
    } catch (error) {
        console.error('Erro ao ligar o LED:', error);
    }
}

// Função para desligar o LED
async function turnOffLed() {
    try {
        const response = await fetch(`${apiUrl}/led/off`, { method: 'POST' });
        if (response.ok) {
            document.getElementById('ledStatus').innerText = 'Status do LED: Desligado';
        }
    } catch (error) {
        console.error('Erro ao desligar o LED:', error);
    }
}

// Função para obter o estado atual do LED
async function getLedState() {
    try {
        const response = await fetch(`${apiUrl}/led/state`);
        const data = await response.json();
        const status = data.state ? 'Ligado' : 'Desligado';
        document.getElementById('ledStatus').innerText = `Status do LED: ${status}`;
    } catch (error) {
        console.error('Erro ao obter o estado do LED:', error);
    }
}

// Adicionar eventos aos botões
document.getElementById('turnOn').addEventListener('click', turnOnLed);
document.getElementById('turnOff').addEventListener('click', turnOffLed);

// Obter o estado inicial do LED ao carregar a página
getLedState();
