const button = document.getElementById("enviar")

button.addEventListener("click", (Event) => {
    Event.preventDefault()

    const nome = document.getElementById("nome")
    const nomeobrigatorio = document.getElementById("nomeobrigatorio")
    const email = document.getElementById("email")
    const emailobrigatorio = document.getElementById("emailobrigatorio")
    const mensagem = document.getElementById("mensagem")
    const msgobrigatorio = document.getElementById("msgobrigatorio")

    if (nome.value == "") {
        nome.classList.add("errorInput")
        nomeobrigatorio.innerHTML = "Campo nome obrigatório.";
    } else {
        nome.classList.add("successInput")
        nomeobrigatorio.innerHTML = "";
    }

    if (email.value == "") {
        email.classList.add("errorInput")
        emailobrigatorio.innerHTML = "Campo e-mail obrigatório.";
    } else {
        email.classList.add("successInput")
        emailobrigatorio.innerHTML = "";
    }

    if (mensagem.value == "") {
        mensagem.classList.add("errorInput")
        msgobrigatorio.innerHTML = "Campo mensagem obrigatório.";
    } else {
        mensagem.classList.add("successInput")
        msgobrigatorio.innerHTML = "";
    }
})