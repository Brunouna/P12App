function ApiCaixa() {

    jQuery.support.cors = true;

    jQuery.ajax({
        dataType: "json",
        url: "http://oliveirabruno.com.br/api/ValorCaixa",
        async: false,
        context: document.body
    }).success(function (data) {
        Apt(data);
    });

    function Apt(data) {
        document.getElementById("valorCaixa").innerHTML ="R$ " + data[0].Valor;

        
    }
}