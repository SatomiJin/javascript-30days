const dogs = [
  {
    name: "Snickers",
    age: 2,
  },
  {
    name: "Hugo",
    age: 8,
  },
];

const makeGreen = () => {
  const p = document.querySelector(`p`);
  p.style.color = `#BADA55`;
  p.style.fontSize = "50px";
};

// Regular
console.log("Hello i am Satomi Jin!!!");

// Interpolated
console.log(`Hello i am %s !!!`, `Satomi Jin`);
// or
let name = "Satomi Jin";
console.log(`Hello I am ${name} !!!`);

// Styled (you can use CSS for console like it:)
console.log(`%c Hello I am Satomi Jin`, `font-size: 1rem; color: red`);

// Warning
console.warn("Warning .....");

//Error
console.error("Not found 404...");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector(`p`);
console.assert(p.classList.contains("ouch"), `Wrongs`);

// Clearing
console.clear();

// Viewing DOM Element
console.log(p);
console.dir(p);

// Grouping togethers
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name} and ${dog.age} year old!`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count(`Wes`);
console.count(`We`);
console.count(`We`);
console.count(`Wes`);
console.count(`Wes`);
console.count(`Wes`);
console.count(`We`);
console.count(`We`);
console.count(`Wes`);
console.count(`We`);

// Timing
console.time(`Fetching data`);
fetch(`https://api.github.com/users/wesbos`)
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log("data:", data);
  });

//   Table
console.table(dogs);
