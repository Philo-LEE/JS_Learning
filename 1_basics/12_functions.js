/**
 * Functions (함수)
 * 
 * 개발자들의 개발규칙 DRY
 * D on't
 * R epeat
 * Y ourself
 * 즉, "니가 스스로 반복해서 짜지 마라" 라는 원칙이 있음.
 * 함수는 코드 블록을 정의하고, 필요할 때마다 호출하여 재사용할 수 있는 기능입니다.
 * 함수는 입력값(매개변수)을 받아서 처리하고, 결과를 반환할 수 있습니다.
 * 함수는 코드의 재사용성을 높이고, 가독성을 향상시키며, 유지보수를 쉽게 만듭니다.
 * 예시:
 * function greet(name) {
 *   return `Hello, ${name}!`;
 * }
 * console.log(greet("Alice")); // 출력: Hello, Alice!
 */


function calculate(a) {
    console.log((a + 2) * 5);
}

calculate(3); // 함수 호출

// 자바스크립트에서 아규먼트 타입 강제를 하기위해서는 명시적 형 변환을 사용해야 합니다.
function addNumbers(x, y) {
    // 명시적 형 변환
    const num1 = Number(x);
    const num2 = Number(y);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Invalid input: Please provide numbers.';
    }
    
    return num1 + num2;
}

console.log(addNumbers('5', '10')); // 출력: 15
console.log(addNumbers('5', 'abc')); // 출력: Invalid input: Please provide numbers.

//현재 시점에서는 invalid를 이렇게 처리하지만 추후 심도있게 다룹시다잉


// 기본 파라미터 설정
function multiply(a, b = 2) { // b의 기본값을 2로 설정
    return a * b;
}

console.log(multiply(5)); // 출력: 10 (b의 기본값 사용)
console.log(multiply(5, 3)); // 출력: 15 (b에 3 전달)

/** 
 * Return(값 반환)
 */


function square(num) {
    return num * num; // 함수가 호출된 위치로 값을 반환
}

const result = square(4); // 함수 호출, 반환된 값을 result에 저장, 즉 받아줘야한단 말임.
console.log(result); // 출력: 16 

const result2 = square(5) + 10; // 반환된 값을 다른 연산에 사용


/**
 * Arrow Functions (화살표 함수)
 * 
 * 화살표 함수는 간결한 문법으로 함수를 정의할 수 있는 방법입니다.
 * 특히 익명 함수(이름이 없는 함수)를 작성할 때 유용합니다.
 * 화살표 함수는 this 바인딩이 다르게 동작하므로, 콜백 함수나 메서드 내에서 자주 사용됩니다.
 * 예시:
 * const add = (a, b) => a + b;
 * console.log(add(2, 3)); // 출력: 5
 */

//아래는 바디가 있는 화살표 함수
const multiply2 = (x,y) => {
    return x * y;
}

//아래는 바디가 없는 화살표 함수
const multiply3 = (x,y) => x * y; // return 키워드와 중괄호 생략 가능 왜 이런 방법이 존재하나요? 그냥 편하니까 만들어져버렸어요.

//파라미터가 하나일 때
const multiply4 = x => x * 2; // 매개변수가 하나일 때는 괄호도 생략 가능 이것도 왜 존재하나요? 그냥 편하니까 만들어져버렸어요.
console.log(multiply4(5)); // 출력: 10

// 아래는 중첩된 화살표 함수 예시
const multiply5 = x => y => z => `x : ${x}, y : ${y}, z : ${z}`; // 중첩된 화살표 함수
console.log(multiply5(1)(2)(3)); // 출력: x : 1, y : 2, z : 3
// 중첩된 화살표 함수는 각 단계에서 매개변수를 받아서 다음 함수로 전달합니다.
// 이 방식은 커링(currying)이라고 불리며, 함수형 프로그래밍에서 자주 사용됩니다.
// 중첩된 화살표 함수는 복잡한 함수 조합이나 부분 적용 함수(partial application)를 구현할 때 유용합니다.
// 다만, 너무 많이 중첩되면 가독성이 떨어질 수 있으므로 적절히 사용하는 것이 좋습니다.

// 최상위 함수가 호출되면 x를 받고, 그 함수가 y를 받는 함수를 반환하고, 그 함수가 z를 받는 함수를 반환하는 구조임.
// 그래서 multiply5(1)(2)(3) 이렇게 호출하는 것임.
// z단에서 x 값까지 접근 가능한 이유는 클로저(Closure) 때문임.
// 클로저는 함수가 선언된 렉시컬 환경을 기억하는 특성으로, 내부 함수가 외부 함수의 변수에 접근할 수 있게 함.

//아래는 multiply5를 일반 함수로 바꾼 예시
function multiply6(x) { // 최상위 함수
    return function(y) { // 중첩된 함수 반환
        return function(z) { // 또 다른 중첩된 함수 반환
            return `x : ${x}, y : ${y}, z : ${z}`;
        }
    }
}

//화살표 함수와 일반 함수의 주요 차이점은 this 바인딩 방식에 있습니다.
//화살표 함수는 자신이 정의된 문맥의 this 값을 상속받지만, 일반 함수는 호출 방식에 따라 this 값이 달라집니다.
//따라서, 화살표 함수는 콜백 함수나 메서드 내에서 this를 사용할 때 유용합니다.
//하지만, 지금은 그냥 문법적으로 이렇게도 쓸 수 있다는 정도로만 알아두자!

console.log(multiply2(3,4)); // 출력: 12
console.log(multiply3(5,6)); // 출력: 30



// 그냥 함수선언문이었구나. 함수를 const로 선언할 수 있는 이유는 함수가 일급 객체이기 때문이고 그냥 이렇게 한줄로 쓸 수 있는거구나...
// 이걸쓰면 호이스팅도 안되고 익명함수로 쓰고 프론트 볼 때 주로 봤던 방식인데 여기서 배우는거구나!
// 기능적으로 똑같지 않지만, 지금 이렇게 쓴다면 일단 비슷하다고 생각해두자

const multiply7 = function(x, y) {
    return x * y;
}

console.log(multiply7(7,8)); // 출력: 56

// 이게 왜 되냐면 함수가 일급 객체이기 때문임.
// 자바스크립트에서 함수는 일급 객체(First-Class Citizen)로 취급됩니다.
// 이는 함수가 다른 데이터 타입과 동일하게 취급된다는 것을 의미합니다.
// 함수가 일급 객체라는 것은 다음과 같은 특징을 가집니다:

// 1. 변수에 할당할 수 있다.
// 2. 함수의 인자로 전달할 수 있다.
// 3. 함수의 반환값으로 사용할 수 있다.
// 4. 동적으로 생성할 수 있다.
// 이러한 특징들 덕분에 자바스크립트에서는 고차 함수(Higher-Order Functions)를 쉽게 구현할 수 있으며, 함수형 프로그래밍 패러다임을 활용할 수 있습니다.
// 함수가 일급 객체라는 개념은 자바스크립트의 유연성과 강력한 기능의 핵심입니다.

const multiplyThree = function(x, y, z) {
    // console.log(arguments); // arguments 객체는 함수에 전달된 모든 인수를 포함하는 유사 배열 객체입니다.
    return x * y * z;
}
// arguments 객체는 화살표 함수에서는 사용할 수 없습니다. 화살표 함수는 자체적인 arguments 객체를 가지지 않기 때문입니다.
// arguments 객체는 배열이 아니므로, 배열 메서드를 직접 사용할 수는 없다. 그러나 Array.from()이나 전개 연산자(...)를 사용하여 배열로 변환할 수 있습니다.
console.log(multiplyThree(2,3,4)); // 출력: 24

const multiplyAll = function(...nums){ //전개 연산자 ...를 사용하여 모든 인수를 배열로 받음
    return Object.values(nums).reduce((a,b) => a * b, 1); // reduce 메서드를 사용하여 배열의 모든 요소를 곱함

    // reduce 메서드는 배열의 각 요소에 대해 누적 함수를 실행하여 단일 값을 반환합니다.
    // 여기서는 (a, b) => a * b 라는 화살표 함수를 사용하여 배열의 모든 요소를 곱하고 있습니다.
    // 두 번째 인자인 1은 초기값으로, 곱셈의 항등원입니다.
    // 즉, 아무 요소도 없을 때 결과가 1이 되도록 합니다.
    // Object.values(nums)는 nums 객체의 값들을 배열로 반환합니다. 여기서는 nums가 이미 배열이므로 사실상 불필요한 부분입니다.
    // 따라서 그냥 nums.reduce(...)로 해도 동일한 결과를 얻을 수 있습니다.
    // 이 함수는 전달된 모든 숫자를 곱한 결과를 반환합니다.
    // 예를 들어, multiplyAll(1,2,3,4) 를 호출하면 24를 반환합니다.
    // 이 방식은 가변 인자 함수(Variadic Function)를 구현하는 데 유용합니다.
    // 가변 인자 함수는 호출 시 전달되는 인수의 개수가 고정되어 있지 않은 함수를 의미합니다.
    // 전개 연산자(...)를 사용하면 이러한 가변 인자 함수를 쉽게 구현할 수 있습니다.
    // 요약하자면, 이 함수는 전달된 모든 숫자를 곱한 결과를 반환하는 가변 인자 함수입니다.
    // 전개 연산자와 reduce 메서드를 활용하여 간결하게 구현되었습니다.
    // Object.values(nums)는 사실상 불필요하므로, 그냥 nums.reduce(...)로 바꿔도 됨.
}

console.log(multiplyAll(1,2,3,4,5,6,7,8,9,10)); // 출력: 3628800


// 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)
(function() {
    console.log("이 함수는 즉시 실행됩니다!");
}
)(); // 함수 정의와 동시에 즉시 호출

// 즉시 실행 함수는 한 번만 실행되고, 전역 네임스페이스를 오염시키지 않기 때문에 모듈 패턴에서 자주 사용됩니다.
// 아 이것도 프론트 할 때 많이 봤던건데 여기서 배우는거구나!
// 요즘은 모듈 시스템이 잘 발달되어 있어서 IIFE를 사용할 일이 많이 줄어들었음.

console.log(typeof multiply); // 출력: function
console.log(multiply instanceof Object); // 출력: true
// 함수는 자바스크립트에서 특별한 객체 타입입니다.
// 따라서 typeof 연산자를 사용하면 "function"이 반환되고, instanceof 연산자를 사용하면 Function 생성자의 인스턴스인지 확인할 수 있습니다.

// 그냥자바에서도 instanceof라는 키워드가 있습니다. ㅋㅋ 우리 스프링할때 많이썼죠?
// 자바스크립트에서 함수는 일급 객체이기 때문에, 변수에 할당하거나 다른 함수의 인자로 전달할 수 있습니다.
// 이로 인해 함수형 프로그래밍 패러다임을 활용할 수 있습니다.