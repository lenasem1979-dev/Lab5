document.addEventListener("DOMContentLoaded", () => {

    const boxes = document.querySelectorAll(".box");
    const container = document.getElementById("container");

    boxes.forEach(box => {

        let isDragging = false;
        let offsetX, offsetY;

        box.addEventListener("mousedown", (e) => {
            isDragging = true;

            offsetX = e.clientX - box.offsetLeft;
            offsetY = e.clientY - box.offsetTop;

            box.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;

            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;

            // межі контейнера
            let maxX = container.clientWidth - box.offsetWidth;
            let maxY = container.clientHeight - box.offsetHeight;

            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x > maxX) x = maxX;
            if (y > maxY) y = maxY;

            box.style.left = x + "px";
            box.style.top = y + "px";
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            box.style.cursor = "grab";
        });

    });

});