var nameVar = "Erin";
// can reassign var overriding old value
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = "Jon";
//let nameLet = "Jessica"
console.log('nameLet', nameLet);

//can't rename const in addition to redefine
const nameConst = "Bud";
//nameConst = "Bane";
console.log('nameConst', nameConst);

//var let and const are function scoped 
function getPetName(){
    var petName = "Fergus";
    return petName;
}

getPetName();
const petName = getPetName();
console.log(petName);

//block scoping true for let and const accessible within {} but not outside of the 
//code blocks 

// var is more globally available