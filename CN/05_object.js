//object literals (singleton)

const User = {
    name : "devesh",
    age : 18,
    location : "delhi",
    isLoggedIn : false,
    lastLogin : ["Monday" , "Wednesday"]
}

console.log(User.name);
// console.log(User[name]);  //this will not work we gotta tell engine its type to get a output
console.log(User["name"]);


User.name = "harshit"
Object.freeze(User); //after this line no changes will be accepted
User.name = "devesh"
console.log(User);


User.lastName = function() {
    console.log("gupta");
}

console.log(User.lastName);


const course = {
    name : "mern stack",
    price : "455",
    tutor : "hitesh chaudhary"

}

const {tutor} = course;

console.log(tutor); // de-structuring