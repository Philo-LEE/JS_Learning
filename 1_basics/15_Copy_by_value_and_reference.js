/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 primitive 값은 copy by value입니다.
 *   1.1) 오브젝티브를 빼고 생성되는 모든 데이터 타입들은 모두 primitive입니다. function, array도 object이므로 primitive에서 제외됩니다. 
 * 2) 객체는 copy by reference
 */


let original = '안녕하세요';
let clone = original;

console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요


clone += ' 이시현입니다.';

console.log('----------------');
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요 이시현입니다.

//여기까지가 copy by value의 예시입니다.

// 지금부터는 reference 값 전달을 보겠습니다.
// 우선 객체를 하나 생성해보겠습니다.
let originalObj = {
    name : '이시현',
    age : 32,
}

let cloneObj = originalObj;

console.log(cloneObj); // { name: '이시현', age: 32 }
console.log(originalObj); // { name: '이시현', age: 32 }

console.log('----------------');

originalObj['name'] = '이시현이아닙니다.';

console.log(cloneObj); // { name: '이시현이아닙니다.', age: 32 }
console.log(originalObj); // { name: '이시현이아닙니다.', age: 32 }

/**
 * 건드리지도 않은 originalObj가 값이 변경된 것을 확인할 수 있습니다.
 * 일단 이 현상은 copy by reference 입니다. 원리설명은 아래에서 이어집니다.
 */

console.log('-----------');


console.log(original === clone) //false
console.log(cloneObj === originalObj); // true

/**
 * 여기서 보면 original 과 clone 객체가 아닌 것들은 primitive한 value로써 독립된 값을 가지고있습니다.
 * 그러나 객체들(Obj)들은 참조에 의한 값전달로써 하나의 메모리 주소를 두개의 변수가 동시에 바라보고있는 상황이므로 하나의 값을 건들면 나머지 변수를 사용한 
 * 값들 모두 영향을 받게 되는 구조를 가지게 됩니다. 값들이 같기때문에 true가 나오는게 아닙니다.
 * 실제로 cloneObj와 originalObj 모두 내용을 동일한 값으로 property를 재할당 한 후에 비교하면 값이 false가 나오게 됩니다.
 */
originalObj = {
    name : '이시현',
    age : 32,
};

cloneObj = {
    name : '이시현',
    age : 32,
};

console.log(originalObj === cloneObj); // false

/**
 * 정리하자면
 * copy by value는 값을 복사할 메모리 주소를 통해 해당 메모리 값을 읽은 후, 새로운 메모리 주소에 복사한 값을 씀으로써
 * 할당된 변수가 새로운 메모리 주소를 읽으며 primitive하게 할당된 것을 의미합니다.
 * 
 * copy by reference는 값을 복사할 메모리 주소값으로 새로운 변수에 주소값만 넘겨주는걸 의미합니다. 
 * 그러므로 두개의 서로다른 변수가 copy by reference로 다른 한 변수의 값을 넘겨받게 된다면 
 * 주소만 받게되므로 실질적으로 동일한 메모리를 바라보고 있는 것을 의미하게 됩니다.
 * 해당개념은 대부분의 언어에서 비슷하게 작동하고있는 원리입니다. Java에서도 상당히 비슷한 원리로 작동됩니다.
 * 객체가 메모리에 저장되는 방식은 언어마다 조금씩 다릅니다. 심화과정에서 배울 수 있습니다.
 * 
 * 예시를 들자면
 * 1번 메모리칸에 실제 객체의 데이터가 담겨있다고 하면 
 * [original 변수]는 [2번] 메모리칸을 바라보고있습니다. 
 * [2번] 메모리칸 안에는 1번 메모리 칸의 '주소값'이 데이터로 들어가있습니다.
 * 
 * "reference"로 값을 전달받으면 copy by value로써 가져가는건 실제 데이터 value가 아니라 2번 메모리칸 안에 있는 주소value만 가져가는 원리입니다.
 * 
 * 즉 [3번] 메모리칸에 [1번 메모리칸의 주소값]이 들어가게 되고, 3번 메모리칸에 변수가 할당되는 것입니다.
 * 그래서 특수한 목적으로 쓸 때 copy by reference가 아닌 spread Operator 로 value값을 넣어줘야합니다.
 */


/**
 * Spread Operator
 * 중괄호로 새로운 값을 넣는것이고 그 값은 변수의 값을 읽어서 넣는다는 뜻이므로 완전 동일한 값이라도 copy by value가 이루어진다.
 * 즉 yuJun4 === yuJin3 은 false

const yuJin4 = {
    ...yuJin3,
};
*/

/**
 * 그러나 spread Operator는 순서가 중요하다. 
 * 반드시 앞에 써줘야하는데,
 * 뒤에 써줘버리면 앞에 써준 값이 덮어씌워지기 때문이다.
 */

test = {
    a : 1,
    b : 2,
    c : 3.
}

const test2 = {
    ...test,
    a : 3, // 이렇게 해야 a에 3이 재할당된다.
}

// const test2 = {
    //     a : 3, 
    //     ...test, // 이렇게 되면 a에 3이 들어갔지만 test 에있는 a값(1)이 다시덮어쓰기 되기때문에 의미없어짐
// }

console.log('--------------');

//어레이에서도 스프레드 오퍼레이터는 동일하게 사용가능하다.
const testNumbers = [1, 2, 3];

// 스프레드 오퍼레이터 앞에 쓰는 경우[ 10, 1, 2, 3 ]
const testNumbers2 = [
    10,
    ...testNumbers
];

// 스프레드 오퍼레이터 뒤에 쓰는 경우[ 1, 2, 3, 10 ] 
const testNumbers3 = [
    ...testNumbers,
    10,
];

console.log(testNumbers); //[ 1, 2, 3 ]
console.log(testNumbers2); //[ 10, 1, 2, 3 ]
console.log(testNumbers3); //[ 1, 2, 3, 10 ]


