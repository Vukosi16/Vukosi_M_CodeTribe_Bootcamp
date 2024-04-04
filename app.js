const button = document.querySelector("#arrow");

button.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
});

function scrollDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'});
}