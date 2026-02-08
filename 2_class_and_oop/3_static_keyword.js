/**
 * Static keyword
 * 
 * 일반 프로퍼티는 객체가 생성될 때 마다 힙에 각각 복사됩니다.
 * 만약 아래의 아이돌모델로 인스턴스를 100개 만든다면 
 * 힙에 인스턴스별로 name과 year가 각각 100개씩 생성됩니다.
 * 
 * 그러나 static으로 선언된 필드는 힙에있는 클래스 객체에 붙습니다.
 * 
 * static 필드는 static에 있는 prototype 프로퍼티에 아니라 클래스 함수 객체에 저장됩니다.
 * JAVA처럼 클래스에 귀속되고 만들어진 인스턴스끼리 공유가 가능합니다.
 */


class IdolModel{
    name;
    year;
    static #groupName = 'Ive'; //goupName이 static으로 선언되면 프로퍼티가 해당 클래스에 귀속이 되지 않습니다.

    constructor(name, year){
        this.name = name;
        this.year = year;

        /**
         * 아래처럼 선언하게되면 static에 붙는게 아니라 인스턴스에 groupName이라는 일반 프로퍼티가 생긴 후 '아이브'라는 값이 들어가게 됩니다.
         */
        // this.groupName = '아이브'; 
    }

    /**
     * 여기서 static으로 선언된 게터메서드도 static으로 선언되어야합니다. 
     * 인스턴스의 메서드는 해당 클래스의 프로토타입에 저장되고, static으로 선언된 것들은 클래스에 저장이 됩니다.
     * 그래서 일반 메서드(static이 아닌)에서의 this는 클래스의 프로토타입까지만 탐색하고,
     * static으로 된 것은 클래스에 저장이 되니까 탐색이 불가능합니다.
     * 따라서 static으로 선언한 프로퍼티를 다룰 땐, 반드시 static으로 접근해야합니다.
     * Idolmodel.#groupName으로 접근해도 가능은합니다만 추천하지 않습니다.(그럼 굳이 static을 쓰는 이유가 없어집니다.)
     */
    static get groupName(){
        return this.#groupName; //여기서 가르키는 this는 IdolModel의 클래스자체를 가르킵니다 인스턴스가 아닙니다.
    }


}

const yuJin = new IdolModel('안유진', 2003);



console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
console.log(yuJin.groupName); //undefined
console.log(IdolModel.groupName); //Ive

/**
 * factory constructor
 * constructor를 외부에서 불러오는게 아닌 static으로 만들어서 반환하게끔 합니다.
 * 이렇게되면 장점은 특정 프로퍼티의 이름또는 순서만 맞춰준 맵이나 리스트같은 객체들을 코드량도 줄이고
 * 클래스 내부에서 바로바로 뽑아줄 수 있습니다. (추후 프로젝트할 때 많이 사용할 것으로 생각됩니다.)
 * 
 * 추후 코드수정에도 강한 이점을 가집니다. 해당 메서드를 쓰는 모든 코드를 수정할 필요 없이
 * 해당 팩토리 생성자만 수정해준다면 유지보수가 깔끔해지는 이점이 있습니다.
 * 
 * 더해서 생성자들 모두의 특징이 될 수도 있으나, validation과 타입 변환, 기본값 처리와같은
 * 기능들이 합쳐진다면 더욱더 강한 시너지효과를 기대할 수 있습니다.
 * 
 * 또한 생성책임을 클래스 안으로 모을 수 있습니다.(캡슐화가 더욱 강해짐)
 * 게다가 포맷별 생성 전략을 분리시킬 수 있는 것 또한 장점으로 볼 수 있습니다.
 * 위의 장점에 들어오는 타입체크를 한 후 알아서 내부 constructor로 돌려버리게끔 하는 패턴을 사용하면
 * 더욱 더 강력한 클래스를 만들 수 있게 됩니다.
 */

class IdolModel2 {
    static test = 'test';
    name;
    year;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    //인스턴스를 반환하는 메서드를 static으로 만듦. 받는건 map
    static fromObject(object){
        return new IdolModel2(
            object.name,
            object.year,
            );
    }

    //받는건 리스트형
    static fromList(list){
        return new IdolModel2(
            list[0],
            list[1],
        );
    }

    testMethode(){
        return `goback`;
    }
}

//오브젝트를 넣어서 만들게되면 가독성도 좋아짐.
const yuJin3 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003,
});

const yuJin4 = IdolModel2.fromObject({
    name: 'test',
    year: 2005,
});


/**
 * prototype들은 은닉되기 때문에 따로 빼주는 메서드를 사용해야 합니다.
 * 그냥 getPrototypeOf 출력하면 {}가 나옵니다.
 * 
 * 모든 객체는 [[prototype]] 포인터를 가집니다.
 * 함수와 클래스는 위의 포인터와 추가로 prototype 프로퍼티를 직접 가집니다.
 * 이렇게 yuJin3과 yuJin4의 프로퍼티를 직접 조회해보면 각 인스턴스의 프로퍼티 key 값들이 나오는걸 확인할 수 있습니다.
 * 그리고 PrototypeOf는 [[prototype]] 을 참조하고, 인스턴스의 [[prototype]]에는 클래스의 Prototype 프로퍼티가 지정되어있습니다.
 * 따라서 조회 결과 공통된 클래스인 IdolModel2의 Prototype이 나오는 것을 확인할 수 있으며.
 * 우리가 일반 메서드로 작성한 것들은 바로 이 곳에 보관된다는 것을 알 수 있습니다.
 * 
 * Static으로 선언된 친구들은 그 바로 위인 IdolModel2의 직속 프로퍼티로 들어가게 됩니다.
 * 스태틱 필드이건 메서드이건 상관없이 다 한번에 붙는걸 확인할 수 있습니다.
 * 
 */

//메서드 Object.getPrototypeOf()를 쓰면 [[prototype]]이 가리키는 prototype 프로퍼티를 참조해서 가져옵니다.
const proto = Object.getPrototypeOf(yuJin3); 
console.log(Object.getOwnPropertyNames(proto)); // [ 'constructor', 'testMethode' ]
console.log(Object.getOwnPropertyNames(yuJin3)); // [ 'name', 'year' ]



//인스턴스이지만 기본적으로 객체구조이기 때문에 임의추가 저딴거도 가능합니다. ㄷㄷ 사실 객체세상입니다.
const proto2 = Object.getPrototypeOf(yuJin4);
 
console.log(Object.getOwnPropertyNames(proto2)); // [ 'constructor', 'testMethode' ]
yuJin4.testField = 'test'; //임의로 하나 집어넣음

//개별적인 프로퍼티를 가지는걸 확인할 수 있습니다. 인스턴스별로 힙에 생성됩니다.
console.log(Object.getOwnPropertyNames(yuJin4)); // [ 'name', 'year', 'testField' ]

// IdolModel2클래스의 프로토타입 직접조회
const classProto = IdolModel2.prototype;
console.log(Object.getOwnPropertyNames(classProto)); //[ 'constructor', 'testMethode' ]

//해당 인스턴스가 prototype 체인을 통해 원본의 prototype 프로퍼티에 접근한다는 사실을 알 수 있습니다.
console.log(
    Object.getPrototypeOf(yuJin3)===Object.getPrototypeOf(yuJin4) &&
    Object.getPrototypeOf(yuJin4)===IdolModel2.prototype
); // ture


// static 메서드, static 필드 확인
console.log(Object.getOwnPropertyNames(IdolModel2)); // [ 'length', 'name', 'prototype', 'fromObject', 'fromList', 'test' ]







