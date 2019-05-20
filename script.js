alert("Hi!");
var old = null;
while (old == null || old.length == 0) {
	old = prompt("How old are you?");
	if (old == null || old.length == 0) {
		alert("I dont understand!");
	}
}
alert("I see!");
alert("I am "+old+" too)");
var name = prompt("What is your name?");
while (name == null || name.length == 0) {
	name = prompt("What is your name?");
	if (name == null || name.length == 0) {
		alert("I dont understand!");
	}
}
alert("Nice to meet you, "+name);