const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen in my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?

// const isAdult = people.some((person) => {
//   const currentYear = new Date().getFullYear();
//   return currentYear - person.year >= 19;
// });
// or you can write like it:
const isAdult = people.some((person) => new Date().getFullYear() - person.year >= 19);
// Array.prototype.every() // is everyone 19?
const allAdult = people.every((person) => new Date().getFullYear() - person.year >= 19);
// Array.prototype.find()
const isPersonAdult = people.find((person) => new Date().getFullYear() - person.year >= 19);
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let comment = comments.find((person) => person.id == "823423");
// Array.prototype.findIndex()
let comment2 = comments.findIndex((person) => person.id == "823423");
// console.log(comment2);

const newComments = [...comments.splice(1, comment2)];
// Find the comment with this ID

// delete the comment with the ID of 823423
