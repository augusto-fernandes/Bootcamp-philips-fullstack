const pessoa = {
    firstName: 'Andre',
    lastName : 'Soares',
    id       : 1,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
}

const pessoa2 ={
    firstName: 'diego',
    lastName: 'vieira',
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

console.log(pessoa.fullName());

console.log(pessoa.getId());

pessoa2.getFullName();