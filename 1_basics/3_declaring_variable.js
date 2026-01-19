/**
 * 변수 선언
 * Var, Let, Const
 * var : 안쓴다. 근데 이해는 해야함 
 * let : 변수
 * const : 상수
 */

var name = 'Philo'; // 옛날 방식, 요즘은 잘 안씀

console.log(name); //줄그어지는건 신경쓰지 말기



var age = 32;
console.log(age);


let ive = '아이브';
console.log(ive);

/**
 * let과 var는 값을 추후변경할 수 있다.
 */

ive = '안유진'
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

/**
 * const는 값을 추후 변경할 수 없다.
 */
// newJeans = '르세라핌' //에러남


/**
 * 1) 선언
 * 2) 할당
 */

var name = "코드팩토리"; //선언 + 할당

var city; //선언
console.log(city); //undefined
city = "Seoul"; //할당
console.log(city); //Seoul


/**  
 * const girlFriend2;
 * girlFriend2 = "안유진";
 * error 발생 : const는 선언과 동시에 할당이 이루어져야 한다.
*/