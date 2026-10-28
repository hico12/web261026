// document.write("외부 스크립트 방법");

console.log("콘솔창에 나와야하는 내용");

var num = 10+20;

console.log(num);

let sum=80+1234;

console.log(sum);

let string1="hello, world";
let string2 ="시네마 웹사이트 \ '시네마 웹 사이트 ' 에 오신것을 환영합니다"
console.log(string1,string2);

let dan = 3;
let gugu = 8;
let string="${dan}곱하기 ${gugu} 는 ${dan*gugu} 입니다";
console.log(string);


let studentsocre = [90, 70, 80, 60];

console.log(studentsocre);
console.log(studentsocre[2]);

let sdtscore = {
    koreascore: 80,
    engscore: 70,
    mathscore: 90,
    sciencecore: 60
};

console.log(sdtscore);
console.log(sdtscore.koreascore);


for (let dan = 2; dan < 10; dan++) {
    for (let i = 1; i < 10; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
    console.log(" ");
}

