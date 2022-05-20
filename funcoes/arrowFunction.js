const helloWorld = function(){
    return "hello World";
}

const helloWorld2 = () => {
    return "Hello World"
}

const helloWorld3 = () => "Hello World";

//------------------------------------------

const soma = (a,b) => a+b;
soma(4,6); //10

const soma1 = a => a;
soma1(4); //4

// - caso exista apenas uma linha, pode dispensar as chaves e o return.
// - caso exista apenas um parametro, pode dispensar os parenteses.
// - arrow function NAO faz hoisting
