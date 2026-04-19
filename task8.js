document.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const btn = document.getElementById("addBtn");
    const messages = document.getElementById("messages");

    btn.addEventListener("click", () => {

        let name = nameInput.value.trim();
        let text = messageInput.value.trim();

        if (name === "" || text === "") {
            alert("Заповніть всі поля!");
            return;
        }

        // отримуємо дату і час
        let now = new Date();
        let dateTime = now.toLocaleString(); // автоматично форматована дата + час

        let messageBlock = document.createElement("div");
        messageBlock.classList.add("message");

        let header = document.createElement("div");
        header.classList.add("header");

        let author = document.createElement("div");
        author.classList.add("author");
        author.textContent = name;

        let date = document.createElement("div");
        date.classList.add("date");
        date.textContent = dateTime;

        let messageText = document.createElement("div");
        messageText.classList.add("text");
        messageText.textContent = text;

        header.appendChild(author);
        header.appendChild(date);

        messageBlock.appendChild(header);
        messageBlock.appendChild(messageText);

        messages.prepend(messageBlock);

        // очистка форми
        nameInput.value = "";
        messageInput.value = "";
    });

});