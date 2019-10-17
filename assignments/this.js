/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the Global Scope it would be default to the window/console Object. Unless in strict mode it would be undefined.
* 2. Implicit Binding is the most common rule. Anything to the left of the dot is what the this keyword is referring to.
* 3. In Explicit Binding there are three methods and they allow us to explicitly state what the this keyword is in any given function.
* 4. In New Binding we use the new keyword and it constructs a new object and the this points to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

let thisProject = {
    name: 'Really Hard',
    sound: 'Argh',
    tryMe: function () {
        console.log(this.sound)
    }
}

thisProject.tryMe();

// code example for Implicit Binding

// Principle 3

function Project(whenFinished) {
    this.feeling = whenFinished
}

let myProject = new Project('We feel joy!');

console.log(myProject.feeling);

// code example for New Binding

// Principle 4

// code example for Explicit Binding

function LambdaSchool() {
    console.log(`I am a ${this.job}, in ${this.location}, that makes $${this.salary}!`);
}

let myJob = {
    job: 'Programmer',
    location: 'San Francisco',
    salary: 100000
}

LambdaSchool.call(myJob);