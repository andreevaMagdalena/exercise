

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
        if(digit === lastNum){
            isEquel = true;
        }
        lastNum = digit;
        number /= 10;
    }
    console.log(isEquel)
    console.log(sum)
}
solve(222)