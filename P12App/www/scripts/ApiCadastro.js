function ApiCondominoPost() {
    jQuery.support.cors = true;

   
    ModalCarregando();

    jQuery.ajax({
        dataType: "json",
        url: "http://localhost:22593/api/cadastro",
        async: false,
        type: "POST", //Chamada metodo post
        data: JSON.parse('{ "Nome": "' + document.getElementById("txtNome").value + '","Telefone": "' + document.getElementById("txtTelefone").value + '", "Email": "' + document.getElementById("txtMail").value + '","Senha": "' + document.getElementById("txtSenha").value + '", "Responsavel": "' + document.getElementById("rbResponsavel").checked + '", "Sindico": "' + document.getElementById("rbSindico").checked + '", "Apartamento": ' + document.getElementById("listaApartamento").value + '}'), //TRANSFORMA STRING EM JSON
        context: document.body
    }).success(function (data) {
        ListarUsuarios(data);
        $('#modalloader').modal('close');
    });

}

function ListarUsuarios(data) {
    var texto = data;
    modal(texto);

    //if (data) {
    //    var texto = "Cadastrado com sucesso!";
    //    modal(texto);
    //}
    //else {
    //    var texto = "Favor preencher todos os campos";
    //    modal(texto);
    //}
}

//Ativa Modal
function modal(texto) {
    document.getElementById("txtModalCadastro").innerHTML = texto;
    $('#modalCadastro').modal('open');
}

//MODAL DO LOAD
function ModalCarregando() {
    $('#modalloader').modal('open');
}



