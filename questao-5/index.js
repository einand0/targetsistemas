function invertString(string) {

    var newString = "";
    
    for (var i = string.length - 1; i >= 0; i--) { 
        newString += string[i];
    }
    
    return newString;
}
 
console.log(invertString('fernando'));