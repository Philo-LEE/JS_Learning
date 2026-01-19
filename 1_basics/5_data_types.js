/**
 * Data Types
 * 여섯개의 Primitive Data Types 가장 작은 단위의 데이터형
 * 1. Number (숫자)
 * 2. String (문자열)
 * 3. Boolean (논리값)
 * 4. Null (값이 없음)
 * 5. Undefined (값이 할당되지 않음)
 * 6. Symbol (ES6) 얘는 좀 최근에 생김 신입임 (대단히 많이는 안쓰임) 유일무이한 식별자가 필요할 때 사용(오브젝트에서 좀 사용됨)
 * 그리고 Object
 * 7. Object (객체) 
 *  - Function (함수도 객체의 한 종류임)
 *  - Array (배열도 객체의 한 종류임)
 *  - Date (날짜도 객체의 한 종류임)
 *  - etc...
 */


const age = 32;
const tempature = 36.5;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);


/**
 * String
 */

const codeFactory = "코드팩토리";
console.log(typeof codeFactory);

const ive = "'아이브'";

console.log(ive);

/**
 * Template Literals (템플릿 리터럴)
 * 백틱(`) 으로 감싸서 사용
 * 여러줄 문자열, 표현식
 * ${} 표현식 삽입
 * 장점: 가독성 향상, 편리한 문자열 조작
 * Escaping Characters (이스케이핑 문자)
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) backslash -> \\
 * 
 */

const iveYuJin = '아이브 \n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브 \t원영';
console.log(iveWonYoung);
const backslash = '아이브 \\ 안유진';
console.log(backslash);
const smallQuote = "아이브 '안유진'";
console.log(smallQuote);

const iveWonYoung2 = `아이브
원영`;//백틱 사용 이스케이핑 문자 필요없음 \n \t \\ 이딴거들 등등 변수타입은 String 으로 된다.
console.log(iveWonYoung2);

const groupName = '아이브';

console.log(groupName + ' 안유진' );


console.log(`${groupName} 안유진`); //이게 훨씬 편함ㅋㅋ 좋다
console.log("----------------");

/**
 * Boolean
 */

const isTrue = true;
const isFalse = false;


console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("----------------");

/**
 * Undefined
 * 선언만 하고 값을 초기화하지 않은 상태
*/

let noInit;
console.log(noInit);
console.log(typeof noInit); //undefined
console.log("----------------");
// 값과 타입 모두 undefined 가 나온다.


/**
 * Null
 * 값이 없음을 명시적으로 나타내는 값
 * 그러니까 undefinded 는 실수로 값을 안넣은건데 의도한건 null 이라는 뜻임
*/

let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue); //object 라고 나옴 ㅋㅋ 자바스크립트 역사적인 버그
/** 
 * 자바스크립트의 역사적인 이유로 typeof null 이라는 표현식이 'object' 를 반환하는 **버그**가 있음
 * 그래서 null 인지 확인할때는 typeof 보다는 그냥 값 자체를 비교하는게 좋음
 * 정확하게 설명하자면 원래는 null은 타입이어야하는데 현재 object로 나오는 버그가 있고 고치지 않는 이유는 하위호환성 때문임
 * 즉, 기존에 null 타입이 object로 나오는걸 이용하는 코드들이 많아서 고치면 그 코드들이 다 깨지기 때문임
 */
console.log(emptyValue === null); //이게 더 정확한 방법임
console.log("----------------");

/**
 * Symbol (ES6)
 * 유일무이한 식별자를 만들 때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용함.
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2); //test2 도 똑같은 '1' 이라서 true 가 나옴

const symbol1 = Symbol('id'); //'id' 라는 설명자를 가진 심볼 생성
const symbol2 = Symbol('id'); //'id' 라는 설명자를 가진 또다른 심볼 생성

console.log(symbol1 === symbol2); //Symbol 함수로 생성된 심볼은 유일무이해서 false 가 나옴

console.log("----------------");
/**
 * Object
 * 키-값 쌍의 집합
 * 복잡한 데이터 구조를 표현할 때 사용
 * 키는 문자열 또는 심볼이어야 하며, 값은 모든 데이터 타입이 될 수 있다.
 * 객체는 중괄호 {} 로 감싸서 생성한다.
 * Json 과 비슷하게 생겼지만 엄연히 다름
 * Json : 데이터 교환 포맷
 * Object : 자바스크립트의 데이터 타입
 * 호환가능성 : 자바스크립트 객체는 JSON으로 쉽게 변환할 수 있다.
 * 예시:
 * const obj = { name: "Philo", age: 32 };
 * const jsonString = JSON.stringify(obj); // 객체를 JSON 문자열로 변환
 * const parsedObj = JSON.parse(jsonString); // JSON 문자열을 객체로 변환
 */

const dictionary = {
    apple: '사과',
    banana: '바나나',
    grape: '포도'
};

console.log(dictionary)
console.log(dictionary.apple);
console.log(dictionary['banana']);

console.log(typeof dictionary);

console.log("----------------");

/** 
 * array type
 * 값을 리스트로 나열 할 수 있는 타입이다.
 * 선언법은 대괄호로 [] 값을 안에 넣어주고 컴마, 로 구분한다.
 */


const iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log(iveMembers);
console.log(iveMembers[0]); //안유진
console.log(iveMembers[3]); //장원영
console.log(typeof iveMembers); //object 라고 나옴 배열도 객체의 한 종류임

iveMembers[0] = '안유진 💜'; //const로 했는데 변경이 된다.
console.log(iveMembers[0]); //안유진 💜 


/**
 * 다이나믹 타이핑
 * 자바스크립트는 동적 타이핑 언어이다.
 * 변수는 특정 타입에 고정되지 않고, 실행 중에 다른 타입의 값으로 변경될 수 있다.
 * 예시:
 * let variable = 42; // 변수는 숫자 타입
 * variable = "Hello"; // 이제 변수는 문자열 타입
 * variable = true; // 이제 변수는 불리언 타입
 * 스태틱 타이핑 = 정적 타이핑
 * 자바, C# 같은 언어들은 정적 타이핑 언어이다.
 * 변수는 선언 시에 특정 타입으로 고정되며, 다른 타입의 값으로 변경할 수 없다.
 * 예시:
 * int number = 42; // 변수는 숫자 타입
 * number = "Hello"; // 오류 발생: 문자열을 숫자에 할당할 수 없음
 * 
 * 
 * 즉 이걸 좀 더 정리하자면
 * static typing 은 변수를 선언할 때 어떤 타입의 변수를 선언할지 미리 정하는거고(C#, Java 등)
 * dynamic typing 은 변수를 선언할 때 타입을 미리 정하지 않고 나중에 할당되는 값에 따라 타입을 '추론'하는거임 (JavaScript, Python 등)
 */