
// variáveis do menu
var menu = document.getElementById('menu');
var navMenu = document.getElementById('navMenu');
var a = 'off';

//ideia do mapa
//passo 1
//cliclar num objeto e ele fazer um mapa aparecer (feito)
//fazer o marcador mudar sua cor quando o mapa aparecer (feito)
//fazer a mesma coisa com o mapa de belo jardim (feito)
//fazer com que quando marque um, desmarque o outro




//variaveis mapa Recife
var mapaRecife = document.getElementById('mapaRecife');
var marcadorRec = document.getElementById('marcadorRec')
//variaveis mapa Belo Jardim
var mapaBelojardim = document.getElementById('mapaBelojardim');
var marcadorBj = document.getElementById('marcadorBj')



//por padão recife ligado
mapaRecife.style.display = 'block'
marcadorRec.style.background = 'var(--azulweg)'
//mapa de Belo Jardim
function toggleMapaBj(){
    //Tirando o mapa de Recife
    mapaRecife.style.display = 'none'
    marcadorRec.style.background = 'white'

    //Adicionando o mapa de Belo Jardim
    mapaBelojardim.style.display = 'block'
    marcadorBj.style.background = 'var(--azulweg)'
}

//mapa de recife
function toggleMapaR(){
    //tirando o mapa de Belo Jardim
    mapaBelojardim.style.display = 'none'
    marcadorBj.style.background = 'white'
    //adicionadno o mapa de recife
    mapaRecife.style.display = 'block'
    marcadorRec.style.background = 'var(--azulweg)'
}

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
