//um array com todos os parametros passados qunado a funcao foi invocada

function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1,2,4,6,10,90,20));