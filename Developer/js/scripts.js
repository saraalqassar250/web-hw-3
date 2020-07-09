const language=['html','css','java','javascript','wordpress'];
const needed_language=3;

let name=prompt('enter your name');
let age=parseInt(prompt('enetr your age'));
let exprience=parseInt(prompt('enter your expreience years'));
console.log('code languages');

for (let i=1; i <= languages.lenght; i++ ){
console.log(i+"."+languages[i-1]);
}

let skill1= prompt("اختر اللغة");
let skill2= prompt(" اختر اللغةاخرى");
 

if (
    age > 25 &&
    age < 40 &&
    exprience >3 &&
    (skill1 == needed_language || skill2== needed_language)
){
console.log("مقبول");
}else{
console.log("غير مقبول");
}


function logger(temperature){
for (let i =0; i< temperature.lenght;i++){
    console.log(temperature[i]);
}

function toCel(temperature){
    for (let i =0; i< temperature.lenght;i++){
result_array.push(parseInt((temperature[i]-32)*(5/9)));
}
return result_array;
}


function hottestdays(temperature){
    for (let i =0; i< temperature.lenght;i++){
if (temperature[i]>min_value){
    hot.push(temperature[i]);
}
}
return hot;
}

let feh_temp_array=[32,70,90,106];
let threshold = 70;
let hot=[];
let result_array=[];

function loghottestdays(input_array, min_value){
    logger(toCel(hottestdays(input_array, min_value)));
}


loghottestdays(feh_temp_array, threshold);
