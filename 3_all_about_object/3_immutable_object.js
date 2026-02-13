/**
 * Immutable Object
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);


/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin)); //Extensible 가능한지에 대한논리값이 나오는 Object Static 메서드

//true

yuJin.position = 'vocal'; // position 이라는 프로퍼티를 추가할 수 있음(Extend) 한 것.

console.log(yuJin);

Object.preventExtensions(yuJin); // Extensible 값을 False로 바꿈

console.log(Object.isExtensible(yuJin)); //{ name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }


yuJin.sex = 'female'; // 해당 명령어는 작동하지 않음.(sex 프로퍼티가 추가되지 않고 에러도 나지 않음)

console.log(yuJin); //{ name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

delete yuJin.position; // position 프로퍼티 삭제 Extensible은 여전히 false인 상태.

console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * Seal (봉인)
 */



const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); //false 봉인이 되어있는지 물어보는것 이기 때문에 디폴트는 false임


Object.seal(yuJin2); // seal 값을 true 봉인상태를 만듦.

console.log(Object.isSealed(yuJin2)); // true


//seal 값이 true 일 때 프로퍼티 추가
yuJin2.position = 'vocal';  
console.log(yuJin2);  //{ name: '안유진', year: 2003, age: [Getter/Setter] } 추가 안됨

//seal 값이 true 일 때 프로퍼티 삭제
delete yuJin2.year;
console.log(yuJin2); //{ name: '안유진', year: 2003, age: [Getter/Setter] } 삭제도 안됨.

//seal 값이 true 일 때 property attribute 설정 바꾸기
Object.defineProperty(yuJin2, 'name',{
    value: '코드팩토리',
});


console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'))
/**
 * 수정은 잘 되는 편이다.
{
  value: '코드팩토리',
  writable: true,
  enumerable: true,
  configurable: false // 그러나 configurable 값이 false가 됩니다. seal 작업을 하면 안된다는 뜻.
}
 */

//seal 값이 true 일 때 property attribute writable 바꾸기
Object.defineProperty(yuJin2, 'name',{
    writable: false,
});


console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'))
/**
 {
  value: '코드팩토리',
  writable: false, // 작동이 잘 되는걸 볼 수 있습니다.
  enumerable: true,
  configurable: false
}
 */


//seal 값이 true 일 때 프로퍼티 수정
yuJin2.year = 2004;
console.log(yuJin2); // { name: '안유진', year: 2004, age: [Getter/Setter] } 수정은 가능함.

/**
 * 
 * Configurable 과 seal 의 차이는
 * 
 * seal 은 Configurable의 기능에 추가로 property의 가짓수를 늘리거나 줄이지 못함.(writable은 그대로임);
 */






/**
 * Fozen 
 * 프로즌은 property Attribute에서의 모든 property에 대해서 writable,configurable이 false이고, property의 추가나 삭제가 되지않는
 * immutable하게 만드는 기능입니다. read_only 로 작동하게합니다.
 */

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(yuJin3)); // false 기본적으로 Object의 frozen 값은 false임.

Object.freeze(yuJin3); //Frozen을 거는 작업.

console.log(Object.isFrozen(yuJin3)); // true 가 나옵니다.

console.log(Object.getOwnPropertyDescriptors(yuJin3));

/**
 * 아래의 주석문은 에러가 납니다. Cannot redefine property: name
Object.defineProperty(yuJin3,'name',{
    value: 'test',
})
*/




/**
 * Object in Object 일 때 freeze 전이 test
 */

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
}


Object.freeze(yuJin4); // yuJin4 만 Freeze를 걸었습니다.



console.log(Object.getOwnPropertyDescriptors(yuJin4.wonYoung)); 
/**
 name: {
    value: '장원영',
    writable: true,
    enumerable: true,
    configurable: true
  },
 year: { 
    value: 2002,
    writable: true, 
    enumerable: true, 
    configurable: true 
  }
 */

console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4.wonYoung)); // false 
// Extensible, seal, freeze는 전이되지 않고 걸어놓은 단 한 계층만의 property Attribute만 건드린다.
// 재귀함수를 만들어서 오브젝트를 모두 freeze를 걸어주거나 해줘야한다.