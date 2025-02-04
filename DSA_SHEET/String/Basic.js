const str = "hello Tashu good morning";

console.log(str.length);

console.log(str[2]);

console.log(str.charAt(6));

str.replace("s", "b"); // replaces first instance of that character or word
str.replaceAll("e", "c"); // replaces all instance of that character or word.

const newStr = "    Hello  World    ";
newStr.trim();

newStr.toLowerCase();
newStr.toUpperCase();

const str1 = "apple";
const str2 = "apple";

str1.localeCompare(str2);

str.indexOf("T");
// index of a character or word's first appearance

str.lastIndexOf("g");

// index of a character or word's last appearance.

const str4 = "welcome to the world of dsa";
console.log(str4.split(" "));

const arr = ["apple", "banana"];
console.log(arr.join(" and "));

console.log(str4.includes("world"));

const c=12345;
const chang=String(c);
console.log(typeof chang);

console.log(c.toString());

const sub="the sky is blue";
let j=sub.length;
let i=11;
console.log(sub.substring(i,j));
console.log(j-i);
