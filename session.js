function enviarSessao(){
    let txt_login = document.getElementById("txt_login");
    let div_sessoes = document.getElementById("div_sessoes");

    let sessao_digitada = sessionStorage.getItem(txt_login.value);
    if  (sessao_digitada == null){
        sessionStorage.setItem(txt_login.value, txt_login.value);
        console.log("A sessao" + txt_login.value + "foi logada com sucesso.");
        div_sessoes.innerHTML += "<br /> \r\n" + txt_login.value;
    } else {
        console.error("Não foi possivel enviar login" + txt_login.value + ", pois ja há sessao logada com esse login.");
    }
}