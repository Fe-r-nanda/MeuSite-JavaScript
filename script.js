//var /** global msm fora do escopo*/
//let /*só funciona dentro do escopo selecionado*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')  /*txt foi a div criada (div é um espaço na tela)*/ 
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'                 /*esse inner html fará a frase aparecer na tela*/
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'                      /*else, se for a partir de 3 letras o nome é valido*/
        txtNome.style.color = 'green' 
        nomeOk = true
    }
}
        


function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){          /*se nao tiver @ ele da invalido*/
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'

    }else{
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}


function validaAssunto(){
    txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto maior que o permitido, digite até 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'   /* quando chegar ate 100char ele nao aparece mais o que escrever*/ 
        assuntoOk= true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOK == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

