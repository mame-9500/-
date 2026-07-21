function checkAnswer(correctAnswers, nextPage) {
    const input = document.getElementById("answer");
    const button = document.getElementById("next");

    // 1つだけ指定された場合でも配列にする
    if (!Array.isArray(correctAnswers)) {
        correctAnswers = [correctAnswers];
    }

    const saved = sessionStorage.getItem(location.pathname);
    if (saved) {
        input.value = saved;
    }

    function updateButton() {
        const answer = input.value.trim().replace(/\s+/g, "");
button.disabled = !correctAnswers.includes(answer);
    }

    updateButton();

    input.addEventListener("input", function () {
        sessionStorage.setItem(location.pathname, input.value);
        updateButton();
    });

    button.addEventListener("click", function () {
        window.location.href = nextPage;
    });
}
