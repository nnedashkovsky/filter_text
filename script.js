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

    // Выводим отфильтрованные слова в новом окне
    const newWindow = window.open("", "filteredWords", "width=400,height=400");
    newWindow.document.write("<h2>Слова, в которых есть введенные буквы:</h2>");
    newWindow.document.write("<p>" + filteredWords.join(" ") + "</p>");
});
