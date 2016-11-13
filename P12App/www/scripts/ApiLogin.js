//Login
function ApiLogin() {
    jQuery.support.cors = true;

    ModalCarregando();

    jQuery.ajax({
        dataType: "json",
        url: "http://localhost:22593/api/Login",
        async: false,
        method: "POST",
        data: JSON.parse('{"Email": "' + document.getElementById("txtUsuario").value + '","Senha": "' + document.getElementById("txtSenha1").value + '"}'), //TRANSFORMA STRING EM JSON
        context: document.body
    }).success(function (data) {
        ListarTarefas(data);

        //FECHA MODAL PRE LOADER
        $('#modalloader').modal('close');
    });

    function ListarTarefas(data) {
        var user = document.getElementById("txtUsuario").value;
        var psd = document.getElementById("txtSenha1").value;

        if (user == "" || psd == "") {
            var texto = "Preencha todos os campos!"
            modal(texto);
        }
        else if (data.length != 0) {
            window.location.href = 'Principal.html';
        }
        else {
            var acesso = "Acesso Negado";
            modal(acesso);
        }
    }
}


//MODAL DO LOAD
function ModalCarregando() {
    $('#modalloader').modal('open');
}

//MODAL QUE RETORNA MENSAGENS SOBRE O LOGIN
function modal(texto) {
    document.getElementById("txtModal1").innerHTML = texto;

    $('#modalLogin').modal('open');
}