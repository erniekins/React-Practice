const square = function (x) {
    return x * x
};

//same function as =>
// always anon can't name like the function above
// return is implicit 

//const squareArrow = (x) => {return x * x;};

const squareArrow = (x) => x * x

console.log(squareArrow(4));

//const getFirstName = (name) => {return name.split(' ')[0];};

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName("Erin Averill"));

// Part 2 of arrow functions 

// arguments obj - no longer bound with arrow function

const add = (a,b) => {
    // console.log(arguments) not usable for arrow
    return a + b
}
console.log(add(55,1,1001))
// this keyword is also no longer bound

const user = {
    name: 'Erin',
    cities: ['Seattle', 'The Moon', 'Colleyville'],
    printPlacesLived() {
        // console.log(this.name)
        // console.log(this.cities);
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + " has lived in " + city ;
        // });
        return this.cities.map((city) => this.name + " has lived in " + city );
        //work around for this is to const that = this and change this on line 40 to 
        //that
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
        //return cityMessages;
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 4, 25, 80],
    multiplyBy: 7,
    mulitply(){
        return this.numbers.map((number) => this.multiplyBy * number)
    }
};

console.log(multiplier.mulitply());