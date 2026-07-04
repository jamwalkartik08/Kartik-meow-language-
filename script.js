document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Kartik Meow Language!");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("😼 Welcome to Kartik Meow Language (KML)!\n\nOne Meow. Endless Meanings. 👹🐾");
        });
    });
});
