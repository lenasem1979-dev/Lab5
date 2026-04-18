document.addEventListener("DOMContentLoaded", () => {

    const textarea = document.getElementById("input");
    const btn = document.getElementById("btn");
    const container = document.getElementById("container");

    btn.addEventListener("click", () => {
        container.innerHTML = "";

        let text = textarea.value.replace(/\s/g, "");

        for (let char of text) {
            let div = document.createElement("div");
            div.classList.add("cell");

            if (char === "1") {
                div.classList.add("black");
            }
            else if (char === "0") {
                div.classList.add("white");
            }

            container.appendChild(div);
        }
    });

});