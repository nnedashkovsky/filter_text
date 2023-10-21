function filterText(text, selectedLetters) {
    const words = text.split(/\s+/);
    const wordCounts = new Map();

    // Подсчет повторений слов
    words.forEach(word => {
        if (selectedLetters.every(letter => word.includes(letter)) && word.split('').every(letter => selectedLetters.includes(letter))) {
            if (wordCounts.has(word)) {
                wordCounts.set(word, wordCounts.get(word) + 1);
            } else {
                wordCounts.set(word, 1);
            }
        }
    });

    // Сортировка слов по количеству повторений
    const sortedWords = [...wordCounts.entries()].sort((a, b) => b[1] - a[1]);

    const filteredWords = sortedWords.map(entry => entry[0]);

    const filteredText = filteredWords.join(' ');
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
    // Здесь добавим код для фильтрации текста из текстового поля
    const inputText = document.getElementById("inputText").value;
    const inputLetters = document.getElementById("inputLetters").value;
    const selectedLetters = inputLetters.split('');
    filterText(inputText, selectedLetters);
});
