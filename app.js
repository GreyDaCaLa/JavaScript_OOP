console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies){
        this.name= name;
        this.pets= pets;
        this.residence= residence;
        this.hobbies= hobbies;
    }


    info(){
        console.log(`${this.name}, number of pets: ${this.pets}, ${this.residence}`)
        console.log("Hobbies include:")
        console.log(`${this.hobbies.toString()}`)

    }

    soundOff(){

    }

    greetings(){ console.log("Hello fellow person!")}
}

class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer"
    }

    greetings(otherPerson=""){console.log(`Hello ${otherPerson} I am ${this.name} the ${this.occupation}`)}

}


let newPerson = new Person("Grey Da Cala", 0, "1000 Down The Street", ["Dig Holes","Eat","Sleep"]);
let newCoder = new Coder("Sammy Sam", 15, "Far Far Away St.", ["1","2","3","4","5"]);

console.log("newPerson.info()");
newPerson.info();
console.log("----------------");
console.log("newCoder.info()");
newCoder.info();

console.log(" ");
console.log(" ");
console.log(" ");

console.log("newPerson.greetings()");
newPerson.greetings();
console.log("----------------");
console.log("newCoder.greetings()");
newCoder.greetings();


console.log("----------------");
console.log("newCoder.greetings(newPerson.name)");
newCoder.greetings(newPerson.name);
