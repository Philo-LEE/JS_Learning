/**
 * 연산자 (Operators)
 *
 * 자바스크립트에는 다양한 연산자가 있음
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10+10);
console.log(20-10);
console.log(10*2);
console.log(20/2);
console.log(10%3); //나머지 연산자

console.log("----------------");

console.log(10 * (10 + 10)); //괄호 우선순위


/**
 * 증감
 */

let number = 10;

number = number + 1; //11
console.log(number);

number ++; //12

let result = number;

console.log(result); //12

result = number++;

console.log(result, number);

//result = 12 , number = 13
//후위 연산자 : 현재 값을 먼저 result에 할당하고, 그 다음에 number 값을 1 증가시킨다.그러니까 result는 12가 되고 number는 13이 된다.
// 후위연산자는 해당 코드를 실행한 후에 ++나 --가 적용된다.

result = ++number;

console.log(result, number);
//result = 14 , number = 14
//전위 연산자 : 먼저 number 값을 1 증가시키고, 그 다음에 그 값을 result에 할당한다. 그래서 result와 number 모두 14가 된다.
//전위연산자는 해당 코드를 실행하기 전에 ++나 --가 적용된다.

result = --number;

console.log(result, number);
//result = 13 , number = 13
//전위 연산자 : 먼저 number 값을 1 감소시키고, 그 다음에 그 값을 result에 할당한다. 그래서 result와 number 모두 13이 된다.

//근데 이거 잘 안씀 ㅋㅋㅋ 가독성 떨어지고 헷갈리고 선임한테 뒷통수맞을수도

// 숫자타입이 아닌 경우에는 어떻게 될까?

let text = '99';

console.log(+text)
console.log(typeof +text); //number 타입으로 변환됨

sample = true;
console.log(+sample); //1
console.log(typeof +sample); //number 타입으로 변환됨

// +를 붙이면 숫자타입으로 변환이 된다.

sample = false;
console.log(+sample); //0
console.log(typeof +sample); //number 타입으로 변환됨

//주의할점 : null 과 undefined 는?

sample = null;
console.log(+sample);
console.log(typeof +sample); //number 타입으로 변환됨
//null 은 0으로 변환됨

sample = undefined;
console.log(+sample);
console.log(typeof +sample); //undefined 는 NaN으로 변환됨
//undefined 는 NaN으로 변환됨
//에러가나지는 않음.

sample = '-99';

let res = +sample + 1; //-98

if( typeof +res !== 'number'){
    console.log('숫자타입이 아닙니다.'); //이 조건문은 절대 실행 안됨
}else{
    console.log(`${sample}의 연산 결과값은 ${res} 입니다.`); //-99의 연산 결과값은 -98 입니다.
}

console.log (- -sample) //99
//단항 마이너스 연산자 : 숫자타입으로 변환 후 부호를 반대로 바꿈
//음수인 문자열을 그대로 숫자타입으로 바꾸려면 단항 마이너스 연산자를 두번 사용하면 된다.

number = 100;
console.log(number);

number -= 10;
console.log(number);


/**
 * 비교 연산자
 * == , ===, != , !== , > , < , >= , <=
 */

console.log(10 == '10'); //true , 값만 비교 
console.log(5 == '5'); //true , 값만 비교
console.log(0 == ''); //true , 값만 비교
console.log(null == undefined); //true , 값만 비교
console.log(true == '1'); //true , 값만 비교
console.log(false == '0'); //true , 값만 비교
// 실제 실무에서는 == 보다는 === 를 더 많이 사용함. (엄격한 비교를 위해)
// 그냥이럴꺼면 타입강제를 하라고  자바스크립트야..


console.log(10 === '10'); //false , 값과 타입 모두 비교

console.log(10 != '10'); //false , 값만 비교
console.log(10 !== '10');
 //true , 값과 타입 모두 비교

console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 10); //true
console.log(10 <= 5); //false
console.log(10 <= 10); //true
/**
 * 논리 연산자
 * && (AND) , || (OR) , ! (NOT)
 */

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log("----------------");
/**
 * 대소 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);

//삼항 연산자

/**
 * 조건식 ? 참일때의 값 : 거짓일때의 값
 * if와 동일한 기능을 하지만 더 간결하게 표현할 수 있다.
 * 간단한 조건문에서 사용함.
 * 근데 너무 남발하면 가독성이 떨어질 수 있음.
 */

console.log( 10 > 5 ? '참' : '거짓' ); //참

/** 
 * 중첩 삼항 연산자
 * 조건식1 ? 참일때의 값1 : 조건식2 ? 참일때의 값2 : 거짓일때의 값
 * 복잡한 조건문에서는 가독성이 떨어질 수 있으므로 주의해서 사용해야 함.
 * 실무에서는 잘 안씀.
 */

console.log( 10 > 5 ? '10은 5보다 크다' : 10 === 5 ? '10은 5와 같다' : '10은 5보다 작다' );

console.log("----------------");

/**
 * 논리 연산자
 */


//&& 조건은 모두 true여야 true 반환
console.log( true && true && true ); //true
console.log( true && false && true ); //false
console.log( false && false && false ); //false

//|| 조건 중 하나라도 true면 true 반환
console.log( true || true || true ); //true
console.log( true || false || true ); //true
console.log( false || false || false ); //false

//! 조건이 true면 false 반환, false면 true 반환
console.log( !true ); //false
console.log( !false ); //true

/**
 * 단축평가 (Short-circuit Evaluation)
 * 논리 연산자는 피연산자가 반드시 true 또는 false가 아닐 수 있다.
 * 이 경우 논리 연산자는 피연산자의 실제 값에 따라 평가된다.
 * && 연산자는 첫번째 피연산자가 false이면 두번째 피연산자를 평가하지 않고 false를 반환한다.
 * || 연산자는 첫번째 피연산자가 true이면 두번째 피연산자를 평가하지 않고 true를 반환한다.
 */
console.log( false || 'Hello' ); //Hello
console.log( true || 'Hello' ); //true

console.log( true && 'Hello' ); //왼쪽 트루면 오른쪽값 반환 Hello (오른쪽값이 맞냐 틀리냐를 판단하지 않음 ㅋㅋ)
console.log( false && 'Hello' ); //false

//&&는 왼쪽이 true여야 오른쪽값 반환
//||는 왼쪽이 false여야 오른쪽값 반환

//그러니까 착각하면 안되는게 && 와 || 는 조건식을 비교해서 true false를 반환하는게 아니고
// 조건식의 한 항만 비교하고 나머지는 그대로 반환하는거임 비교가 안됨
// 근데 이렇게 되면 나중에 if에서 쓸 때 문자열이 나와버릴 수도 있는데 숫자 || 문자가 boolean이냐? 이런 경우가 생길 수도 있는데
// 자바스크립트에서는 if 조건식에서 truthy , falsy 개념이 있어서 그걸로 판단함

// 최종적으로 단축평가를 외우기 가장 편한건. 효율적으로 구성되려고 이렇게 짜였다고 생각하면 되는데 하나의 항만 false냐 true냐를 보고
// && 에서 왼쪽이 false가 나왔으면 오른쪽은 볼 필요도 없이 false니까 첫번째항의 결과인 false를 반환하는거고
// 왼쪽이 ture가 나왔으면 오른쪽값의 결과가 true, false에 따라서 식 전체의 결과가 결정되는거기 때문에 오른쪽값을 반환하는거임

// || 도 마찬가지로 왼쪽이 true가 나오면 항 전체가 true가 나오기 때문에 오른쪽 볼 필요 없이 왼쪽을 반환하는거고
// 왼쪽이 false가 나오면 오른쪽값의 결과에 따라서 식 전체의 결과가 결정되기 때문에 오른쪽값을 반환하는거임

//장점이자 단점은 계속 연결이 가능하다는 것... && , || 를 계속 연결할 수 있음
console.log( false || 0 || '' || null || '안유진' || '아이브' ); //안유진
//|| 연산자는 첫번째로 truthy한 값을 반환함

console.log( true && '뉴진스' && 123 && '코드팩토리' && 0 ); //0
//&& 연산자는 첫번째로 falsy한 값을 반환함

//이제 여기서 생길 수 있는 의문점은 문자열이 왜 true로 취급을 받느냐? 숫자가 왜 true로 취급을 받느냐? 인데
//자바스크립트에서는 if 조건식에서 truthy , falsy 개념이 있음
//즉, boolean 타입이 아닌 값들이 조건식에서 평가될 때, 자바스크립트는 해당 값들을 암묵적으로 boolean 타입으로 변환하여 평가함
//truthy : true로 평가되는 값들 (빈문자열 '' 만 제외한 모든 문자열 , 0이 아닌 모든 숫자 , 객체 , 배열 등)
//falsy : false로 평가되는 값들 (빈문자열 '' , 숫자 0 , null , undefined , NaN 등)

//따라서 if 조건식에서 문자열이나 숫자가 사용될 때, 자바스크립트는 해당 값들을 truthy 또는 falsy로 간주하여 조건식을 평가함
//예를 들어, if ('안유진') { ... } 와 같은 조건식에서 '안유진'은 빈문자열이 아니므로 truthy로 평가되어 조건식이 참으로 간주됨
//반면에, if (0) { ... } 와 같은 조건식에서 0은 falsy로 평가되어 조건식이 거짓으로 간주됨

//이런 특성을 이용해서 논리 연산자와 단축평가를 활용하면, 조건에 따라 값을 선택하거나 기본값을 설정하는 등의 다양한 패턴을 구현할 수 있음



/**
 * 지수 연산자
 */
console.log(2 ** 3); //8
console.log(2 ** 4); //16

console.log(9 ** 0.5); //3
console.log(27 ** (1/3)); //3


/**
 *  null 연산자
 */

let name;
console.log(name);  //undefined

name = name ?? '코드팩토리'; //name 이 null 또는 undefined 라면 '코드팩토리' 할당 ??는 null 병합 연산자
console.log(name); //코드팩토리

name = name ?? '자바스크립트'; //name 이 null 또는 undefined 라면 '자바스크립트' 할당
console.log(name); //코드팩토리
//name 이 null 또는 undefined 가 아니므로 기존 값인 '코드팩토리' 가 유지됨

let name2;

name2 ??= '코드팩토리'; //name2 가 null 또는 undefined 라면 '코드팩토리' 할당
console.log(name2); //코드팩토리

// 이렇게도 가능

//자바스크립트는 if문 같은거 없이도 이런식으로 간단하게 처리할 수 있음