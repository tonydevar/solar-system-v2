// Planet data
const planetData = {
    sun: {
        name: "The Sun",
        type: "Star",
        diameter: "1,392,700 km",
        mass: "1.989 × 10³⁰ kg",
        temperature: "5,500°C (surface)",
        dayLength: "25 Earth days",
        yearLength: "225-250 million Earth years",
        description: "The Sun is the star at the center of our Solar System. It's a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core."
    },
    mercury: {
        name: "Mercury",
        type: "Terrestrial Planet",
        diameter: "4,879 km",
        mass: "3.285 × 10²³ kg",
        temperature: "-180°C to 430°C",
        dayLength: "59 Earth days",
        yearLength: "88 Earth days",
        moons: "0",
        description: "Mercury is the smallest and innermost planet, orbiting the Sun once every 88 Earth days. It has no atmosphere and experiences extreme temperature fluctuations."
    },
    venus: {
        name: "Venus",
        type: "Terrestrial Planet",
        diameter: "12,104 km",
        mass: "4.867 × 10²⁴ kg",
        temperature: "465°C",
        dayLength: "243 Earth days",
        yearLength: "225 Earth days",
        moons: "0",
        description: "Venus is the hottest planet in our solar system due to its thick, toxic atmosphere. It rotates in the opposite direction to most other planets."
    },
    earth: {
        name: "Earth",
        type: "Terrestrial Planet",
        diameter: "12,742 km",
        mass: "5.972 × 10²⁴ kg",
        temperature: "Average: 15°C",
        dayLength: "24 hours",
        yearLength: "365.25 days",
        moons: "1 (Moon)",
        description: "Earth is our home world and the only known planet to harbor life. It has liquid water on its surface and a protective atmosphere."
    },
    mars: {
        name: "Mars",
        type: "Terrestrial Planet",
        diameter: "6,779 km",
        mass: "6.39 × 10²³ kg",
        temperature: "-60°C",
        dayLength: "24 hours 37 minutes",
        yearLength: "687 Earth days",
        moons: "2 (Phobos, Deimos)",
        description: "Mars is called the Red Planet due to iron oxide on its surface. It has the largest volcano and canyon in the Solar System."
    },
    jupiter: {
        name: "Jupiter",
        type: "Gas Giant",
        diameter: "139,820 km",
        mass: "1.898 × 10²⁷ kg",
        temperature: "-110°C",
        dayLength: "10 hours",
        yearLength: "12 Earth years",
        moons: "95 known moons",
        description: "Jupiter is the largest planet in our Solar System. Its Great Red Spot is a giant storm that has raged for hundreds of years."
    },
    saturn: {
        name: "Saturn",
        type: "Gas Giant",
        diameter: "116,460 km",
        mass: "5.683 × 10²⁶ kg",
        temperature: "-140°C",
        dayLength: "10.7 hours",
        yearLength: "29 Earth years",
        moons: "146 known moons",
        description: "Saturn is famous for its stunning ring system made of ice and rock. It's the least dense planet and could float in water!"
    },
    uranus: {
        name: "Uranus",
        type: "Ice Giant",
        diameter: "50,724 km",
        mass: "8.681 × 10²⁵ kg",
        temperature: "-195°C",
        dayLength: "17 hours",
        yearLength: "84 Earth years",
        moons: "27 known moons",
        description: "Uranus rotates on its side, earning it the nickname 'the tilted planet.' It has a blue-green color due to methane in its atmosphere."
    },
    neptune: {
        name: "Neptune",
        type: "Ice Giant",
        diameter: "49,244 km",
        mass: "1.024 × 10²⁶ kg",
        temperature: "-200°C",
        dayLength: "16 hours",
        yearLength: "165 Earth years",
        moons: "16 known moons",
        description: "Neptune and Uranus are both ice giants with similar compositions. Neptune has the strongest winds in the Solar System, reaching 2,100 km/h."
    }
};

// Elements
const infoPanel = document.getElementById('infoPanel');
const closeBtn = document.getElementById('closeBtn');
const planetContent = document.getElementById('planetContent');

// Create stars background
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);
}

// Open planet info
function openPlanetInfo(planetKey) {
    const planet = planetData[planetKey];
    if (!planet) return;

    let statsHTML = '';

    for (const [key, value] of Object.entries(planet)) {
        if (key !== 'name' && key !== 'description') {
            let label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            if (key === 'moon') label = 'Moons';
            statsHTML += `
                <div class="stat">
                    <div class="stat-label">${label}</div>
                    <div class="stat-value">${value}</div>
                </div>
            `;
        }
    }

    planetContent.innerHTML = `
        <div class="planet-content">
            <h2>${planet.name}</h2>
            <div class="stats">${statsHTML}</div>
            <p class="description">${planet.description}</p>
        </div>
    `;

    infoPanel.classList.add('active');
}

// Close info panel
function closeInfoPanel() {
    infoPanel.classList.remove('active');
    setTimeout(() => {
        planetContent.innerHTML = '';
    }, 300);
}

// Event listeners
document.querySelectorAll('[data-planet]').forEach(element => {
    element.addEventListener('click', function() {
        const planetKey = this.getAttribute('data-planet');
        openPlanetInfo(planetKey);
    });
});

closeBtn.addEventListener('click', closeInfoPanel);

infoPanel.addEventListener('click', function(e) {
    if (e.target === infoPanel) {
        closeInfoPanel();
    }
});

// Close with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeInfoPanel();
    }
});

// Initialize
createStars();

// Randomize planet positions slightly for visual interest
document.querySelectorAll('.orbit').forEach((orbit, index) => {
    const randomDelay = (index % 5) * 0.5;
    orbit.style.animation = `orbit ${20 + index * 5}s linear infinite`;
});