
// Dark Layout Js 

localStorage.theme = 'dark';
let isAlreadySet = localStorage.theme == 'dark'
window.addEventListener('unload', () => {
    !isAlreadySet && localStorage.removeItem('theme')
})