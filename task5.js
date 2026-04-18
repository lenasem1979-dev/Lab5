document.addEventListener("DOMContentLoaded", () => {

    const colors = document.querySelectorAll(".color");
    const canvas = document.getElementById("canvas");

    let selectedColor = null;

    // палітра (тільки 1 колір)
    colors.forEach(color => {
        color.addEventListener("click", () => {

            colors.forEach(c => c.classList.remove("selected"));

            color.classList.add("selected");
            selectedColor = color.dataset.color;
        });
    });

    // створюємо поле 20x20
    for (let i = 0; i < 400; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("click", () => {
            if (selectedColor) {
                cell.style.background = selectedColor;
            }
        });

        canvas.appendChild(cell);
    }

});