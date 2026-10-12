const sideNav = document.getElementById("side-nav");


/* =========================
   Show content on the right
   ========================= */

function showSection(id) {

    const sections = document.querySelectorAll(
        ".main-content section"
    );

    sections.forEach(section => {
        section.style.display = "none";
    });

    const target = document.getElementById(id);

    if (target) {
        target.style.display = "block";
    }
}


function showPage(id) {

    showSection(id);

    history.pushState(null, "", "#" + id);
}


/* =========================
   Restore the original sidebar
   ========================= */

function restoreMainMenu() {

    sideNav.innerHTML = `

        <div class="nav-item">
            <a href="#home" id="home-button">About</a>
        </div>

        <div class="nav-item comic-tab">
            <a href="#comic" id="comic-button">
                <img src="assets/comic.png" alt="Comic">
            </a>
        </div>

        <div class="nav-item thought-tab">
            <a href="#thoughts" id="thought-button">
                <img src="assets/thought.png" alt="Thoughts">
            </a>
        </div>

        <div class="nav-item game-tab">
            <a href="#games" id="game-button">
                <img src="assets/Frog.png" alt="Games">
            </a>
        </div>

    `;


    // About: keep the original sidebar

    document.getElementById("home-button")
        .addEventListener("click", function(event) {
            event.preventDefault();
            showPage("home");
        });


    // Comic: open the comic section

    document.getElementById("comic-button")
        .addEventListener("click", function(event) {
            event.preventDefault();
            showPage("comic");
        });


    // Thoughts: open the Thoughts submenu

    document.getElementById("thought-button")
        .addEventListener("click", function(event) {
            event.preventDefault();
            showThoughtMenu();
        });


    // Game: open the Game submenu

    document.getElementById("game-button")
        .addEventListener("click", function(event) {
            event.preventDefault();
            showGameMenu();
        });


    showSection("home");
}


/* =========================
   Back button, collapse,
   and submenu item behavior
   ========================= */

function setupSubmenu() {

    // Back to the original sidebar

    document.getElementById("back-button")
        .addEventListener("click", function(event) {
            event.preventDefault();

            restoreMainMenu();

            history.pushState(null, "", "#home");
        });


    // Expand / collapse categories

    const groupButtons = document.querySelectorAll(
        ".game-group-title"
    );

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


    // Open a selected item on the right

    const items = sideNav.querySelectorAll("[data-section]");

    items.forEach(item => {

        item.addEventListener("click", function(event) {

            event.preventDefault();

            showPage(this.dataset.section);

        });

    });

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


            <div class="game-group">

                <button class="game-group-title">
                    <span class="arrow">▼</span>
                    Game I Play
                </button>

                <ul class="game-list">

                    <li>
                        <a href="#hollow-knight"
                           data-section="hollow-knight">
                            • Hollow Knight
                        </a>
                    </li>

                    <li><a href="#">• ...</a></li>
                    <li><a href="#">• ...</a></li>

                </ul>

            </div>


            <div class="game-group">

                <button class="game-group-title">
                    <span class="arrow">▼</span>
                    Game I Try To Make
                </button>

                <ul class="game-list">

                    <li>
                        <a href="#unity-project"
                           data-section="unity-project">
                            • My Unity Project
                        </a>
                    </li>

                    <li><a href="#">• ...</a></li>

                </ul>

            </div>

        </div>

    `;

    setupSubmenu();

    showPage("games");
}


/* =========================
   Thoughts menu
   ========================= */

function showThoughtMenu() {

    sideNav.innerHTML = `

        <div class="game-menu">

            <a href="#home" class="back-button" id="back-button">
                ← Back
            </a>


            <div class="game-group">

                <button class="game-group-title">
                    <span class="arrow">▼</span>
                    Random Stuff
                </button>

                <ul class="game-list">

                    <li>
                        <a href="#rain" data-section="rain">
                            • Rain
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    `;

    setupSubmenu();

    showPage("thoughts");
}


/* =========================
   Initial page
   ========================= */

restoreMainMenu();
