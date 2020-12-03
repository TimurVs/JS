
//*************Lesson 3*************//

//Task 1


function checkPrime(n) {
    var i = 2;

    while (i < n) {
        if (n % i == 0) {
            return false;
        }
        i++;
    }

    return true;
}

var x = 2;

while (x <= 100) {
    if (checkPrime(x)) {
        document.write(x + ", ");
    }
    x++;
}



//Task 2 + 3

var cart = [

    {
        title: "PS1",
        price: 100,
        count: 2,


    },

    {
        title: "PS2",
        price: 200,
        count: 1,

    },

    {
        title: "PS3",
        price: 300,
        count: 5,

    },

    {
        title: "PS4",
        price: 600,
        count: 1,

    }


]



for (var item of cart) {
    document.write("<p>" + "Товар " + item.title + "</p >" + "<p>" + " Стоимость " + "</p>" + item.price + "<p>" + " Количество " + item.count + "</p>");
    document.write("<p>" + "Общая стоимость наименований: " + item.price * item.count + "</p>");

}

function totalCart(cart) {

    var totalCart = 0;
    for (var item of cart) {
        totalCart += (item.price * item.count);


    }
    return totalCart;

}

document.write("ИТОГО: " + totalCart(cart));


//Task 4 









//*************Lesson 2*************//

//Task 1
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - потому что мы повышаем а на 1 класс, на единицу.
d = b++; alert(d);           // 1  - потому что мы сначала выводим b, а уже потом добавляем ему единицу.
c = (2 + ++a); alert(c);      // 5 - тут мы сначала вывели двойку, затем будем прибавлять а, который мы до этого повысили на 1 и теперь еще на 1.
d = (2 + b++); alert(d);      // 4 - тут мы ранее добавили к b единицу. поэтому теперь b у нас 2. 2+2 = 4.
alert(a);                    // 3 - к a мы прибавили два плюса в последнем выражении, где оно присутствовало. c = (2 + ++a); alert(c). код выполняется сверху вниз, соответственно а запомнило последнее знаечение.
alert(b);                    // 3 - исходя из последней строки 2 + b - выводится три. При этом к b прибавляется 1, но нигде пока что не выводится.


//Task 2

var a = 2;
var x = 1 + (a *= 2);
alert(x);

//x будет равен 5


//Task 3

var a = 5;
var b = -10;

if (a > 0 && b > 0) {
    alert(a - b);
}

else if (a < 0 && b < 0) {
    alert(a * b);
}

else {
    alert(a + b);
}

//Task 4

var a = parseInt(prompt("Введите чило от 0 до 15"));

switch (a) {
    case 0:
        document.write("0 ");

    case 1:
        document.write("1 ");

    case 2:
        document.write("2 ");

    case 3:
        document.write("3 ");

    case 4:
        document.write("4 ");

    case 5:
        document.write("5 ");

    case 6:
        document.write("6 ");

    case 7:
        document.write("7 ");

    case 8:
        document.write("8 ");

    case 9:
        document.write("9 ");

    case 10:
        document.write("10 ");

    case 11:
        document.write("11 ");

    case 12:
        document.write("12 ");

    case 13:
        document.write("13 ");

    case 14:
        document.write("14 ");

    case 15:
        document.write("15 ");
        break;

    default:
        document.write("Введено неверное число.");
        break;


}

function randomNumber(x) {
    document.write(x);
    if (x == 15) {
        return;
    }
    randomNumber(++x)
}

randomNumber(parseInt(Math.random() * 15));


//Task 5+6


function summ(x, y) {
    return x + y;
}

function diff(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    if (y != 0)
        return x / y;
    else
        alert("Нельзя делить на ноль.")
}



var a = parseFloat(prompt("Введите число а"));
var b = parseFloat(prompt("Введите число b"));
var operation = prompt("Введите операцию summ, diff, mult или div");

alert("Результат: " + mathOperation(a, b, operation));

function mathOperation(x, y, operation) {
    switch (operation) {
        case "summ":
            return summ(x, y);
        case "diff":
            return diff(x, y);
        case "mult":
            return mult(x, y);
        case "div":
            return div(x, y);
        default:
            return NaN;

    }
}


//Сравнить null и 0. Объяснить результат.
//null это ничто, а ноль - это значение. сравнение некорректно.

//С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.



function mathPow(x, y) {

    if (y != 1) {
        return Math.pow(x, y);
    }

    else {
        return (1);
    }

}

var base = parseFloat(prompt("Введите число, которое возвести в степень"));
var exponent = parseFloat(prompt("Введите степень, в которую возмводим"));

alert("Результат возведения в степень: " + mathPow(base, exponent));

*/

