function highlight() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(function (element) {
        element.style.color = 'rgb(0, 128, 0)'; // green
    });
}

function return_normal() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(function (element) {
        element.style.color = 'rgb(0, 0, 0)'; // black
    });
}
