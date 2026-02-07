/**
 * Static keyword
 * 
 * 일반 프로퍼티는 객체가 생성될 때 마다 힙에 각각 복사됩니다.
 * 만약 아래의 아이돌모델로 인스턴스를 100개 만든다면 
 * 힙에 인스턴스별로 name과 year가 각각 100개씩 생성됩니다.
 * 
 * 그러나 static으로 선언된 프로퍼티는 힙에있는 클래스에 저장됩니다.
 * 
 * static 프로퍼티는 객체가 아니라 클래스 함수 객체에 저장됩니다.
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
}

//오브젝트를 넣어서 만들게되면 가독성도 좋아짐.
const yuJin3 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003,
});







