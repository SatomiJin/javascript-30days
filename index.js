// Some method use for arrays with JS
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. filter the list of inventors for those who were born in the 1500's
const filterArray1 = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1599) {
    return true; //Keep
  }
});
// or you can write in 1 line like a:
const filterArray2 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);

// Array.prototype.map()
// 2. give us an array of the inventory first and last names
const fullNames1 = inventors.map((inventor) => inventor.first + " " + inventor.last);
// or you can do like a: (you can use a backtick change for operator)
const fullNames2 = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);

// Array.prototype.sort()
// 3. Sort the inventors by birth day , oldest to youngest
const sortArr1 = inventors.sort(function (a, b) {
  if (a.year < b.year) return 1;
  else return -1;
});

// or you can write this in 1 line like a
const sortArr2 = inventors.sort((a, b) => (a.year < b.year ? 1 : -1));

// Array.prototype.reduce()
// 4. How many year this all inventors live

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// 5. Sort the inventors by year lived
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;

  return lastGuy > nextGuy ? -1 : 1;
});

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//const category = document.querySelector(".mw-category");
// when you coding its you have a nodelist and no support .map() => you can use [...rest] if you want to .map()
// or you can use a Array.from() replace [...rest]
// const links = [...category.querySelectorAll("a")];
// const de = links.map((link) => link.textContent).filter((name) => name.includes("de"));

// 7.Sort Exercise
// Sort the people by last name
const alphabetName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aFirst > bFirst ? 1 : -1;
});

// Reduce Exercise
// 7. Sum up the instances of each of these
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car"];

const sumUp = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});

console.log(sumUp);
