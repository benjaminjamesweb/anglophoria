const apiBaseUrl = 'http://localhost:5000';

async function signUp() {
  const username = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Sign up successful');
    } else {
      alert(`Failed to sign up: ${data.error}`);
    }
  } catch (error) {
    alert(`Failed to sign up: ${error.message}`);
  }
}

async function logIn() {
  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch(`${apiBaseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Login successful');
    } else {
      alert(`Failed to log in: ${data.error}`);
    }
  } catch (error) {
    alert(`Failed to log in: ${error.message}`);
  }
}
  


function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}


document.querySelectorAll('.game-tile').forEach(tile => {
    tile.addEventListener('click', function(event) {
        event.preventDefault();
        
        const detailsSection = document.getElementById('game-details');
        const title = this.dataset.title;
        const imgSrc = this.dataset.img;
        const level = this.dataset.header;
        const category = this.dataset.description;

        if (detailsSection.style.display === 'flex' &&
            document.getElementById('game-title').textContent === title) {
            detailsSection.style.display = 'none';
        } else {
            document.getElementById('game-title').textContent = title;
            document.getElementById('game-image').src = imgSrc;
            document.getElementById('game-level').textContent = level;
            document.getElementById('game-category').innerHTML = category;

            if (!document.getElementById('levelsDropdown')) {
                const newContent = `
                <div class="confirm-level">
                <p> Confirm your level: </p>
                    <select id="levelsDropdown">
                        <option value="a1" selected>A1</option>
                        <option value="a2">A2</option>
                        <option value="b1">B1</option>
                        <option value="b2">B2</option>
                        <option value="c1">C1</option>
                        <option value="c2">C2</option>
                    </select>
                    </div>
                  <button class="playButton" onclick="window.location.href='../DiceOrDie/index.html'">Play</button>
                `;
                detailsSection.querySelector('.inner').insertAdjacentHTML('beforeend', newContent);
            }

            detailsSection.style.display = 'flex';
        }
    });
});


function toggleParameters() {
    var parametersDiv = document.getElementById('parameters');
    if (parametersDiv.style.display === 'block') {
        parametersDiv.style.display = 'none';
    } else {
        parametersDiv.style.display = 'block';
    }
}


function toggleLogin() {
    var loginDiv = document.getElementById('login');
    if (loginDiv.style.display === 'block') {
        loginDiv.style.display = 'none';
    } else {
        loginDiv.style.display = 'block';
    }
}

function toggleSignUp() {
    var signupDiv = document.getElementById('signup');
    if (signupDiv.style.display === 'block') {
        signupDiv.style.display = 'none';
    } else {
        signupDiv.style.display = 'block';
    }
}

function closeGameDetails() {
    document.getElementById('game-details').style.display = 'none';
}