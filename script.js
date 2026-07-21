function checkAnswer(correct, nextPage) {
    const input = document.getElementById("answer");
    const button = document.getElementById("next");

    // 入力内容を復元
    const saved = sessionStorage.getItem(location.pathname);
    if (saved) {
        input.value = saved;
        if (saved.trim() === correct) {
            button.disabled = false;
        }
    }

    input.addEventListener("input", function () {
        sessionStorage.setItem(location.pathname, input.value);

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
