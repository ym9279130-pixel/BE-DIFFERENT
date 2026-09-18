document.addEventListener("DOMContentLoaded", function () {

    // =============================
    // CREATE YOUR PIECE
    // =============================

    let selectedBase = "";
    let selectedFabric = "";
    let selectedColor = "";
    let selectedDetail = "";

    let basePrice = 0;
    let fabricPrice = 0;
    let colorPrice = 0;
    let detailPrice = 0;


    // =============================
    // PRICE
    // =============================

    function updatePrice() {

        const total =
            basePrice +
            fabricPrice +
            colorPrice +
            detailPrice;

        const priceBox = document.querySelector(".price-box h3");

        if (priceBox) {
            priceBox.textContent = total + " EGP";
        }
    }


    // =============================
    // ALL OPTION BUTTONS
    // =============================

    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(function (button) {

        button.addEventListener("click", function () {

            const step = button.closest(".builder-step");

            if (!step) return;

            // Remove selection from this step only
            step.querySelectorAll(".option").forEach(function (btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            const value = button.textContent.trim();

            // Determine which step was selected
            const allSteps = document.querySelectorAll(".builder-step");

            const stepIndex = Array.from(allSteps).indexOf(step);


            // STEP 1 - BASE
            if (stepIndex === 0) {

                selectedBase = value;

                const prices = {
                    "Dress": 1000,
                    "Blouse": 700,
                    "Skirt": 650,
                    "Set": 1300
                };

                basePrice = prices[value] || 0;
            }


            // STEP 2 - FABRIC
            if (stepIndex === 1) {

                selectedFabric = value;

                const prices = {
                    "Satin": 250,
                    "Linen": 180,
                    "Cotton": 120,
                    "Velvet": 300
                };

                fabricPrice = prices[value] || 0;
            }


            // STEP 3 - COLOR
            if (stepIndex === 2) {

                selectedColor = value;

                const prices = {
                    "Black": 0,
                    "White": 0,
                    "Beige": 50,
                    "Burgundy": 50
                };

                colorPrice = prices[value] || 0;
            }


            // STEP 4 - HANDMADE DETAIL
            if (stepIndex === 3) {

                selectedDetail = value;

                const prices = {
                    "Embroidery": 250,
                    "Pearls": 200,
                    "Ribbons": 100,
                    "None": 0
                };

                detailPrice = prices[value] || 0;
            }

            updatePrice();

        });

    });


    // =============================
    // PLACE YOUR ORDER
    // =============================

    const orderButton = document.querySelector(".order-piece");

    if (orderButton) {

        orderButton.addEventListener("click", function () {

            // Check selections

            if (
                selectedBase === "" ||
                selectedFabric === "" ||
                selectedColor === "" ||
                selectedDetail === ""
            ) {

                alert("Please complete all your choices first.");

                return;
            }


            // Calculate total

            const total =
                basePrice +
                fabricPrice +
                colorPrice +
                detailPrice;


            // Put information in summary

            const base = document.querySelector("#summary-base");
            const fabric = document.querySelector("#summary-fabric");
            const color = document.querySelector("#summary-color");
            const detail = document.querySelector("#summary-detail");
            const price = document.querySelector("#summary-price");


            if (base) {
                base.textContent = selectedBase;
            }

            if (fabric) {
                fabric.textContent = selectedFabric;
            }

            if (color) {
                color.textContent = selectedColor;
            }

            if (detail) {
                detail.textContent = selectedDetail;
            }

            if (price) {
                price.textContent = total + " EGP";
            }


            // Show summary

            const summary = document.querySelector("#order-summary");

            if (summary) {

                summary.classList.add("show");

                summary.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    }


    // =============================
    // CONFIRM ORDER
    // =============================

    const confirmButton = document.querySelector(".confirm-order");

    if (confirmButton) {

        confirmButton.addEventListener("click", function () {

            alert("Your order is ready.");

        });

    }

});