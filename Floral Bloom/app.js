const allBtn = document.getElementById("allBtn");
const bouquetBtn = document.getElementById("bouquetBtn");
const sunBtn = document.getElementById("sunBtn");
const decorBtn = document.getElementById("decorBtn");
const productsGrid = document.getElementById("productsGrid");
const sunflowerSection = document.getElementById("sunflowerSection");
const decorSection = document.getElementById("decorSection");
const bouquetTitle = document.getElementById("bouquetTitle");
const sunflowerTitle = document.getElementById("sunflowerTitle");

if (allBtn && bouquetBtn && sunBtn && decorBtn && productsGrid && sunflowerSection && decorSection) {
    const bouquetItems = productsGrid.querySelectorAll(":scope > .col-lg-3");

    function setDisplay(element, display) {
        element.style.display = display;
    }

    function setActiveButton(activeButton) {
        [allBtn, bouquetBtn, sunBtn, decorBtn].forEach((button) => {
            button.classList.toggle("active-btn", button === activeButton);
        });
    }

    function showCategory(category) {
        const showBouquets = category === "all" || category === "bouquets";
        const showSunflowers = category === "all" || category === "sunflowers";
        const showDecorations = category === "all" || category === "decorations";

        bouquetItems.forEach((item) => setDisplay(item, showBouquets ? "" : "none"));
        setDisplay(bouquetTitle, showBouquets ? "" : "none");
        setDisplay(sunflowerTitle, showSunflowers ? "" : "none");
        setDisplay(sunflowerSection, showSunflowers ? "" : "none");
        setDisplay(decorSection, showDecorations ? "" : "none");
    }

    allBtn.onclick = function () {
        showCategory("all");
        setActiveButton(allBtn);
    };

    bouquetBtn.onclick = function () {
        showCategory("bouquets");
        setActiveButton(bouquetBtn);
    };

    sunBtn.onclick = function () {
        showCategory("sunflowers");
        setActiveButton(sunBtn);
    };

    decorBtn.onclick = function () {
        showCategory("decorations");
        setActiveButton(decorBtn);
    };
}