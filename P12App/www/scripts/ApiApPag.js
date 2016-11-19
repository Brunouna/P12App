function apiAp(id) {

    jQuery.support.cors = true;

    jQuery.ajax({
        dataType: "json",
        url: "http://localhost:22593/api/apartamentos/" + id,
        async: false,
        context: document.body
    }).success(function (data) {
        Apto(data);
    });

    function Apto(data) {
        $(document).ready(function () {
            $("#Apto").hide();

            $("#Pag").show();
        })

        document.getElementById("Ap").innerHTML = id;
        document.getElementById("Nome").innerHTML = data.Nome;
        document.getElementById("Mail").innerHTML = data.Email;
        document.getElementById("Telefone").innerHTML = data.Telefone;

        verificaCheckBox(data);

    }
}


function verificaCheckBox(data) {

    if (data.Janeiro) {
        document.getElementById("jan").checked = true;
        document.getElementById("jan").disabled = true;
    }
    if (data.Fevereiro) {
        document.getElementById("fev").checked = true;
        document.getElementById("fev").disabled = true;
    }
    if (data.Marco) {
        document.getElementById("mar").checked = true;
        document.getElementById("mar").disabled = true;
    }
    if (data.Abril) {
        document.getElementById("abr").checked = true;
        document.getElementById("abr").disabled = true;
    }
    if (data.Maio) {
        document.getElementById("mai").checked = true;
        document.getElementById("mai").disabled = true;
    }
    if (data.Junho) {
        document.getElementById("jun").checked = true;
        document.getElementById("jun").disabled = true;
    }
    if (data.Julho) {
        document.getElementById("jul").checked = true;
        document.getElementById("jul").disabled = true;
    }
    if (data.Agosto) {
        document.getElementById("ago").checked = true;
        document.getElementById("ago").disabled = true;
    }
    if (data.Setembro) {
        document.getElementById("set").checked = true;
        document.getElementById("set").disabled = true;
    }
    if (data.Outubro) {
        document.getElementById("out").checked = true;
        document.getElementById("out").disabled = true;
    }
    if (data.Novembro) {
        document.getElementById("nov").checked = true;
        document.getElementById("nov").disabled = true;
    }
    if (data.Dezembro) {
        document.getElementById("dez").checked = true;
        document.getElementById("dez").disabled = true;
    }
}


function ApiPagamento() {
    jQuery.support.cors = true;

    jQuery.ajax({
        dataType: "json",
        url: "http://localhost:22593/api/pagamentos/",
        async: false,
        type: "POST", //Chamada metodo post
        data: JSON.parse('{ "Janeiro": "' + document.getElementById("Janeiro").checked + '","Fevereiro": "' + document.getElementById("Fevereiro").checked + '", "Marco": "' + document.getElementById("Marco").checked + '","Abril": "' + document.getElementById("Abril").checked + '", "Maio": "' + document.getElementById("Maio").checked + '", "Junho": "' + document.getElementById("Junho").checked + '" , "Julho": "' + document.getElementById("Julho").checked + '" , "Agosto": "'
            + document.getElementById("Agosto").checked + '" , "Setembro": "' + document.getElementById("Setembro").checked + '", "Outubro": "' + document.getElementById("Outubro").checked + '" , "Novembro": "' + document.getElementById("Novembro").checked + '" , "Dezembro": "' + document.getElementById("Dezembro").checked + '" , "Apartamento": "' + document.getElementById("Ap").textContent + '" }'), //TRANSFORMA STRING EM JSON
        context: document.body
    }).success(function (data) {
        verificaCheckBox(data);
    });
}

function modal(ap) {
    var texto = "Tem certeza que deseja efetuar o pagamento do apartamento ";
    document.getElementById("txtModal").innerHTML = texto + ap + "?";

    $(document).ready(function () {
        $("#myModal").modal();
    });
}