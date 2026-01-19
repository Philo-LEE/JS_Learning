// Loops

// for loop
for (let i = 0; i < 5; i++) { //여기서 let을 선언하는 이유는 i가 for문 안에서만 유효하기 때문
    console.log(i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


//let의 유래
// let은 block-scoped 변수 선언 키워드로, 이전에는 var만 있었기 때문에 let이 도입되었습니다.
// var는 function-scoped이기 때문에 예상치 못한 결과를 초래할 수 있습니다.
// let은 block-scoped이므로, for문 내부에서 선언된 변수는 for문 외부에서는 접근할 수 없습니다.
// 이는 코드의 가독성과 유지보수성을 향상시키는 데 도움이 됩니다.
// 예를 들어, for문에서 let을 사용하면 다음과 같습니다.
for (let m = 0; m < 3; m++) {
    console.log(m); // 0, 1, 2 출력
}
// console.log(m); // ReferenceError: m is not defined
// 위 예제에서 m은 for문 블록 내에서만 유효하며, 외부에서는 접근할 수 없습니다.
// 이는 변수 충돌을 방지하고 코드의 의도를 명확히 하는 데 도움이 됩니다.
// let의 이름이 왜 let이냐면 "let it be"에서 유래되었습니다.




let stars = '';

for (let i = 0 ; i < 6 ; i++) {
    for (let ii = 0; ii< 6 ; ii++) {
        stars += '*';
    }
    stars += '\n';
}

console.log(stars);


console.log('-------------------');


/**
 * for ... in
 * 객체의 모든 열거 가능한 속성에 대해 반복합니다.
 */


const yuJin = {
    name: '안유진',
    age: 20,
    year : '2003',
    group: 'IVE'
}

for (let key in yuJin) {
    console.log(key); // 속성 이름 출력
    console.log(typeof key); // string 출력
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for(let index in iveMembersArray) {
    console.log(index); // 배열의 인덱스 출력
    console.log(`아이브의 ${index}번째 멤버는 ${iveMembersArray[index]} 입니다.`); // string 출력
}


// for ... of
// 반복 가능한 객체(iterable objects)의 각 요소에 대해 반복합니다.
// 즉 배열, 문자열, Map, Set 등에서 사용됩니다.
for (let member of iveMembersArray) {
    console.log(member); // 배열의 각 요소 출력
}

//차이점은 배열에서는 인덱스가 반환되고 of에서는 값이 반환됩니다 단, iterable한 객체에서만.


/**
 * while ...  continue and break
 */

console.log('-------------------');

let number = 0;

while(number < 10) {
    number++;
    console.log(`현재 숫자는 ${number}입니다.`);
}

/**
 * 
 * do...while(비추)
 */


let count = 0;

do {
    count++;
    console.log(`현재 카운트는 ${count}입니다.`);
} while(count < 5);

// do...while문은 최소 한 번은 실행된다는 보장이 필요할 때 사용함.
// But! 가독성이 떨어지고, 실수로 무한 루프에 빠질 위험이 있으므로 일반적으로 while문을 사용하는 것이 좋음.


/**
 * Break and Continue
 * break는 반복문을 종료하고, continue는 현재 반복을 건너뛰고 다음 반복으로 이동합니다.
 */

for(let i = 1; i <= 10; i++) {
    if(i === 6) {
        console.log('6을 만나서 반복문을 종료합니다.');
        break; // i가 6일 때 반복문 종료
    }
    console.log(i);
}

console.log('-------------------');

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(`${i}는 짝수이므로 건너뜁니다.`);
        continue; // 짝수일 때 현재 반복 건너뛰기
    }
    console.log(i); // 홀수만 출력
}

number = 0;

while(number < 10) {
    number++;
    if(number === 5) {
        continue;
    }
    console.log(`현재 숫자는 ${number}입니다.`);
}