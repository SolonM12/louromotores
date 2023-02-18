
// variáveis do menu
var menu = document.getElementById('menu');
var navMenu = document.getElementById('navMenu');
var a = 'off';

// animação do menu
function clickMenu()  {
    if (a == 'off'){
    menu.style.background = 'var(--azulweg)'
    navMenu.style.visibility = 'visible'
    navMenu.style.width = '65%'
    a = 'on'
}
    else {
        menu.style.background = 'var(--azullouro)'
        navMenu.style.visibility = 'hidden'
        navMenu.style.width = '0%'
        a = 'off'
    }
    
};

/*
function sair(){
    menu.style.background = 'var(--azullouro)'
    navMenu.style.visibility = 'hidden'
    navMenu.style.width = '0%'
    a = 'off'
};
*/

//aparecer link da weg (apenas mouse enter na div imagem quando desktop)
function linkWeg(){
    document.getElementById('wegLink').style.display = 'block';
}
function hideWeg(){
    document.getElementById('wegLink').style.display = 'none';
}
