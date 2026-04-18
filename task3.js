document.addEventListener("DOMContentLoaded", () => {

    const colors = document.querySelectorAll(".color");
    const box = document.getElementById("box");

    let selectedColors = [];

    colors.forEach(color => {
        color.addEventListener("click", () => {

            const colorValue = color.dataset.color;

            if (selectedColors.includes(colorValue)) {
                // якщо вже вибраний → прибираємо
                selectedColors = selectedColors.filter(c => c !== colorValue);
                color.classList.remove("selected");
            } else {
                // додаємо колір
                selectedColors.push(colorValue);
                color.classList.add("selected");
            }

            updateBox();
        });
    });

    function updateBox() {
        if (selectedColors.length === 0) {
            box.style.background = "white";
        }
        else if (selectedColors.length === 1) {
            box.style.background = selectedColors[0];
        }
        else {
            box.style.background = "linear-gradient(to right, " + selectedColors.join(",") + ")";
        }
    }

});