// Task 1
// Create a character object with 3 key:value pairs (e.g. name, show, age)
let character = {
  name: "Bob", 
  show: "Bob's show", 
  age: 20, 
}

// Task 2
// Console log the name of the character
console.log(character.name)

// Task 3
// Modify one of the keys to be a different value
character.age = 21

// Task 4
// Add a new key value pair to the object that is an array (e.g. friends, catchphrases)
character.friends = "Tom"

// Task 5 (Stretch)
// Make an array called characters that has at least 3 character objects in it
// You can make the objects directly in the array or push the objects to the array
let characters = [
  {
    name: "Bob", 
    age: 20, 
    friends: "Tom", 
  }, 
  {
    name: "Tom", 
    age: 20, 
    friends: "Bob", 
  }, 
  {
    name: "Jerry", 
    age: 20, 
    friends: "Bob and Tom", 
  }
]

// Console log the first character
console.log(characters[0])

// Console log the name of the first character
console.log(characters[0].name)
