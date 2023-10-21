function filterText(text, selectedLetters) {
    const words = text.split(/\s+/);
    const wordCounts = new Map();

    words.forEach(word => {
        const wordLetters = word.split('');
        if (wordLetters.every(letter => selectedLetters.includes(letter))) {
            if (wordCounts.has(word)) {
                wordCounts.set(word, wordCounts.get(word) + 1);
            } else {
                wordCounts.set(word, 1);
            }
        }
    });

    // Создание массива с уникальными словами и их частотой
    const uniqueWordsWithCounts = [...wordCounts.entries()];

    // Сортировка по частоте появления
    uniqueWordsWithCounts.sort((a, b) => b[1] - a[1]);

    // Получение только уникальных слов
    const uniqueWords = uniqueWordsWithCounts.map(entry => entry[0]);

    const filteredText = uniqueWords.join(' ');
    document.getElementById("filteredText").textContent = filteredText;
}

document.getElementById("fileInput").addEventListener("change", function (event) {
    document.getElementById("filterButton").addEventListener("click", function() {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const text = e.target.result;
                const inputLetters = document.getElementById("inputLetters").value;
                const selectedLetters = inputLetters.split('');
                filterText(text, selectedLetters);
            };
            reader.readAsText(file);
        }
    });
});

document.getElementById("filterButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const inputLetters = document.getElementById("inputLetters").value;
    const selectedLetters = inputLetters.split('');
    filterText(inputText, selectedLetters);
});
