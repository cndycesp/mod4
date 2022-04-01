/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/
var names = new Array();
names[0] = "Yaakov";
names[1] = "John";
names[2] = "Jen";
names[3] = "Jason";
names[4] = "Paul";
names[5] = "Frank";
names[6] = "Larry";
names[7] = "Paula";
names[8] = "Laura";
names[9] = "Jim";


for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Good Bye " + names[i])
    } else {
        console.log("Hello " + names[i])
    }
}
