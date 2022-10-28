const formu = document.querySelector(".formulario");
const botãoDenome = document.querySelector('#nome');
const botãoDeEmail = document.querySelector('#email');
const botãoDeNumero = document.querySelector('#numero');
const botãoDeEnviar = document.querySelector('.botao');
const mensagemErro = document.querySelector('.validaErro');


function generatePattern(param) {
    if(param === "nome") return /[A-Za-z]{3}/;
    if(param === "email") return /^\S+@\S+\.\S+$/;
    if(param === "numero") return /[0-9]{9}/;
}

function validaForm() {
    formu.addEventListener('submit', function(e) {
        e.preventDefault();
    });
    const inputs = [
        {nome: 'nome', botao: botãoDenome},
        {nome: 'email', botao: botãoDeEmail},
        {nome: 'numero', botao: botãoDeNumero}
    ]

    
    let submitOK = true;
    for (let i = 0; i < inputs.length; i++) {
        if(!generatePattern(inputs[i].nome).test(inputs[i].botao.value)){
            inputs[i].botao.style.border = "2px solid red";
            submitOK = false;
            break
        }else {
            inputs[i].botao.style.border = "none";
            submitOK = true;
        }
    }
    if (submitOK) {
        document.querySelector('.modalzin').style.display = 'flex';
        mensagemErro.style.display = 'none';
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].botao.value = '';
        }
    }else {
        mensagemErro.style.display = 'flex';
    }

}
function fechaModal(){
    document.querySelector('.modalzin').style.display = 'none';
}