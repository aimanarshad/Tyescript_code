"use strict";
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\n\t EXERCISE 14:\n");
var Guest_list = ["grandfather", "grandmother", "grand daughter", "grand uncle"];
console.log("\n\tINVITATION NO 1:\n");
for (var _i = 0, Guest_list_1 = Guest_list; _i < Guest_list_1.length; _i++) {
    var List = Guest_list_1[_i];
    console.log(List, "Are you free to catch up for dinner to night?");
}
// You just heard that one of your guests can’t make the dinner,no
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log("\n\tChanging Guest List:\n");
Guest_list = __spreadArray(__spreadArray([], Guest_list, true), ["Mamoo", "Cousin NO1"], false);
console.log(Guest_list);
console.log("\n\t Not coming guest\n");
console.log("Grand daughter can't make it\n grand uncle can't make it");
var More_Guest = __spreadArray(__spreadArray([], Guest_list, true), ["Anty", "Cousin NO 2", "Cousin NO 3"], false);
console.log(More_Guest);
console.log("\n\t INVITATION NO 2:");
for (var _a = 0, Guest_list_2 = Guest_list; _a < Guest_list_2.length; _a++) {
    var Lists = Guest_list_2[_a];
    console.log(Lists, "Are you free to catch up for dinner to night?");
}
//Add one 
//• Add one.
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var More_Guest = __spreadArray(["amili"], More_Guest, true);
console.log("\n\tnew guest to the beginning of your array\n", More_Guest);
More_Guest.splice(3, 0, "hello");
console.log("\n\tnew guest to the middle of your array\n", More_Guest);
/*18.	Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/
var Places = ["turkey", "kaba", "California", "Maldives", "Paris"];
for (var i = 0; i < Places.length; i++) {
    console.log(Places[i]);
}
Places.sort();
console.log("Sorted Array", Places);
Places.reverse();
console.log("Reverse Array", Places);
Places.reverse();
console.log("Reverse Again", Places);
/*19.	Dinner Guests: Working with one of the programs from Exercises 14
through 18, print a message indicating the number of people you are inviting to dinner.
*/
console.log("NO of inviting people are", Guest_list.length);
/*20.	Think of something you could store in a array. For example,
 you could make a list of mountains, rivers,
  countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items. */
var readlineSync = require("readline-sync");
var World_Places = [];
var n = 5;
for (var z = 0; z < n; z++) {
    var element = readlineSync.question("Enter you favourite place:");
    var World_Places = __spreadArray(__spreadArray([], World_Places, true), [element], false);
    console.log(World_Places);
}
/*21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items */
/*22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
 */
var s = [1, 2, 4, 5, 3];
console.log(s[4]);
console.log("\t\n CONDITIONAL TESTING\n");
console.log(s.length == 4);
console.log(s[0] == 1);
console.log(s[4] == 5);
console.log(World_Places.length != n);
console.log(World_Places.length == n);
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
