
function checkAnswer(correct, nextPage) {
    const input = document.getElementById("answer");
    const button = document.getElementById("next");

    input.addEventListener("input", function () {
        if (input.value.trim() === correct) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });

    button.addEventListener("click", function () {
        window.location.href = nextPage;
    });
}
