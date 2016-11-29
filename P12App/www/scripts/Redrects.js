function cadastro() {
    //alert('testando');
    window.location.href = 'cadastro.html';
}

function mural() {
    window.location.href = "mural.html";
    //alert('Mural');
}

function muralCondominos() {
    window.location.href = "S_mural.html";
    //alert('Mural');
}

function contas() {
    window.location.href = 'ApPag.html';
}

function contasCondominos() {
    var apartamento = document.getElementById("apto").value;
    window.location.href = 'pagamentos.html?minhaVariavel=' + apartamento;
}


function caixa() {
    alert('caixa');
}

function notificacoes() {
    alert('Votação');    
}

function telaLogin() {
    window.location.href = 'index.html';
}

function recebeVariavel() {
    var loc = location.search.substring(1, location.search.length);
    var variavel = loc.split("=");
    document.getElementById("apto").value = variavel[1];
}