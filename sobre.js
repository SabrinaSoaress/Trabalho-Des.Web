var btn = document.querySelector('#show-or-hide');
var esconde = document.querySelector('.esconde');

btn.addEventListener('click', function () {

    if (esconde.style.display === 'block') {
        esconde.style.display = 'none';
    }
    else {
        esconde.style.display = 'block';
    }
});
