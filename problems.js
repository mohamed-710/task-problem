//1)  Write a program that allow to user enter number then print it

function printNum() {
    let print =parseInt( document.getElementById('num').value);
    document.getElementById('output1').innerText = `Entered value: ${print}`;
}


//2)Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

function divisable() {
    let numberEnterde = parseInt(document.getElementById('num2').value);
    if (numberEnterde % 3 === 0 && numberEnterde % 4 === 0) {
        document.getElementById('output2').innerText = "yes";
    }
    else {
        document.getElementById('output2').innerText = "No";

    }

}

//3)	Write a program that allows the user to insert 2 integers then print the max

function min_max() {
    let num1 = parseInt(document.getElementById('num3').value);
    let num2 = parseInt(document.getElementById('num4').value);


    let maxNum = (num1 > num2) ? num1 : num2;
    document.getElementById('output3').innerText = `The maximum number is: ${maxNum}`;
}
//4)	Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

function negativity() {
    let num = parseInt(document.getElementById('num5').value);

    if (num > 0) {
        document.getElementById('output4').innerText = 'This number is positive';
    }
    else {
        document.getElementById('output4').innerText = 'This number is negative';

    }
}


//5)Write a program that take 3 integers from user then print the max element and the min element.

function min_max_min() {
    let num1 = parseInt(document.getElementById('num6').value);
    let num2 = parseInt(document.getElementById('num7').value);
    let num3 = parseInt(document.getElementById('num8').value);

    let maxNum = Math.max(num1, num2, num3);

    let minNum = Math.min(num1, num2, num3);

    document.getElementById('output5').innerText = `The maximum number is: ${maxNum}\nThe minimum number is: ${minNum}`;
}

//6)Write a program that allows the user to insert integer number then check If a number is oven or odd


function even_odd() {
    let num = parseInt(document.getElementById('num9').value);
    if (num % 2 === 0) {
        document.getElementById('output6').innerText = 'the numer you entered is even';

    }
    else if (num % 2 !== 0) {
        document.getElementById('output6').innerText = 'the numer you entered is odd';

    }
}

//7)Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant


function vowel_consonant() {
    let enter = document.getElementById('char').value;
    let char = ['a', 'e', 'i', 'o', 'u']
    if (char.includes(enter.toLowerCase())) {
        document.getElementById('output7').innerText = 'the char is vowel';

    }
    else {
        document.getElementById('output7').innerText = 'the char is consonant';
    }
}

//8)Write a program that allows user to insert integer then print all numbers between 1 to that’s number
function printNum() {
    let num = parseFloat(document.getElementById('num10').value);
    let out = ' ';
    for (let i = 0; i <= num; i++) {
        out += ` ${i} `;
    }
    document.getElementById('output8').innerText = out;
}

//9)Write a program that allows user to insert integer then print a multiplication table up to 12.

function print_Multiplication() {
    let num = parseFloat(document.getElementById('num11').value);
    let res = "";
    for (let i = 1; i <= 12; i++) {
        res += `${num}*${i}=${num * i}\n`
    }

    document.getElementById('output9').innerText = res;
}
//Write a program that allows to user to insert number then print all even numbers between 1 to this number


function print_allEven_between() {
    let num = parseFloat(document.getElementById('num12').value);
    let out = ' ';
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            out += ` ${i} `;
        }
    }
    document.getElementById('output10').innerText = out;
}

//11)Write a program that take two integers then print the power

function printPower() {
    let Base = parseFloat(document.getElementById('base').value);
    let Exponent = parseFloat(document.getElementById('Expo').value);
    let res = Math.pow(Base, Exponent);

    document.getElementById('output11').innerText = ` the power of number  : ${res}`
}
//12)Write a program to enter marks of five subjects and calculate total, average and percentage

function avg_subjects() {
    let marks = [];
    for (let i = 0; i < 5; i++) {
        marks.push(parseFloat(document.getElementById(`marks${i + 1}`).value));
    }
    let total = marks.reduce((num, current) => num + current, 0);
    let avg = total / 5;
    let percentage = avg;
    document.getElementById('output12').innerText = `Total:${total}\nAverage:${avg}\npercentage:${percentage}%`;
}

//13)Write a program to input month number and print number of days in that month.

function getDaysInMonth() {
    const month = parseInt(document.getElementById('monthInput').value);
    let days;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            const year = new Date().getFullYear();
            days = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
            break;
        default:
            days = 'Invalid month number';
    }

    document.getElementById('output13').innerText = `Number of days: ${days}`;
}

//14)Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

function calculateResults() {
    let subjects = ["physics", "chemistry", "biology", "mathematics", "computer"];
    let totalMarks = 0;
    subjects.forEach(id => {
        let mark = parseFloat(document.getElementById(`${id}`).value);
        totalMarks += mark;
    });
    let percentage = (totalMarks * 100) / 500;

    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `Total Marks: ${totalMarks}\nPercentage: ${percentage}%\nGrade: ${grade}`;
}


function print_all_rang() {
    let output = document.getElementById('output');
    output.innerHTML = ' ';
    for (let i = 1; i <= 10; i++) {
        let out = document.createElement('span');
        out.textContent = i + ' ';
        output.appendChild(out);
    }
}

function sum_first10(n) {
    let res = n * (n + 1) / 2;
    console.log(res);
}
sum_first10(10)

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
    
}
console.log(factorial(5));

//20)Reverse a String: Reverse a given string using a loop

function reverseString() {
    let str = document.getElementById('inputString').value;
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    document.getElementById('result').innerText = reversedStr;
}