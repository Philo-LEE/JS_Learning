/**
 * Inheritance (상속)
 * 
 * 객체들간의 관계를 구축하는 방법입니다.  기존 클래스, 수퍼 클래스(부모)로부터 속성(프로퍼티)과 동작(메서드)을 상속받을 수 있습니다.
 * 상속받은 클래스들은 차일드 클래스(child class)입니다.
 */

class IdolModel{
    static test = 'test';
    name;
    year;
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return `${this.name}이 춤을 춥니다`
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return `${this.name}이 노래를 부릅니다.`
    }
}


const yuJin = new FemaleIdolModel('안유진', 2003);

console.log(yuJin); //FemaleIdolModel { name: '안유진', year: 2003 } 생성자도 같이 상속받습니다.
console.log(yuJin.dance()); // 안유진이 춤을 춥니다.

const jiMin = new MaleIdolModel('지민',1995);

console.log(jiMin); //MaleIdolModel { name: '지민', year: 1995 }

console.log(yuJin.dance()); //안유진이 춤을 춥니다
console.log(yuJin.name); //안유진


console.log(jiMin.sing()); //지민이 노래를 부릅니다.

const pHilo = new IdolModel('Philo',1995); 

// console.log(pHilo.dance()); // TypeError: pHilo.dance is not a function

console.log(yuJin instanceof IdolModel); // true 부모 클래스를 상속받았으므로.
console.log(yuJin instanceof FemaleIdolModel); //true 해당 클래스로 만들어진 인스턴스이므로.
console.log(yuJin instanceof MaleIdolModel); // false 같은 자식레벨이긴해도 관련이 없으므로.

console.log('------------')


console.log(pHilo instanceof IdolModel); // true 해당 클래스로 만들어진 인스턴스이므로
console.log(pHilo instanceof FemaleIdolModel); //false 자식으로 가지고 있으나 관련이 없으므로.
console.log(pHilo instanceof MaleIdolModel); // false 자식으로 가지고 있으나 관련이 없으므로.


console.log('------------')


console.log(Object.getOwnPropertyNames(IdolModel)); // [ 'length', 'name', 'prototype', 'test' ]
console.log(Object.getOwnPropertyNames(FemaleIdolModel)); //[ 'length', 'name', 'prototype' ]/IdolMdel에서 만든 test가 없습니다.
console.log(FemaleIdolModel.test); // 'test' static도 상속이 된 것 처럼 보입니다. 조회해보니 없는데 어떻게 찾을까요?

/**
 * 자식 클래스의 [[prototype]] 슬롯을 조회해 봤더니 부모클래스가 나옵니다.
 * static이 복사된것이 아니라 참조입니다.
 */ 
console.log(Object.getPrototypeOf(FemaleIdolModel) === IdolModel); // true


/**
 * extends는
 * 
 * 모든객체(단, Object 제외)는 [[prototype]] 슬롯을 가집니다.
 * 클래스 자체도 함수고 함수는 객체이므로 [[prototype]] 슬롯이 있습니다.
 * 클래스 내부에 prototype 프로퍼티 또한 객체입니다.
 * 객체이므로 [[prototype]] 슬롯이 있습니다.
 * 
 * 그저
 * 
 * prototype 객체의 [[Prototype]]을 부모 prototype으로 연결하고
 * 클래스(함수 객체)의 [[Prototype]]을 부모 클래스 객체로 연결합니다.
 * 그리고 자식 클래스로 만들어진 인스턴스들의 [[prototype]] 슬롯에는
 * 자식 클래스의 prototye 에 연결됩니다. 그렇게되면 자연스럽게 인스턴스 체인이 연결되게 됩니다.
 * 그리고 추가적으로 클래스체인도 연결이 됩니다.
 * 
 * 그래서 Inheritance는 체이닝이 두줄 이루어진다고 보면 될 것 같습니다.
 */