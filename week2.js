//**********Testing all functions**********************

let value = 2;
lastFunction(value);

//function to square anumber......

function squareNumber(num) {
    return num * num; //console.log(`The result of squaring the number ${num} is : ${num * num}`);
}

// function for Half a Number

function halfNumber(num) {
    return num / 2; //console.log(`Half of ${num} is  : ${num/2}`);

}

//function for telling % of within two numbers

function percentOf(num1, num2) {

    let cal = (num1 / num2) * (100 / 1);
    return cal; //console.log(`${num1} is  ${cal}% of  ${num2}`);
}
// function to calculate Area of a circle
function areaOfCircle(rad) {
    let cal = Math.PI * Math.pow(rad, 2);
    return cal.toFixed(2); //console.log(`The Area ofa circle with radius ${rad} is ${+cal.toFixed(2)}`);
}

function lastFunction(num) {

    if (num && num > 0) { // validates num value
        // return half of number (1)
        console.log(`Half of ${num} is  : ${halfNumber(num)}`);
        //return Square of half of number(2)
        console.log(`The result of squaring the number ${halfNumber(num)} is : ${squareNumber(halfNumber(num))}`);
        //use the square number as radius to calculate area of a circle (3)
        console.log(`The Area of a circle with radius ${squareNumber(halfNumber(num))} is ${areaOfCircle(squareNumber(halfNumber(num)))}`);
        // calculate % of (2) in (3)
        console.log(`${areaOfCircle(squareNumber(halfNumber(num)))} is  ${percentOf(areaOfCircle(squareNumber(halfNumber(num))),squareNumber(halfNumber(num)))}% of  ${squareNumber(halfNumber(num))}`);
    } else {
        console.log(`Invalid entry ${num}`);
    }


}