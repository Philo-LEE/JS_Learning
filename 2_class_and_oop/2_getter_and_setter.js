/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }


    /**
     * Getter
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear(){ //함수처럼 정의를 했지만 getter로 설정한 순간(get) 변수처럼 사용됩니다.
        return `${this.name}-${this.year}`
    }

    /**
     * Setter
     * 1) 데이터를 수정하고싶을 때, 겹치게끔 네임을 설정합니다. 함수처럼 만들면 됩니다.
     * 2) 프로퍼티들이 private 로 선언되면 세터들을 만들어줘야합니다.
     * 3) 이뮤터블 프로그래밍을 하는 요즘 상황에 따라서 세터는 잘 사용되지 않는 추세입니다.( 한번 만들고 수정을 잘 하지 않는듯. )
     */

    set name(name){ // 이것또한 게터처럼 사용법이 프로퍼티처럼 사용된다. 인스턴스명.setName = value; 이런식으루다가.
        this.name = name;
    }
}

siHyeon = new IdolModel('시현',2003);

console.log(siHyeon.nameAndYear);
// console.log(siHyeon.nameAndYear()); // TypeError: siHyeon.nameAndYear is not a function


siHyeon.name = '장원영';

console.log(siHyeon.name);

console.log('---------------')


/**
 * private한 property
 * private 하게 선언하려면 프로퍼티 앞에 #을 붙이면 되고 이후에 this.name 이렇게 쓰지않고 this.#name 이렇게 받아줘야합니다.
 * '#'을 붙였을 때 private 가 되는건 ES7부터 지원합니다. 남자라면 크롬을 씁시다.
 */

class IdolModel2{
    #name; 
    year;

    constructor(name, year){
        this.#name = name; //이때 반드시 앞에 #을 쓸 것, 쓰지 않으면 private 설정이 풀리는 것을 확인할 수 있었습니다.
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}


/**
 * getter 없이 특정해서 뽑는게 아니라면 해당 데이터는 노출되지 않습니다.
 * IdolModel2 { year: 2003 } '안유진'이 생략되게 됩니다. 일반적인 접근 불가하다는 뜻입니다.
 */
const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);  // IdolModel2 { year: 2003 }


/**  
 * getter를 사용하게되면 비로소 #name 에 접근이 가능해집니다. 
 * 하지만 여전히 인스턴스 자체를 조회했을 때 name은 private 값으로써 세트로 나오지 않는걸 볼 수 있습니다. 
*/
console.log(yuJin2.name) // 안유진 


/**
 * setter도 동일하게 private한 property value에 접근해서 값을 조작하는게 가능합니다.
 */
yuJin2.name = '이시현'; // setter가 있어야 가능한 동작입니다.
console.log(yuJin2.name) // 이시현 || getter를 걸었으니 접근 가능합니다. 
