// Simple interactive example: update greeting based on time
document.addEventListener('DOMContentLoaded', function() {
    const nameSpan = document.getElementById('name');
    const hour = new Date().getHours();
    let greeting = '';

    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';

    nameSpan.textContent = `${greeting}, I'm Ali Ebrahimnezhad`;
});