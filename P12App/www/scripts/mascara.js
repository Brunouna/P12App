//Verificar se há campos vazios -------------------------------------------------------------
function validaCampo(campoDeEntrada, textoAjuda) {//validateNonEmpty(inputField)
    //Veja se o valor de entrada contém qualquer texto
    if (campoDeEntrada.value.length == 0) {
        //Os dados são inválidos, definir a mensagem de ajuda
        if (textoAjuda != null) {
            textoAjuda.innerHTML = "Por favor insira um valor.";
        }
        return false;
    }
    else {
        if (textoAjuda != null) {
            textoAjuda.innerHTML = "";
        }
        return true;
    }
}

//Validar Email -----------------------------------------------------------------------------
function validarEmail(campoDeEntrada, textoAjuda) {
    if (validaCampo(campoDeEntrada, textoAjuda)) {
        // return false;
    }
    //Então veja se o valor de entrada é um endereço de e-mai
    return validarExReg(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/, campoDeEntrada.value, textoAjuda,
        "Insira um email válido (por exemplo, seuNome@gmail.com).");
}

//Validar Telefone --------------------------------------------------------------------------
// - /^\d{2}-\d{4}-d{4}$/
function validarTelefone(campoDeEntrada, textoAjuda) {
    if (validaCampo(campoDeEntrada, textoAjuda)) {
        // return false;
    }
    //Então veja se o valor de entrada é um número de telefone com a função que utiliza expressões regulares
    return validarExReg(/^\d{2}-\d{5}-d{4}$/, campoDeEntrada.value, textoAjuda,
        " ");
}

/* Máscaras ER - Padrão com parenteses*/
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

//Validar usando Expressão regular ----------------------------------------------------------
function validarExReg(regex, campoDeEntrada, textoAjuda, msgAjuda) {
    if (!regex.test(campoDeEntrada)) {//Teste Expressão Regular
        if (textoAjuda != null) {
            textoAjuda.innerHTML = msgAjuda;
        }
        return false;
    } else {
        if (textoAjuda != null) {
            textoAjuda.innerHTML = "";
        }
        return true;
    }
}

//Teste de chamada nos eventos -----------------------------------------------------------------
function alerta() {
    alert("Chamou!");
}