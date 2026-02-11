/**
 * All about objects
 * 
 * 객체를 선언할 때 사용 할 수 있는 방법들.
 * 
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성 - class가 존재하기 이전에 존재했던 방법.
 */


const yuJin = {
    name: '안유진',
    year:2003,
}
console.log(yuJin);

class IdolModel {

    name;
    year;

    constructor(name, year) {

        this.name = name;
        this.year = year;
        
    }
}
console.log(new IdolModel('안유진', 2003));



/**
 * 생성자  함수
 * 함수형 객체는 클래스 정의부에서 프로퍼티가 없어도 생성자에서 파라미터롤 받아버리면 프로퍼티가 생성되는 것 처럼.
 * (굳이 필드를 만들고 바인딩을 명시적으로 보여주는 것은 가독성을 높이고 명시적으로 개발자간 소통을 위하는 목적이 좀더 큼.)
 * 함수 정의부에서 뚫어놓은 파라미터자체를 new 키워드로 객체를 만들어낼 수 있다. 마치 생성자가 통으로 되어있는 느낌.
 * 모두 객체인점은 변하지 않음.
 */ 
function IdolFunction(name, year){
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('가을', 2002)

console.log(gaEul);
