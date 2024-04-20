
//declare array of precoded ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//arrow function that removes first value of the last index in array
//inside code block, I have a method to convert a number to string and back to number
//inside function, I pop the last value then push it back into original array
let remover = () => {
    let lastIndex = ages.pop();
    let convert = lastIndex.toString();
    let converted = convert.replace(convert[0], '');
    ages.push(Number(converted));
    return ages;
};

//pushing a new number to show code is dynamic
ages.push(47);

//getting the average age through a function that adds all of ages values and divides by the number of people in array
let averageAge = (i) => {
    let sum = 0;
    for (i of ages) {
        sum += i;
    }
    sum /= ages.length
    return sum.toFixed();
};

//an array with precoded names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//getting average letters per name in names array
let averageNumberLetters = (i) => {
    let list = []
    for (i of names) {
       list.push(i.length);
    }
    return list;
};

//names concatination arrow function
let namesConcat = (nameList) => {
    let namesCon = '';
    for (nameList of names) {
        namesCon += nameList + ' '
    }
    return namesCon;
}


//how to access last element of array
names.length - 1;

//how to access first element of array
names[0];

//length of names array before adding values
let nameLengths = [];

//adds the values to nameLength array
let nameLengthsArray = (i) => {
    for (i of names) {
       nameLengths.push(i.length);
    }
    return nameLengths;
};

//repeating a word by itself
let wordMultiplier = (word, n) => {
    return word.repeat(n);
}

//concatinating first and last name to full name
let fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName
}

//boolean of entered array
let arrayTest = (a) => {
    let test = 0;
    for (let i of a) {
        test += i;
    }

    if (test > 100) {
        test = true;
    } else {
       test = false;
    }
    return test
}

//sum of all values in array
let sumOfArray = (a) => {
    let arraySum = 0;
    for (let i of a) {
        arraySum += i;
    }
    arraySum /= a.length
    return arraySum
}

//sum of two arrays compared to see if array 1 is greater than array 2
let sumOfTwoArrays = (a, b) => {
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    for (let i of a) {
        sum1 += i;
    }

    for (let i of b) {
        sum2 += i;
    }

    if (sum1 > sum2) {
        sum = true;
    } else {
        sum = false;
    }
    return sum;
}

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    let condition
    if(isHotOutside === true && moneyInPocket > 10.50) {
        condition = true;
    } else {
        condition = false;
    }
    return condition;
}

//arrow function that lets me know im getting better at javascript.
//I made this function just to test out what I know so far!
let amGettingBetter = (a) => {
    let ofCourse
    a = a.toUpperCase();
    if (a === "YES") {
        ofCourse = 'hell yeah!!!';
    } else {
        ofCourse = 'not possible'
    }
    return ofCourse
}

//printing to terminal original array, then moddified array
console.log(`
    ${ages}

    ${remover()}

    ${averageAge()}

    ${averageNumberLetters()}
    
    ${namesConcat()}
    
    ${nameLengthsArray()}
    
    ${wordMultiplier('Hello', 3)}
    
    ${fullName('Han', 'Solo')}
    
    ${arrayTest([1, 2, 3, 4, 5])}
    
    ${sumOfArray([1,2,3,4,5])}
    
    ${sumOfTwoArrays([1,2,3,4,5],[6,7,8,9,10])}
    
    ${willBuyDrink(true,100)}
    
    ${amGettingBetter('YEs')}`)