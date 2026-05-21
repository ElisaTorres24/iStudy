//ativando o menu mobile

function mostraMenu() {
    $('#nav-esq ul#menu-principal').css('display', 'flex');
    $('#nav-esq ul#menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('#nav-esq ul#icone-menu li#menu').css('display', 'none');
    $('#nav-esq ul#icone-menu li#menuX').css('display', 'flex');   
}

function esconderMenu() {
    $('#nav-esq ul#menu-principal').css('display', 'none');

    $('#nav-esq ul#icone-menu li#menu').css('display', 'flex');
    $('#nav-esq ul#icone-menu li#menuX').css('display', 'none');
}

let controle = true;

$('#nav-esq ul#icone-menu').click(function() {
    if (controle == true) {
        mostraMenu();
        controle = false;
    } else {
        esconderMenu();
        controle = true;
    }
});