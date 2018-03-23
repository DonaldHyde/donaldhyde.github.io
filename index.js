window.addEventListener('load', () => {
    let navBar = document.getElementById('nav-bar');
    let menu = navBar.getElementsByClassName('menu');
    
    menu[0].addEventListener('click', (e) => {
        menu[0].parentNode.classList.contains('active') ?
            menu[0].parentNode.classList.remove('active') :
            menu[0].parentNode.classList.add('active');
    })
});