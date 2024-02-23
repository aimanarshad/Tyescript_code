//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "Queen Elizabeth II";
var titlecase = PersonName.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Lowercase:" + PersonName.toLowerCase() + "\nUpercase:" + PersonName.toUpperCase() + "\nTitlecase:" + titlecase);
