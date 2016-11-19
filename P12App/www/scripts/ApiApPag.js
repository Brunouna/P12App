﻿function apiAp(id) {

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