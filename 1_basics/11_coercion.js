// Coercion
// JavaScript는 동적 타입 언어이기 때문에, 변수의 타입이 상황에 따라 자동으로 변환되는 '형 변환(coercion)'이 자주 발생합니다.
// 이러한 형 변환은 개발자가 의도하지 않은 결과를 초래할 수 있으므로, 형 변환이 어떻게 작동하는지 이해하는 것이 중요합니다.

//명시적 형 변환
let age = 32;
let stringAge = age.toString();
//혹은 let stringAge = String(age);
//여러 가지 방법으로 명시적 형 변환이 가능합니다.

console.log(`변환된 값은 ${stringAge} 이며, 타입은 ${typeof stringAge}`); // 출력: 123, 타입은 string
// 숫자 123이 문자열 '123'으로 명시적으로 변환되었습니다.

// 암묵적 형 변환
let result1 = '5' + 10; // 문자열과 숫자의 덧셈
console.log(`연산의 결과는 ${result1} 이며, 타입은 ${typeof result1}`); // 출력: 510, 타입은 string
// 문자열과 숫자가 더해질 때, 숫자가 문자열로 묵시적 형 변환됩니다.


let test = age + ''; // 숫자와 빈 문자열의 덧셈
console.log(`연산의 결과는 ${test} 이며, 타입은 ${typeof test}`); // 출력: 32, 타입은 string
// 숫자가 빈 문자열과 더해질 때, 숫자가 문자열로 묵시적 형 변환됩니다.

console.log('98' + 2) // 출력: '982', 숫자 2가 문자열 '2'로 변환되어 연결됩니다.
console.log('98' - 2) // 출력: 96, 문자열 '98'이 숫자 98로 변환되어 뺄셈이 수행됩니다.
console.log('5' * '4') // 출력: 20, 두 문자열이 숫자로 변환되어 곱셈이 수행됩니다.
console.log('20' / '5') // 출력: 4, 두 문자열이 숫자로 변환되어 나눗셈이 수행됩니다.

// 왜?
// + 연산자는 문자열(String) 연결에 사용되기 때문에, 피연산자 중 하나가 문자열이면 다른 피연산자도 문자열로 변환됩니다.
// 반면에 -, *, / 연산자는 산술 연산에 사용되므로, 피연산자들이 숫자로 변환됩니다.

// 주의사항
// 암묵적 형 변환은 때때로 예기치 않은 결과를 초래할 수 있습니다. 예를 들어:
console.log('5' + 3); // 출력: '53' (문자열 연결)
console.log('5' - 3); // 출력: 2 (숫자 뺄셈)

// 따라서, 형 변환이 필요한 경우에는 명시적 형 변환을 사용하는 것이 좋습니다.
// 이걸 아는 이유는 쓰라고 하는게 아니라, 자바스크립트의 특성을 이해하고 예기치 않은 버그를 예방하기 위해서입니다.
// 기능적으로 가능하다는거지 그렇게 헷갈리게 쓰라는 뜻은 아님. 자바스크립트는 그냥 이런 기괴한 현상들이 많으니까 조심하라는 뜻.

/**
 * 명시적 변환 심화
 */

// 문자열변환
console.log(typeof (99).toString()); // 'string'
console.log(typeof String(99)); // 'string'

// 숫자변환
console.log(typeof Number('123')); // 'number'
console.log(typeof parseInt('123px')); // 'number'
console.log(typeof parseFloat('12.34em')); // 'number'
console.log(typeof +'456', +'456'); // 'number'

// 불리언변환
console.log(typeof Boolean(1)); // 'boolean'
console.log(typeof Boolean(0)); // 'boolean'
console.log(typeof !!'non-empty string', !!'non-empty string'); // 'boolean' true 왜? 값이 있단건 truthy하단 뜻이니깐.
console.log(typeof !!'', !!''); // 'boolean' false
console.log(typeof !!0, !!0); // 'boolean' false
console.log(typeof !!'0', !!'0'); // 'boolean' true  문자열 '0'은 빈 문자열이 아니므로 truthy함.
console.log(typeof !!'false', !!'false'); // 'boolean' true  문자열 'false'은 빈 문자열이 아니므로 truthy함.
console.log(typeof !!false, !!false); // 'boolean' false 이건 불리언 false이므로 false 자체임.
console.log(typeof !!null, !!null); // 'boolean' false null은 falsy함.
console.log(typeof !!undefined, !!undefined); // 'boolean' false undefined는 falsy함.
console.log(typeof !!NaN, !!NaN); // 'boolean' false NaN은 falsy함.


// 오브젝트 객체는 항상 truthy함.(비어있더라도)
console.log(typeof !![], !![]); // 'boolean' true 빈 배열은 truthy함.
console.log(typeof !!{}, !!{}); // 'boolean' true 빈 객체는 truthy함.

// 왜 !! 인가?
// ! 연산자는 피연산자를 불리언으로 변환한 후 그 값을 반전시킵니다. 따라서 !! 연산자는 두 번 반전시켜 원래의 불리언 값을 얻음.
// 문자열이 truthy 한지 falsy 한지 명시적으로 확인할 때 유용함.

// 요약
// - 명시적 형 변환은 개발자가 직접 타입을 변환하는 방법입니다.
// - 암묵적 형 변환은 자바스크립트 엔진이 상황에 따라 자동으로 타입을 변환하는 방법입니다.
// - 형 변환이 필요한 경우에는 명시적 형 변환을 사용하는 것이 더 안전합니다.

console.log('-------------------');
