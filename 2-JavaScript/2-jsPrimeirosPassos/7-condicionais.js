console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    //removendo item da lista
    listaDeDestinos.splice(1,1);
} else {
    console.log("Comprador é menor de idade, não é possível vender");
}

console.log(listaDeDestinos);
