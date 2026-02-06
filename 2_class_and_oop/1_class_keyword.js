/**
 * 일단 javascript에서의 OOP는 java를 배우다가 오면 상당히 헷갈리거나 좀 이상한 부분이 있을 수 있습니다.
 * 상당히 이상하거나 이래도 되나? 싶은게 많을텐데 사실 이상한거 맞고 그렇게 해도 되는게 맞습니다. 10일만에 나온 언어지 않습니까?
 */

/**
 * Class KeyWord
 */

// 내부에 var 나 let const 없이 써주면 됩니다.

/**
class IdolModel{
    name = '안유진';
    year = 2003;
}

const yuJin = new IdolModel(); //인스턴스 생성
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
*/

/**
 * 근데 매번 저 프로퍼티가 고정이니까 생성자를 만들어주자(Constructor)
 */

class IdolModel{
    name;
    year;

    constructor(name, year){ //여기까지는 자바와 매우 흡사합니다.
        this.name = name;
        this.year = year;
    }
}


const yuJin = new IdolModel('안유진',2003); //인스턴스 생성
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }

const gaeul = new IdolModel('가을',2002); //가을 인스턴스 생성
console.log(gaeul); //IdolModel { name: '가을', year: 2002 }
// 이후에 강의에서 아이브 멤버를 다 쓰는데 저는 덕력이 그정도로 미치지는 못해 다 쓰진 않겠습니다.

/**
 * 앞으로 설명할 클래스는 자바스크립트만의 박살난 방법에 대해서 설명합니다.
 */

// 이렇게 정의를 해도 작동이 됩니다 이 무슨 말도안되는. 생성자에 속성을 정의하면 그 속성들이 프로퍼티로 정의되는 원리인 것같습니다.
class IdolModel2 {

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

}

class IdolModel3 {
    //그러나 프로퍼티를 명시적으로 표시해두는게 개발자간 소통하는데 매끄러운 효과를 낸다고 생각되어 써두는게 좋을 것 같습니다.
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){ // 메서드는 따로 앞뒤 다 뚝자르고 요렇게 써도 됩니다.
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const siHyeon = new IdolModel3('시현',23);

console.log(siHyeon.sayName());


/**
 * 알아둘 점.
 * 자바스크립트가 너무 오래되다보니 클래스는 함수로표시됩니다.
 * 그러나 클래스로 인해서 찍어낸 인스턴스는 object로 정상적으로 표시됩니다.
 * 왜 클래스가 함수가 될 수 있는지에 대해서 알아보겠습니다.
 */

console.log(typeof IdolModel3); // function
console.log(typeof siHyeon); // object

