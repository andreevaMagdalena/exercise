
/*
//1
function st(fruit, kg, money){
    let k = kg /1000;
    let neadedMoney = k * money;


 console.log(''.concat('I need $', neadedMoney.toFixed(2),' to buy ', k.toFixed(2),' kilograms ',fruit,'.'));
}
console.log(st('apple', 1563, 2.35));
//2
function two(one, two){
    let low = Math.min(one,two);
    let big = Math.max(one,two);
    result = 0;
    for(let i = low; i > 0; i--){
        if(big % i === 0 && low % i === 0){
            result = i;
            break;
        }
    }
    console.log(result);
}
console.log(two(15,5))

//3
function solve(number){
    let sum = 0;
    let lastNum = number % 10;
    let isEquel = false;
    while(number / 10 > 0){
        let digit = number % 10;
        sum += digit;
        if(digit === lastNum || number === 0){
            isEquel = true;
        }else{
            isEquel = false;
        }
        lastNum = digit;
        number = Math.floor(number / 10);
    }
    console.log(isEquel)
    console.log(sum)
}
solve(22222)
//5
function solve(arr){
    let speed = arr[0];
    let name = arr[1];

    if(name === 'city' && speed > 50 ||
    name === 'residential' && speed > 20 ||
    name === 'interstate' && speed > 90 ||
    name === 'motorway' && speed > 130){
        if(speed > 20 && speed <= 40){
            console.log('speeding')
        }else if(speed > 40 && speed <= 130){
            console.log('excessive speeding')
        }else if(speed > 130){
            console.log('reckless driving')
        }
    }
    
}

solve([200, 'motorway'])
//6

function solve(arr){
let number = Number(arr[0]);
for (let index = 1; index <= arr.length-1; index++) {
    let element = arr[index];
    switch(element){
        case 'chop': number /= 2;
            break;
        case 'dice': number = Math.sqrt(number);
            break;
        case 'spice': number += 1;
            break;
        case 'bake': number *= 3;
            break;
        case 'fillet': number = (number * 0.8).toFixed(1);
            break;        
    }
    console.log(number)
    
}
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
//Array lab 7
function solve(arr){
    let number = 0;
    for (const row of arr) {
        for (const el of row) {
            if(number < el){
                number = el;
            }
        }
    }
    console.log(number)
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )

   // 8
   function solve(arr){
       let one = 0;
       let two = 0;
    let index = 0;
    let index2 = arr[0].length - 1;
   arr.forEach(element => {
       one += element[index++];
       two += element[index2--];
   });
    console.log(one, two)
}
solve([[20, 40],
    [10, 60]]
   )*/
   