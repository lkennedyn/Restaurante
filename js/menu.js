var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function (){
    'use strict';
    nav.classList.toggle('mostrar');
});