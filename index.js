const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh,Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const strip = (bandName) => {
  return bandName.replace(/^(a |the |an )/i, "");
  //   use replace for change part of the string
  //   with  /^ and the "^" it mean start find in head string
  //   and with (a |the |an )  it mean remove the all string item === "an" || "the" || "a"
  //   and the flag /i it mean Does not distinguish upper or lower case letters
};

const sortedBands = bands.sort((a, b) => {
  if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }

  // or you can code like : return strip(a) > strip(b) ? 1 : -1;
});

document.querySelector(".bands").innerHTML = sortedBands
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("");
console.log(sortedBands);
