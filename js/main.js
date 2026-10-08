const sideNav = document.getElementById("side-nav");
const gameButton = document.getElementById("game-button");


/* =========================
   Show only one main section
   ========================= */

function showSection(id) {

    const sections = document.querySelectorAll(".main-content section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    const target = document.getElementById(id);

    if (target) {
        target.style.display = "block";
    }
}


/* =========================
   Game menu
   ========================= */

function showGameMenu() {

    sideNav.innerHTML = `

        <div class="game-menu">

            <a href="#home" class="back-button" id="back-button">
                ← Back
            </a>


            <!-- Game I Play -->
            <div class="game-group">

                <button class="game-group-title">
                    <span class="arrow">▼</span>
                    Game I Play
                </button>

                <ul class="game-list">

                    <li>
                        <a href="#hollow-knight" data-section="hollow-knight">
                            • Hollow Knight
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            • ...
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            • ...
                        </a>
                    </li>

                </ul>

            </div>


            <!-- Game I Try To Make -->
            <div class="game-group">

                <button class="game-group-title">
                    <span class="arrow">▼</span>
                    Game I Try To Make
                </button>

                <ul class="game-list">

                    <li>
                        <a href="#unity-project" data-section="unity-project">
                            • My Unity Project
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            • ...
                        </a>
                    </li>

                </ul>

            </div>

        </div>
    `;


    /* Back button */

    document.getElementById("back-button").addEventListener("click", function(event) {

        event.preventDefault();

        location.hash = "home";

        restoreMainMenu();

    });


    /* Collapse / expand */

    const groupButtons =
        document.querySelectorAll(".game-group-title");


    groupButtons.forEach(button => {

        button.addEventListener("click", function() {

            const list = this.nextElementSibling;
            const arrow = this.querySelector(".arrow");

            if (list.style.display === "none") {

                list.style.display = "block";
                arrow.textContent = "▼";

            } else {

                list.style.display = "none";
                arrow.textContent = "▶";

            }

        });

    });


    /* Game item click */

    const gameLinks =
        document.querySelectorAll("[data-section]");


    gameLinks.forEach(link => {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const sectionId = this.dataset.section;

            showSection(sectionId);

            history.pushState(null, "", "#" + sectionId);

        });

    });


    /* Show Games when menu opens */

    showSection("games");
}


/* =========================
   Restore normal sidebar
   ========================= */

function restoreMainMenu() {

    sideNav.innerHTML = `

        <div class="nav-item">
            <a href="#home" id="home-button">
                About
            </a>
        </div>


        <div class="nav-item comic-tab">

            <a href="#comic">
                <img src="assets/comic.png" alt="Comic">
            </a>

        </div>


        <div class="nav-item thought-tab">

            <a href="#thoughts">
                <img src="assets/thought.png" alt="Thoughts">
            </a>

        </div>


        <div class="nav-item game-tab">

            <a href="#games" id="game-button">
                <img src="assets/Frog.png" alt="Games">
            </a>

        </div>
    `;


    /* Reconnect Game button */

    document
        .getElementById("game-button")
        .addEventListener("click", function(event) {

            event.preventDefault();

            showGameMenu();

        });


    showSection("home");
}


/* =========================
   Initial Game button
   ========================= */

gameButton.addEventListener("click", function(event) {

    event.preventDefault();

    showGameMenu();

});


/* =========================
   Initial page
   ========================= */

showSection("home");
