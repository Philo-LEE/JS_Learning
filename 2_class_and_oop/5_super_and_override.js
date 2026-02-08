/**
 * super, override
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name} 입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    //노래 /춤
    part;

    constructor(name, year, part){
        super(name, year); //부모생성자 호출 부모 생성자를 먼저 태우고 this를 사용할 수 있어야 자식생성자에서 this를 사용할수있음.
        this.part = part;
    }

    /**
     * 짤막상식
     * Java와 다르게 자식클래스에서 부모의 프로퍼티를 불러올 때 super를쓰는게 아니라 this를 씁니다... 객체끼리가 다르기때문입니다.
     * 근데 또 웃긴게 부모의 메서드를 호출할 때는 super를 써야합니다. 어찌됐든 super쓰는게 덜 헷갈리고 좋은 것 같습니다.
     * 엄격한 객체지향언어가 아니기 때문에 발생한다고 생각하면 됩니다 일단은.
     */
    sayHello(){
        return `${super.sayHello()} ${this.part}도 못합니다.`; // 부모의 메서드를 부를 땐 super를 씁니다. 
        // return `안녕못하는데요 ${this.name} 아닙니다. ${this.part}도 못합니다.`; // 정답
        //return `안녕못하는데요 ${super.name} 아닙니다. ${this.part}도 못합니다.`; //Js에서는 오답, 다른데선 정답 정의되지 않았다고 나옵니다.
        
    }
}

const yuJin = new FemaleIdolModel('안유진',2003,'보컬');
console.log(yuJin); //FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }


const wonYoung = new IdolModel('장원영', 2002);

console.log(wonYoung); // IdolModel { name: '장원영', year: 2002 }
console.log(wonYoung.sayHello()); // 안녕하세요 장원영 입니다.
console.log(yuJin.sayHello()); //안녕하세요 안유진 입니다. 보컬도 못합니다.