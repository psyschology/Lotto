document.addEventListener('DOMContentLoaded', (event) => {
    const ticketsContainer = document.getElementById('tickets');

    // Function to generate a ticket element
    const createTicketElement = (ticketNumber) => {
        const ticket = document.createElement('div');
        ticket.className = 'ticket';
        ticket.innerHTML = `
            <h2>Ticket #${ticketNumber}</h2>
            <p>Buyer: Available</p>
            <div class="ticket-grid">
                ${generateBingoGrid()}
            </div>
        `;
        return ticket;
    };

    // Function to generate the bingo grid layout for the ticket
    const generateBingoGrid = () => {
        const columns = [
            generateColumn(1, 15),   // B Column
            generateColumn(16, 30),  // I Column
            generateColumn(31, 45),  // N Column
            generateColumn(46, 60),  // G Column
            generateColumn(61, 75)   // O Column
        ];
        
        // Place the "FREE" space in the center
        columns[2][2] = 'FREE';

        let rows = '';
        for (let i = 0; i < 5; i++) { // 5 rows
            rows += '<div class="ticket-row">';
            for (let j = 0; j < 5; j++) { // 5 columns
                rows += `<div class="ticket-cell">${columns[j][i]}</div>`;
            }
            rows += '</div>';
        }
        return rows;
    };

    // Function to generate numbers for a specific column
    const generateColumn = (min, max) => {
        const column = [];
        const usedNumbers = new Set();
        while (column.length < 5) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!usedNumbers.has(num)) {
                column.push(num);
                usedNumbers.add(num);
            }
        }
        return column;
    };

    // Generate 300 tickets
    for (let i = 1; i <= 300; i++) {
        const ticketElement = createTicketElement(i);
        ticketsContainer.appendChild(ticketElement);
    }
});



    // Countdown timer logic
    const countdownTimer = document.getElementById('countdown-timer');
    const gameStartTime = new Date();
    gameStartTime.setHours(17, 0, 0); // 5 PM

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

    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }
    
    // Function to close modal
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }
    
    // Add event listeners to buttons to open modals
    document.getElementById('agentLoginBtn').addEventListener('click', () => openModal('agentModal'));
    document.getElementById('adminLoginBtn').addEventListener('click', () => openModal('adminModal'));
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    setInterval(updateCountdown, 1000);

    // Event listener for search functionality
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.toLowerCase();
        document.querySelectorAll('.ticket').forEach(ticket => {
            const ticketText = ticket.textContent.toLowerCase();
            if (ticketText.includes(query)) {
                ticket.style.display = 'block';
            } else {
                ticket.style.display = 'none';
            }
        });
    });



// script.js - Add this to your existing JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Modal handling
    const agentLoginModal = document.getElementById('agent-login-modal');
    const adminLoginModal = document.getElementById('admin-login-modal');
    const agentLoginForm = document.getElementById('agent-login-form');
    const adminLoginForm = document.getElementById('admin-login-form');

    document.querySelector('.agent-login-link').addEventListener('click', () => {
        agentLoginModal.style.display = 'block';
    });

    document.querySelector('.admin-login-link').addEventListener('click', () => {
        adminLoginModal.style.display = 'block';
    });

    document.getElementById('agent-close').addEventListener('click', () => {
        agentLoginModal.style.display = 'none';
    });

    document.getElementById('admin-close').addEventListener('click', () => {
        adminLoginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === agentLoginModal) {
            agentLoginModal.style.display = 'none';
        }
        if (event.target === adminLoginModal) {
            adminLoginModal.style.display = 'none';
        }
    });

    // Handle agent login
    agentLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('agent-username').value;
        const password = document.getElementById('agent-password').value;

        fetch('/login/agent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Store session data
                sessionStorage.setItem('userRole', 'agent');
                sessionStorage.setItem('username', username);
                // Close modal and update view
                agentLoginModal.style.display = 'none';
                showAgentView();
            } else {
                alert(data.message);
            }
        });
    });

    // Handle admin login
    adminLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        fetch('/login/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Store session data
                sessionStorage.setItem('userRole', 'admin');
                sessionStorage.setItem('username', username);
                // Close modal and update view
                adminLoginModal.style.display = 'none';
                showAdminView();
            } else {
                alert(data.message);
            }
        });
    });

    // Function to show agent view
    function showAgentView() {
        // Update view for agent
        document.querySelector('.agent-dashboard').style.display = 'block';
        document.querySelector('.public-view').style.display = 'none';
        document.querySelector('.admin-dashboard').style.display = 'none';
    }

    // Function to show admin view
    function showAdminView() {
        // Update view for admin
        document.querySelector('.admin-dashboard').style.display = 'block';
        document.querySelector('.public-view').style.display = 'none';
        document.querySelector('.agent-dashboard').style.display = 'none';
    }

    // Check session storage for user role and update view accordingly
    const userRole = sessionStorage.getItem('userRole');
    if (userRole === 'agent') {
        showAgentView();
    } else if (userRole === 'admin') {
        showAdminView();
    }
});

// script.js - Add this to your existing JavaScript file

// Add after DOMContentLoaded event listener

const socket = io();

socket.on('gameStarted', () => {
    // Handle game started event
    console.log('Game started');
});

socket.on('numberCalled', (number) => {
    // Handle number called event
    console.log(`Number called: ${number}`);
    // Update the real-time game display
});
// script.js - Update with this

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Fetch and display game status
    fetch('/game/status')
        .then(response => response.json())
        .then(data => {
            // Display game status
            document.getElementById('game-status').innerText = data.status;
        });

    // Handle agent login
    agentLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('agent-username').value;
        const password = document.getElementById('agent-password').value;

        fetch('/login/agent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem('userRole', 'agent');
                sessionStorage.setItem('username', username);
                agentLoginModal.style.display = 'none';
                showAgentView();
            } else {
                alert(data.message);
            }
        });
    });

    // Handle admin login
    adminLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        fetch('/login/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem('userRole', 'admin');
                sessionStorage.setItem('username', username);
                adminLoginModal.style.display = 'none';
                showAdminView();
            } else {
                alert(data.message);
            }
        });
    });

    // Function to show agent view
    function showAgentView() {
        document.querySelector('.agent-dashboard').style.display = 'block';
        document.querySelector('.public-view').style.display = 'none';
        document.querySelector('.admin-dashboard').style.display = 'none';
    }

    // Function to show admin view
    function showAdminView() {
        document.querySelector('.admin-dashboard').style.display = 'block';
        document.querySelector('.public-view').style.display = 'none';
        document.querySelector('.agent-dashboard').style.display = 'none';
    }

    const userRole = sessionStorage.getItem('userRole');
    if (userRole === 'agent') {
        showAgentView();
    } else if (userRole === 'admin') {
        showAdminView();
    }
});

// Add to your existing script.js

// Function to handle starting the game
function startGame() {
    fetch('/game/start', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Game started successfully
            console.log('Game started');
        } else {
            alert('Failed to start game');
        }
    });
}

// Function to call a number
function callNumber(number) {
    fetch('/game/callNumber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Number called successfully
            console.log(`Number called: ${number}`);
        } else {
            alert('Failed to call number');
        }
    });
}

// Socket.io event handling
socket.on('gameStarted', () => {
    console.log('Game started');
    // Update the UI to show the game has started
});

socket.on('numberCalled', (number) => {
    console.log(`Number called: ${number}`);
    // Update the UI to mark the number on tickets
});
// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Add event listeners to buttons to open modals
document.getElementById('agentLoginBtn').addEventListener('click', () => openModal('agentModal'));
document.getElementById('adminLoginBtn').addEventListener('click', () => openModal('adminModal'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

