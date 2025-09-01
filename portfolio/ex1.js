let botao = document.querySelector("#botao");
botao.style.background="blue";
botao.style.color="white"
let fullred=false;
let contaclique=0;

/*OPÇÃO 1*/
botao.addEventListener("mouseover",e =>{
   
    if(fullred===false){
        botao.style.background="green";
    }
        
});
/*OPÇÃO 1 (menos trabalhosa)*/


/*OPÇÃO 2
botao.addEventListener("mouseover",trocaVerde);

function trocaVerde(){
    botao.style.background="green"
}
/*OPÇÃO 2*/

botao.addEventListener("mouseout",e =>{
    if(fullred===false){
        botao.style.background="blue";
    }
});

botao.addEventListener("click",e =>{

    contaclique++;

    if(contaclique>=5){
        botao.style.background="red";
        botao.innerHTML="EU AVISEI!";
        fullred=true;
    }
    
});