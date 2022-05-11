/*let array =['string',1 , true];
console.log(array)*/

let array = ['string', 1, true ['1'], ['2'],['3'], ['4']];
//console.log(array[0])


//foreach
//array.forEach(function(item, index){console.log(item,index)});//

//adiciona um item no final do array
array.push(1);
console.log(array)

//remove o ultimo item de um array
array.pop();
console.log(array);

//remove item no inicio do array
array.shift()
console.log(array);

// add item no inicio do array
array.unshift('novo item no inicio');
console.log(array);

//retorna o indice de um valor
console.log(array.indexOf(true));

//remove ou substitui um item pelo indice
array.splice(0, 3);
console.log(array);

//retorna uma parte de um array existente
let novoArray = array.slice(0, 3)
console.log(novoArray)

let object= {
    string: 'string', 
    number: 1, 
    boolean: true,
    array:["array"],
    objectInterno:{
        objectInterno:'obejto interno'
    }
};

    console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var{string, boolean, objectInterno} = object;
console.log(string, boolean,objectInterno);
