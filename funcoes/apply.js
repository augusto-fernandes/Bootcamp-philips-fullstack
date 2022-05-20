
 const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'godi',
};

function getsomenthing(){
    console.log(this.nome);
}

getsomenthing.apply(pessoa);

//--------------------------------------------------------

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
} 

soma.apply(myObj,[ 1,5]); //em apply os argumentos são passados dentro de um array
//12