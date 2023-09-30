// Contoh 1: this di dalam objek
var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Output: "John Doe"

// Contoh 2: this di dalam fungsi biasa
function sayHello() {
  console.log("Hello, " + this.firstName);
}

var person1 = {
  firstName: "Alice",
};

var person2 = {
  firstName: "Bob",
};

sayHello.call(person1); // Output: "Hello, Alice"
sayHello.call(person2); // Output: "Hello, Bob"
