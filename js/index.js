//Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Mike';

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}.`)

//1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Sam';

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}.`);

//Iteration 2: Conditionals
const driver = hacker1.length;
const navigator = hacker2.length;

//print driver's characters if greater than navigators
if (driver > navigator){
  console.log(`The driver has the longest name, it has ${driver} characters.`)
}
//print if navigator's characters if greater than drivers
else if (navigator > driver){
  console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`)
} 
//print if driver's characters are equal to navigators
else if (driver === navigator){
  console.log(`Wow, you both have equally long names, ${driver || navigator} characters`)
}

//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
function upperCase(up){
let space = ''; 
for(let i = 0; i < up.length; i++){
 space += up.charAt(i).toUpperCase() + " "; 
}
return space;
}
console.log(upperCase(hacker1));

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function reverseString(str){
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString(hacker2));

//3.3 Depending on the lexicographic order of the strings
// array of alphabet
const alphabet = [
'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'
];
    //first character of driver's name
    let hack1 = hacker1.charAt(0);
    
    //first character of navigator's name
    let hack2 = hacker2.charAt(0);
    
//condition for searching characters in array(alphabet)
    for (let i=0;i<alphabet.length;i++){
          let hackAlphabet = alphabet[i];
        //print if driver is before navigator.
        if(hack1===hackAlphabet && hack2>hackAlphabet){
          console.log("The driver's name goes first.")
        } //print if navigator is before driver
        else if(hack2===hackAlphabet && hack1>hackAlphabet){
          console.log("Yo, the navigator goes first definitely.")
        }//print if navigator equals driver 
        else if(hack1===hack2){
          console.log("What?! You both have the same name?")
        }
      }