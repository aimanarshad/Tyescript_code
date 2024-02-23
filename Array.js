//Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
var names = ["Eric", "john", "amli", "herry"];
console.log("First index:  " + names[0]);
console.log("Second index: " + names[1]);
console.log("Third index: " + names[2]);
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\n\t EXERCISE 12:\n");
var message = "To you dear friend, I'll always be there for you, no matter what";
for (var i = 0; i < names.length; i++) {
    console.log(i, names[i], message);
}
//our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Define an array of bicycles
console.log("\n\t EXERCISE 13:\n");
var bicycles = ["mountain bike", "road bike", "BMX bike", "commuter bike"];
for (var j = 0; j < bicycles.length; j++) {
    console.log("I would like to own a", bicycles[j] + ".");
}
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/
console.log("\n\t EXERCISE 14:\n");
var Guest_list = ["grandfather", "grandmother", "grand daughter"];
for (var _i = 0, Guest_list_1 = Guest_list; _i < Guest_list_1.length; _i++) {
    var List = Guest_list_1[_i];
    console.log(List, "Are you free to catch up for dinner to night?");
}
