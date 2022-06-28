/* Estrutura de uma função 

function name(params) {
    
    return 
} 

/* 

/* Desligar a torneira */
function desligarTorneira(){
    console.log("desligar torneira")
}
desligarTorneira()


/* Pedir copo de água */
function pedirCopoAgua(){
    return "Copo Agua"
}
let retorno = pedirCopoAgua()
console.log(retorno)


/* Ir ao mercado comprar arroz */
function irMercadoComprarArroz(dinheiro){
    console.log("pegar transporte")
    console.log("procurar arroz")

    return "arroz"
}

let retorno = irMercadoComprarArroz(10)
console.log(retorno)


/* Calcular Media */
function calcularMedia(nota1, nota2){
    let totalNotas = nota1 + nota2
    let media = totalNotas/2

    return media
}

let media = calcularMedia(8,8)
console.log(media)
