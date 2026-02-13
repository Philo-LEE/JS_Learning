/**
 * Using function to create objects
 */


/**
 * 기존 내용
 * 함수를 통해 객체를 만들어 내려면 this라는 키워드로 받아줘야한다는 것을 배웠다.
 * 그리고 new라는 키워드를 통해 객체를 생성한다는 것 또한 알 수 있다.
 */
function IdolModel(name, year){ //생성자 함수라면, 첫글자를 대문자로 써서 사용합시다. 클래스마냥
    console.log(this); 
    this.name = name;
    this.year = year;

    // return {}; // 이렇게 return을 조지게되면 return한 {}만 들어가게 됩니다.
    // return 123; // 만약 primitive를 반환한다면 쓸 수는 있지만 굳이? 쓰지마십쇼

    this.dance = function(){
        return `${this.name}이 춤을 춥니다`;
    }
}

const yuJin = new IdolModel('안유진', 2003); // IdolModel {} 이 this로 잡힙니다.
console.log(yuJin);
console.log(yuJin.dance()); // 정상작동

/**
 * 근데 만약 여기서 yuJin2에다가는 new 키워드를 넣지 않게 된다면?
 * 
 * this가 가르키는 값은 IdolModel이 아닌 global을 가르킵니다.
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
 */

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); //undefined가 나옵니다. 왜? this 키워드를 써서 이미 생성자 함수가 되었는데 new로 받아주지 않으니 위의 값이 global에다가 붙습니다.. ㄷㄷ


/** global이라는 객체는 기본적으로 모든 프로젝트에 자동으로 생성됩니다.
 * 자바스크립트 엔진을 node.js에서 실행할 때 필요한 값들을 모두 들고있습니다.
 * 만약에 Web 에서 진행한다고 하면 window Object와 동일한 경우라 볼 수 있습니다. */
console.log(global.name); // 안유진 니가왜 거기서나와~

// 이렇게 될 수있으니까 하지 말란겁니다. 
// this를 썼으면 반드시 new를 받아줘야 global에 이상한게 안붙게 됩니다.
// 해당실수를 방어할 수 있는 코드 또한 미리 받아줄 수도 있습니다.

function IdolModel2(name, year){ //생성자 함수라면, 첫글자를 대문자로 써서 사용합시다. 클래스마냥
    
    /**  
     * 밖에서 new를 써서 정상적인 상태라면 해당 if문은 타지 않습니다. 
     * new를 쓰지 않으면 new.target은 undefined 입니다.
     * undefined를 ! 로 논리값으로 치환하면 true가 반환됩니다.
     * 그 원리를 통해 if문을 타게 해주는 것입니다.
     * 타게해준 다음에 return에 생성자를 태워서 보낼 수 있습니다.
     * 이렇게되면 밖에서 new키워드를 쓰지 않더라도 생길 수 있는 의도치 않는 버그를 극복할 수있습니다.
     */
    if(!new.target){ 
        return new IdolModel2(name, year); 
    }
    
    console.log(this); 
    this.name = name;
    this.year = year;

    // return {}; // 이렇게 return을 조지게되면 return한 {}만 들어가게 됩니다.
    // return 123; // 만약 primitive를 반환한다면 쓸 수는 있지만 굳이? 쓰지마십쇼

    this.dance = function(){
        return `${this.name}이 춤을 춥니다`;
    }
}


/**
 * arrowFunction
 * 화살표함수는 생성자함수가 될 수 없습니다.
 * 전통적인 형태의 함수만이 생성자 함수로 작동할 수 있습니다.
 */
const IdolModelArrow = (name,year) => {
    this.name = name;
    this.year = year;
}