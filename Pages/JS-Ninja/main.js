const el = document.querySelectorAll('p');

el.forEach(element => {
    element.addEventListener('click', el => {
        element.remove();
    })
})