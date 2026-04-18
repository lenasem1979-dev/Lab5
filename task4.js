document.addEventListener("DOMContentLoaded", () => {

    // Видалення блоку
    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.target.closest(".block").remove();
        });
    });

    // Редагування
    document.querySelectorAll(".edit").forEach(btn => {
        btn.addEventListener("click", (e) => {

            let block = e.target.closest(".block");
            let textDiv = block.querySelector(".text");

            let textarea = document.createElement("textarea");
            textarea.value = textDiv.textContent;

            block.replaceChild(textarea, textDiv);

            textarea.focus();

            // повернення назад при втраті фокусу
            textarea.addEventListener("blur", () => {
                let newText = document.createElement("div");
                newText.classList.add("text");
                newText.textContent = textarea.value;

                block.replaceChild(newText, textarea);
            });

        });
    });

});