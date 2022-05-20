//clona a estrutura da funcao onde é chamada e aplica o valor do objeto passado como paramentro

const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'});

console.log(bruno());
//Bruno