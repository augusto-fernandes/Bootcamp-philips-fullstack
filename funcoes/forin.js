function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: 'joão',
    idade: "20",
    cidade: "salvador"
}

forInExemplo(meuObjeto);
//nome
//idade
//cidade



function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

console.log();
forInExemplo2(meuObjeto);

//joão
//20
//salvador