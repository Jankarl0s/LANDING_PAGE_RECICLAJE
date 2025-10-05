document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

//Verifica la existencia de una preferencia guardada
if (localStorage.getItem('dark-mode') === 'enable') {
    document.body.classList.add('dark-mode');
}

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enable');
    } else {
        localStorage.setItem('dark-mode', 'enable') 
    }
})