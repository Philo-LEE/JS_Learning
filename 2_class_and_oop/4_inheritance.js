/**
 * Inheritance (상속)
 * 
 * 객체들간의 관계를 구축하는 방법입니다.  기존 클래스, 수퍼 클래스(부모)로부터 속성(프로퍼티)과 동작(메서드)을 상속받을 수 있습니다.
 * 상속받은 클래스들은 차일드 클래스(child class)입니다.
 */

class IdolModel{
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

