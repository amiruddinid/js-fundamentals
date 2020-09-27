const message = 'Hello'; //assign
// var message2 = "World"; //assign
// const user = 'user2456@gmail.com'
// // alert(message); 
// // alert('World');
// //huruf, nomor, $, _
// //Case-Sensitive 
// //Huruf pertama tidak boleh nomor

// let a = 'apple';
// let b = a + ' enak';
// let $;
// let _;
// let A = 'pineapple';
// // let 1; //invalid | tidak bisa langsung angka
// // let &; //invalid | tidak bisa simbol kecuali $ dan _
// // let null; //invalid | tidak bisa pakai keyword bawaan JavaScript
// let $1;
// let _2;
// let a1;
// let my_name;  

// let x = 1;
// let y = 2;
// let z = "2";
// let hasil = x + y; // penambahan
// let hasil2 = x + z; // concat / pengabungan
// // let dan const tidak bisa di deklarasi ulang
// // var bisa di deklarasi ulang

// let users = [];
// let isLogin = true; //false | boolean
// let kosong = null;
// let tidakdidefinisikan;

// // console.log(user);

// let j = 15; console.log(j, typeof j);
// let k = String(j); console.log(k, typeof k);
// let l = Number(k); console.log(l, typeof l);
let carTypes = ['sedan','bus','wagon','minibus']
let i = 0;
while (i < 5){
    console.log(i);
    i++;
}

let j = 0;
while (j < carTypes.length){
    console.log(carTypes[j]);
    j++;
}

let a = 0;
do{
    console.log(a);
    a++;
} while(a < 10);

for(let b = 0; b < 3; b++){
    console.log(b);
}

for(let c = 0; c < carTypes.length; c++){
    console.log(carTypes[c])
}

let hungry = prompt('are you hungry ?', '');

if(hungry == 'yes'){ //if condition 1
    alert('Huhuhu order grab food pls');
}else if(hungry == 'no'){ //else if condition 2
    alert('Hmm ya sudah');
}else if(hungry == 'nope'){ //else if condition 3
    alert('terus ?');
}else if(hungry == '0'){ //else if condition 4
    alert('haha');
}else{ // all condition not met
    alert("Makan odading");
}

let year = prompt('Which year is today', '');
resultYear = year == 2020 ? alert("That's Correct") : alert("are you sleepy"); //ternary

let result = prompt('2 + 2 =', '');

switch(result){ //switch case
    case '3':
        alert('Too small');
        break;
    case '4':
        alert('Exactly');
        break;
    case '5':
        alert('Too large');
        break;
    default:
        alert("I dont know such value");
}