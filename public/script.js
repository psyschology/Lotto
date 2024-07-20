document.addEventListener('DOMContentLoaded', () => {
    // Initialization and Ticket generation
    const ticketsContainer = document.getElementById('tickets');
    const ticketCount = 300;

    // Generate and display tickets
    for (let i = 1; i <= ticketCount; i++) {
        const ticketElement = createTicketElement(i);
        ticketsContainer.appendChild(ticketElement);
    }

    function createTicketElement(ticketNumber) {
        const ticket = document.createElement('div');
        ticket.className = 'ticket';
        ticket.innerHTML = `
            <h2>Ticket #${ticketNumber}</h2>
            <p>Buyer: Available</p>
            <div class="ticket-grid">${generateBingoGrid()}</div>
        `;
        return ticket;
    }

    function generateBingoGrid() {
        const columns = Array.from({ length: 9 }, (_, i) => generateColumn(i * 10 + 1, i * 10 + 9));
        const grid = Array.from({ length: 3 }, () => Array(9).fill(''));

        for (let row = 0; row < 3; row++) {
            let numbersPlaced = 0;
            while (numbersPlaced < 5) {
                const col = Math.floor(Math.random() * 9);
                if (grid[row][col] === '') {
                    const columnNumbers = columns[col];
                    if (columnNumbers.length > 0) {
                        grid[row][col] = columnNumbers.shift();
                        numbersPlaced++;
                    }
                }
            }
        }

        for (let col = 0; col < 9; col++) {
            const colNumbers = grid.map(row => row[col]).filter(num => num !== '');
            colNumbers.sort((a, b) => a - b);
            for (let row = 0; row < 3; row++) {
                grid[row][col] = colNumbers[row] || '';
            }
        }

        return grid.map(row => `
            <div class="ticket-row">
                ${row.map(cell => `<div class="ticket-cell">${cell}</div>`).join('')}
            </div>
        `).join('');
    }

    function generateColumn(min, max) {
        const column = [];
        const usedNumbers = new Set();
        while (column.length < 3) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!usedNumbers.has(num)) {
                column.push(num);
                usedNumbers.add(num);
            }
        }
        return column;
    }

    // Countdown Timer
    const countdownTimer = document.getElementById('countdown-timer');
    const gameStartTime = new Date();
    gameStartTime.setHours(14, 0, 0); // Adjust to game start time

    function updateCountdown() {
        const now = new Date();
        const timeLeft = gameStartTime - now;

        if (timeLeft <= 0) {
            countdownTimer.textContent = "00:00:00";
        } else {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    setInterval(updateCountdown, 1000);

    document.addEventListener('DOMContentLoaded', () => {
        const users = {
            agent: { username: 'agent123', password: 'agentpass' },
            admin: { username: 'admin123', password: 'adminpass' }
        };
    
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }
    
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
    
        // Dropdown button event
        document.getElementById('loginBtn').addEventListener('click', function (event) {
            event.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    
        // Agent login button event
        document.getElementById('agentLoginBtn').addEventListener('click', function (event) {
            event.preventDefault();
            closeModal('adminModal');
            openModal('agentModal');
        });
    
        // Admin login button event
        document.getElementById('adminLoginBtn').addEventListener('click', function (event) {
            event.preventDefault();
            closeModal('agentModal');
            openModal('adminModal');
        });
    
        // Close modal event
        document.querySelectorAll('.close').forEach(function (element) {
            element.addEventListener('click', function () {
                closeModal('agentModal');
                closeModal('adminModal');
            });
        });
    
        // Close modal on outside click
        window.addEventListener('click', function (event) {
            if (event.target.classList.contains('modal')) {
                closeModal('agentModal');
                closeModal('adminModal');
            }
        });
    
        // User Login Handling
        document.getElementById('agent-login-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('agent-username').value;
            const password = document.getElementById('agent-password').value;
    
            if (username === users.agent.username && password === users.agent.password) {
                sessionStorage.setItem('userRole', 'agent');
                closeModal('agentModal');
                showAgentView();
            } else {
                alert('Invalid Agent credentials');
            }
        });
    
        document.getElementById('admin-login-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('admin-username').value;
            const password = document.getElementById('admin-password').value;
    
            if (username === users.admin.username && password === users.admin.password) {
                sessionStorage.setItem('userRole', 'admin');
                closeModal('adminModal');
                showAdminView();
            } else {
                alert('Invalid Administrator credentials');
            }
        });
    
        function showAgentView() {
            document.querySelector('.agent-dashboard').style.display = 'block';
            document.querySelector('.admin-dashboard').style.display = 'none';
        }
    
        function showAdminView() {
            document.querySelector('.admin-dashboard').style.display = 'block';
            document.querySelector('.agent-dashboard').style.display = 'none';
        }
    
        const userRole = sessionStorage.getItem('userRole');
        if (userRole === 'agent') {
            showAgentView();
        } else if (userRole === 'admin') {
            showAdminView();
        }
    });
    

// Random Number generator and speech synthesizer
class RandomNumberGenerator {
    constructor() {
        this.calledNumbers = new Set();
        this.min = 1;
        this.max = 90; // Correct max to 90
    }

    generateNumber() {
        let number;
        do {
            number = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        } while (this.calledNumbers.has(number));

        this.calledNumbers.add(number);
        return number;
    }

    reset() {
        this.calledNumbers.clear();
    }
}

function speakNumber(number) {
    const utterance = new SpeechSynthesisUtterance(`Number ${number}`);
    window.speechSynthesis.speak(utterance);
}

// Game controls
let isGameStarted = false;
const rng = new RandomNumberGenerator();

function startGame() {
    isGameStarted = true;
    rng.reset();
    document.getElementById('number-display').style.display = 'block';
}

function callNumber() {
    if (!isGameStarted) {
        alert('The game has not started yet.');
        return;
    }

    const number = rng.generateNumber();
    document.getElementById('display-number').innerText = `Number: ${number}`;
    speakNumber(number);
}

document.getElementById('start-game-btn').addEventListener('click', startGame);
document.querySelector('#number-display button').addEventListener('click', callNumber);

// Game and award management
document.getElementById('create-ticket-btn').addEventListener('click', () => {
    fetch('/create-ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Add necessary data */ })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Ticket created successfully!');
        } else {
            alert(data.message);
        }
    });
});

document.getElementById('create-award-btn').addEventListener('click', () => {
    fetch('/create-award', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Add necessary data */ })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Award created successfully!');
        } else {
            alert(data.message);
        }
    });
});

document.getElementById('end-game-btn').addEventListener('click', () => {
    fetch('/end-game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Add necessary data */ })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Game ended successfully!');
        } else {
            alert(data.message);
        }
    });
});
})
