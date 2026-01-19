/**
 * Hoisting
 * ========
 * 자바스크립트에서 선언된 변수나 함수를 코드의 맨 위로 끌어올리는 것을 의미.
 * 이는 변수나 함수가 실제로 선언되기 전에 참조될 수 있도록 합니다.
 */

console.log('Hello');
console.log('World!');


console.log(name); //undefined
var name = '코드팩토리';
console.log(name); //코드팩토리
// 위 예제에서 var 키워드로 선언된 변수 name은 호이스팅되어 코드의 맨 위로 끌어올려집니다.
// 따라서 첫 번째 console.log(name); 문은 에러가 발생하지 않고 undefined를 출력합니다.
// 그러나 변수에 값이 할당되기 전이므로 두 번째 console.log(name); 문은 '코드팩토리'를 출력합니다.
// let과 const 키워드로 선언된 변수는 호이스팅되지만, 초기화되지 않으므로 선언 전에 접근하려고 하면 ReferenceError가 발생합니다.

var name;
console.log(name); //undefined
name = '코드팩토리';
console.log(name); //코드팩토리
/**
 * 이렇게 작동하는 것과 동일한 결과가 나오나 사실 이게 정확한 것은 아님.
 */


/**
 * Hoisting 정리
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기함.
 */


console.log(age); // 호이스팅은 되지만 초기화되지 않아서 ReferenceError 발생(초기화전 접근불가 메세지) 애초에 age가 정의는 되었으나 초기화가 안된 상태임 -> 호이스팅발생임.
let age = 32; //해당 문을 주석처리하고 위의 age가 실행되면 애초에 defined가 뜬다. 즉, 정의자체가 안되어있다. (에러메세지가 다르다는 뜻)
console.log(age);
/**
 * let 과 const 는 호이스팅이 되지만, 초기화되지 않기 때문에 선언 전에 접근하려고 하면 ReferenceError가 발생합니다.
 * 따라서 let 과 const 로 변수를 선언할 때는 반드시 선언문 이후에 변수를 사용해야 합니다.
 */

/** 
 * 최종 저리 var let const 에서 왜 let과 const를 써야하는가?
 * 호이스팅때문에. var는 호이스팅을 완전히 허용해서 의도치않은 버그가 발생할 수 있지만
 * let과 const는 호이스팅이 되더라도 초기화가 안되기 때문에 의도치않은 버그를 어느정도 방지할 수 있다.
 */

