// Топ таңдау
document.getElementById('groupSelect').addEventListener('change', function() {
    const selectedGroup = this.value;
    document.getElementById('selectedGroup').textContent = `Сіз таңдаған топ: ${selectedGroup}`;
    console.log(`Топ: ${selectedGroup}`);
});

// Пікір тексеру
document.getElementById('comment').addEventListener('input', function() {
    const comment = this.value;
    const feedback = document.getElementById('commentFeedback');
    if (comment.length > 15) {
        feedback.textContent = 'Пікір 15 символдан аспауы керек!';
    } else {
        feedback.textContent = '';
    }
});

// Бағалау мәнін көрсету
document.getElementById('rating').addEventListener('input', function() {
    const ratingValue = this.value;
    document.getElementById('ratingValue').textContent = ratingValue;
});

// Форма жіберу
document.getElementById('submitButton').addEventListener('click', function() {
    const comment = document.getElementById('comment').value;
    const feedback = document.getElementById('commentFeedback').textContent;
    if (feedback === '' && comment.length <= 15) {
        const selectedGroup = document.getElementById('groupSelect').value;
        console.log(`Топ: ${selectedGroup}, Пікір: ${comment}`);
        document.getElementById('formFeedback').textContent = 'Ақпарат қабылданды!';
        document.getElementById('formFeedback').classList.add('success');
    } else {
        document.getElementById('formFeedback').textContent = 'Форма дұрыс толтырылмады!';
        document.getElementById('formFeedback').classList.remove('success');
    }
});
