const user ={
    id: 42,
    displayName: 'Jdoe',
    fullName: {
        firstName:'John',
        lastName:'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName:{firstName:first, lastName:last}}) {
    return `${first} ${last}`;
}


 //John Doe

console.log(userId(user)); //42
console.log(getFullName(user));
 