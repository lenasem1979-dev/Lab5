document.addEventListener("DOMContentLoaded", () => {

    const books = document.querySelectorAll(".book");

    books.forEach(book => {
        book.addEventListener("click", () => {

            // прибрати виділення з усіх
            books.forEach(b => b.classList.remove("active"));

            // додати тільки цьому
            book.classList.add("active");
        });
    });

});