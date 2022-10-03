// 5.3.1
let number = prompt('Введите число ниже >>');
console.log(typeof number);
number = Number(inputed_number);
if (typeof number === 'number' && !(typeof number === 'NaN')){
    let odd_even = number%2;
 if( odd_even === 0){
     console.log("Число чётное.");
 }   else  {
     console.log("Число нечётное.");
 }
} else {
    console.log("У-упс... Кажется, вы ошиблись!");
}
// 5.3.2
    let a = 31;
    function whichtype() {
        let type_of_a = typeof a;
        switch(type_of_a){
            case 'number' :
                type_of_a= 'число';
                break;
            case 'BigInt' :
                type_of_a= 'число, большее, чем (2^53-1)';
                break;
            case 'string' :
                type_of_a= 'строка';
                break;
            case 'boolean' :
                type_of_a= 'логический тип';
                break;
            case 'null' :
                type_of_a= 'неизвестное значение';
                break;
            case 'undefined' :
                type_of_a= 'значение не было присвоено';
                break;
        };
        console.log(`${a} - ${type_of_a}`);
    }
    whichtype();
    a = true;
    whichtype();
    a = 'Привет';
    whichtype();

// 5.4.3
let str = 'Hello world';
            let str_array = str.split("");
            let str_arrayReversed = str_array.reverse();
            str = str_arrayReversed.join("");
            console.log(str);

// 5.4.4
let N = Math.floor(Math.random() * 101);
 console.log(N);


 // 5.5.5
    let m = [1, 4, 7, 21, 14, 43];
    console.log(m.length);
    for (let i = 0; i < m.length; i++){
        console.log(m[i]);
    }

// 5.6.6 
    let y = [1, 3, 41, 44, 8, 51, 6];
    let firstNum = y[1];
    let counter = 0;
    for (let i = 0; i < y.length; i++){
        if(y[1]===y[i]){
            counter++;
        };
    };
    if(counter===y.length){
        console.log(true);
    } else {
        console.log(false);
    };    

// 5.6.7
    let x = [1, 3, 41, 44, 8, 51, 6];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < x.length; i++){
        if(typeof x[i] === 'number'){
            if(x[i]%2===0){
                even++;
            } else {
                odd++;
            }
        };
    };
    console.log(even, odd);

// 5.7.8
let map = new Map([
    [1, "top"],  
    [2, "right"],
    [3, "bottom"],
    [4, "left"]
]);
// for (let numb of map.keys()){
//     console.log(numb);
// };
// for (let side of map.values()){
//     console.log(side);
// };
for (let elem of map){
    console.log(elem);
};

