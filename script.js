const moodButtons = document.querySelectorAll('.mood-button');
const journalEntry = document.getElementById('journal-entry');
const submitButton = document.getElementById('submit-button');

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handle mood selection (e.g., store in local storage)
        const selectedMood = button.getAttribute('data-mood');
        console.log('Selected Mood:', selectedMood); 
    });
});

submitButton.addEventListener('click', () => {
    // Handle form submission (e.g., send data to server)
    const entryText = journalEntry.value;
    console.log('Journal Entry:', entryText); 
});
