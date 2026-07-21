function checkAnswer(correctAnswers, nextPage) {
    const input = document.getElementById("answer");
    const button = document.getElementById("next");

    const saved = sessionStorage.getItem(location.pathname);
    if (saved) {
        input.value = saved;
        if (correctAnswers.includes(saved.trim())) {
            button.disabled = false;
        }
    }

    input.addEventListener("input", function () {
        sessionStorage.setItem(location.pathname, input.value);

        if (correctAnswers.includes(input.value.trim())) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });

    button.addEventListener("click", function () {
        window.location.href = nextPage;
    });
}
