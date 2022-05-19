function logLetras(palavra){
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = 'abacaxi';

logLetras(palavra);
//a
//b
//a
//c
//a
//x
//i


console.log('-----------------------------');

function logNumeros(nums) {
    for(num of nums){
        console.log(nums);
    }
}

const nums = [30,20,233,2]
logLetras(nums)
//30
//20
//233
//2