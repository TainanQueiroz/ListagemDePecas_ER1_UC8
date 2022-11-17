var listadePeca = ["Filtro de Ar", "Amortecedor", "Disco de Freio"]

// Existe espaço na lista?
if(listadePeca.length < 2){
    //É possivel cadastrar
    console.log("É possível cadastrar mais peças")
} else {
    //Não é possivel cadastrar
    console.log("A lista de cheia")
}

let peso = 500

if (peso<100){
console.log("A peça precisa ter no mínimo 100g")
}else{
console.log("A peça possui peso adequado")

}

let nomePeca = "Caixa de cambio"
if (nomePeca.length>3){
console.log("O tamanho do nome da peça está adequado")
}else{
console.log("O nome deve possuir mais do que 3 caracteres, digite um nome adequado")
}
