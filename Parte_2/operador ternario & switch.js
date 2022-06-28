// Switch 
/*
let opcao = 1

if(opcao == 1){
    console.log("Saldo conta")
}else if(opcao == 2){
    console.log("Cartão de crédito")
}else if(opcao == 3){
    console.log("Fatura")
}else if(opcao == 4){
    console.log("Desbloqueio de cartão")
}else{
    console.log("Falar com atendente")
}
*/

let opcao = 1
switch(opcao){
    case 1:
        console.log("Saldo conta")
        break
    case 2:
        console.log("Cartão de crédito")
        break
    default:
        console.log("Opção inválida")
}

//Operador Ternário

let idade = 20
idade >= 18 ? "maior idade" : "menor idade"