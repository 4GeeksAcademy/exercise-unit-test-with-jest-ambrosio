const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * (0.87/156.5)
    return valueInPound;
}
console.log(fromYenToPound(1))

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * (156.5/1.07);
    return valueInYen;
}



// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
