const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#calculator");
let resposta = document.querySelector("#resposta");
/* Até aqui selecionamos todos os elementos criados no html.*/

seletor.addEventListener("change",calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup",calcular);

function calcular(){
    if(campo1.value!='' && campo2.value!='' ){
        /* resposta.classList.add("problema");
           resposta.innerHTML="Campo Vazio";
        setTimeout(() => {
           resposta.classList.remove("problema");
           resposta.innerHTML=''; 
        }, 3000);
         Usamos esses comandos para deixar a mensagem em vermelho por apenas 3 segundos */
    
        const valor1 = parseInt(campo1.value);
        const valor2 = parseInt(campo2.value);
        const calculator = seletor.value;
        if(calculator==="Somar")
            resposta.innerHTML = valor1 + valor2
        if(calculator==="Subtrair")
            resposta.innerHTML = valor1 - valor2
        if(calculator==="Multiplicar")
            resposta.innerHTML = valor1 * valor2
        if(calculator==="Dividir")
            resposta.innerHTML = valor1 / valor2
    }
}