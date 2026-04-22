document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btn");
    const container = document.getElementById("container");

    btn.addEventListener("mouseenter", () => {

        let maxX = container.clientWidth - btn.offsetWidth;
        let maxY = container.clientHeight - btn.offsetHeight;

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        btn.style.left = x + "px";
        btn.style.top = y + "px";
    });

});