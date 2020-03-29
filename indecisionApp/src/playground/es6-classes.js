//Car => has make model vin getDesc 

class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "Hi my name is " + this.name;
        return `Hi I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old!`
    }
};

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting;
    }

}
const me = new Student("Erin Averill", 100, "Biology");
console.log(me.hasMajor(), me.getGreeting(), me.getDescription());

const other = new Traveler();
console.log(other.getGreeting(), other.getDescription());

const newP = new Traveler("Greg Gregson", 3, "Cool Town")
console.log(newP, newP.hasLocation(), newP.getGreeting());

