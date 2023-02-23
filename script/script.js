/* ALGUNS BUGS PARA CORRIGIR:
1.
Quando você ta na versão mobile, ativa o menu e desativa novamente, ao voltar para a versão desktop o navmenu fica todo cagado!!! 
(sugestão de correção: Definir uma classe diferente para a mudança de estilo ao invés de fazer na classe principal.)
(colocar uma condicional para quando a tela for  maior que o breakpoint)

*/

//variavel do fundo translucido
var fundo = document.querySelector('.fundotranslucido');
var zap = document.querySelector('.linkzap');
// variáveis do menu
let menu = document.getElementById('menu');
let navMenu = document.getElementById('navMenu');
let a = 'off';

//variaveis mapa Recife
let mapaRecife = document.getElementById('mapaRecife');
let marcadorRec = document.getElementById('marcadorRec');
//variaveis mapa Belo Jardim
let mapaBelojardim = document.getElementById('mapaBelojardim');
let marcadorBj = document.getElementById('marcadorBj');

//Botão Whatsapp
function whatsapp(){
    fundo.style.zIndex = '10'
    zap.style.visibility = 'visible'
    fundo.style.visibility = 'visible'

}

//por padão recife ligado
mapaRecife.style.display = 'block';
marcadorRec.style.background = 'var(--azulweg)';
//mapa de Belo Jardim
function toggleMapaBj(){
    //Tirando o mapa de Recife
    mapaRecife.style.display = 'none';
    marcadorRec.style.background = 'white';

    //Adicionando o mapa de Belo Jardim
    mapaBelojardim.style.display = 'block';
    marcadorBj.style.background = 'var(--azulweg)';
}

//mapa de recife
function toggleMapaR(){
    //tirando o mapa de Belo Jardim
    mapaBelojardim.style.display = 'none';
    marcadorBj.style.background = 'white';
    //adicionadno o mapa de recife
    mapaRecife.style.display = 'block';
    marcadorRec.style.background = 'var(--azulweg)';
}

// animação do menu
function clickMenu()  {
    if (a == 'off'){
    menu.style.background = 'var(--azulweg)';
    navMenu.style.visibility = 'visible';
    navMenu.style.width = '65%';
    fundo.style.visibility = 'visible';
    a = 'on';
}
    else {
        menu.style.background = 'var(--azullouro)';
        navMenu.style.visibility = 'hidden';
        navMenu.style.width = '0%';
        fundo.style.visibility = 'hidden';
        a = 'off';
    }
    
};
//função sair do menu
function sair(){
    fundo.style.zIndex = '5';
    menu.style.background = 'var(--azullouro)';
    navMenu.style.visibility = 'hidden';
    navMenu.style.width = '0%';
    a = 'off';
    fundo.style.visibility = 'hidden';
    zap.style.visibility = 'hidden';
};

//aparecer link da weg (apenas mouse enter na div imagem quando desktop)
function linkWeg(){
    document.getElementById('wegLink').style.display = 'block';
}
function hideWeg(){
    document.getElementById('wegLink').style.display = 'none';
}
