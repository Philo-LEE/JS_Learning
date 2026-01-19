/**
 * Naming Conventions
 * 
 * 1) 일반적으로 영어( 라틴문자 ) 를 사용하며 문자와 숫자를 모두 사용할 수 있다.
 * 2) 공백은 허용되지 않으며, 단어와 단어 사이는 언더스코어(_) 또는 캐멀케이스(camelCase)로 구분한다.
 * 3) 변수명은 숫자로 시작할 수 없다.
 * 4) 특수문자는 언더스코어(_)와 달러기호($)만 허용된다.
 * 5) 대소문자가 구분된다.
 * 6) 예약어(키워드)는 사용할 수 없다.
 * 
 * Naming Styles
 * 1) 변수명과 함수명은 캐멀케이스(camelCase)를 사용한다. <- 개추
 * 2) 스네이크케이스(snake_case)는 잘 사용하지 않는다.(모든건 소문자로 언더스코어로)
 * 3) 클래스명은 파스칼케이스(PascalCase)를 사용한다. (카멜이랑 똑같은데 첫글자도 대문자) C# 마이크로소프트 계열의 언어에서 사용함.
 */

let codeFactory = '코드팩토리'; //캐멀케이스
var $ive = '아이브'; //캐멀케이스
const _yuJin = '안유진'; //캐멀케이스

console.log(codeFactory);
console.log($ive);
console.log(_yuJin);

const anYujin = '안유진'; //카멜케이스
const new_jeans = '뉴진스'; //스네이크케이스
const AnYujin = '안유진'; //파스칼케이스

