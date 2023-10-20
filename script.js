document.getElementById("filter-button").addEventListener("click", function () {
    const inputText = document.getElementById("text-input").value;
    const text = document.getElementById("filtered-text");
    const inputLetters = inputText.split('');

    const originalText = document.getElementById("input-text").textContent;
    const words = originalText.split(/\s+/);

    const filteredWords = words.filter(function (word) {
        return inputLetters.every(function (letter) {
            return word.includes(letter);
        });
    });

    text.textContent = filteredWords.join(" ");
});
