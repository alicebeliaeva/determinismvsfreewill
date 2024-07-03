function startQuiz() {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'block';
}

function showDeterminism() {
    document.getElementById('determinism').style.display = 'block';
    document.getElementById('free-will').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function showFreeWill() {
    document.getElementById('determinism').style.display = 'none';
    document.getElementById('free-will').style.display = 'block';
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function showResult() {
    const form = document.getElementById('quizForm');
    const answers = Array.from(form.elements).filter(input => input.checked).map(input => input.value);

    const determinismCount = answers.filter(answer => answer === 'determinism').length;
    const freeWillCount = answers.filter(answer => answer === 'free-will').length;

    const resultText = document.getElementById('resultText');

    if (determinismCount > freeWillCount) {
        resultText.textContent = 'אתה נוטה יותר לדטרמיניזם. אתה מאמין שגורמים חיצוניים ואירועים קודמים משפיעים באופן משמעותי על ההחלטות שלך.';
    } else if (freeWillCount > determinismCount) {
        resultText.textContent = 'אתה נוטה יותר לכיוון הרצון החופשי. אתה מאמין שהבחירות והפעולות שלך הם הקובעים העיקריים להחלטות שלך.';
    } else {
        resultText.textContent = 'יש לך השקפה מאוזנת, שמכירה גם בדטרמיניזם וגם ברצון החופשי בעיצוב ההחלטות שלך.';
    }

    document.getElementById('result').style.display = 'block';
    document.getElementById('questionnaire').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('main-screen').style.display = 'block';
});
