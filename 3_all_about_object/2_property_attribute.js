/**
 * Property Attribute
 * 
 * 프로퍼티가 추가되면 자동으로 생성되는 속성
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티. (예시: { name: '안유진', year: 2003 })
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티 (getter / setter)
 */


const yuJin = {
    name : '안유진',
    year : 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
//{ value: '안유진', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
//{ value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * { value: 2003, writable: true, enumerable: true, configurable: true }
 * 
 * 1) value - 실제 프로퍼티 값
 * 2) writable - 값을 수정 할 수 있는지 여부, false로 설정하면 프로퍼티 값을 수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부. for...in loop 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 단, writable이 true인 경우 value 변경과 writable을 변경하는 것은 가능하다.
 * 
 */

console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    year: 2003,
    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear()-age;
    },
}
// 이제 여기서 age는 액세서 프로퍼티임.

console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }


yuJin2.age = 32;
console.log(yuJin2.year);


console.log(Object.getOwnPropertyDescriptor(yuJin2,'age')); 
/** 
{
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
 * age가 value 가 있는 것이 아닌 getter와 setter 펑션으로 존재한다는 것을 알 수 있다.
 * 액세서 프로퍼티 애트리뷰트를 출력해봄.
 */

/**
 * Property Attribute 재정의하기.
 */


yuJin2.height = 172; //기존의 프로퍼티 추가법
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));


/**
 * 새로운 프로퍼티 재정의법.
 * Object에서 definProperty(재정의할 객체, 추가할 프로퍼티, 프로퍼티애트리뷰트 속성)
 */ 
Object.defineProperty(yuJin2, 'sex', { 
    value: 'Female', // 값
    writable: false, // 수정가능여부
    enumerable: true, // 열거여부
    configurable: true, // 프로퍼티 재정의 가능여부
})

Object.defineProperty(yuJin2, 'test', { 
    value: 'test'
    //기본값 입력시 모두 false가 들어가게 됨.    
})
console.log(yuJin2)
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'test'));



/**
 * writable 예시
 */
yuJin2.height = 180;
console.log(yuJin2);

//해당 프로퍼티의 수정금지 
Object.defineProperty(yuJin2, 'height',{
    writable: false,
});

//프로퍼티 애트리뷰트 출력
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

//다시 수정 시도
yuJin2.height = 200; // 에러는 안나고 해당 명령자체가 무시됨 ㄷㄷ;
console.log('수정완료'); // 
console.log(yuJin2); // 여전히 180으로 표시됨.


/**
 * Enumerable
 */

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}
/**
 * name
 * year
 * age
 * height
 * sex
 */

Object.defineProperty(yuJin2, 'name',{
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'));

console.log('--------------')

console.log(Object.keys(yuJin2)); // [ 'year', 'age', 'height', 'sex' ] name이 사라진 것을 확인. enumerable : false이기 떄문에 열거불가능.

for(let key in yuJin2){
    console.log(key);
}
/**
 * year
 * age
 * height
 * sex
 */

console.log(yuJin2.name); // 명시적으로 접근

console.log(Object.getOwnPropertyDescriptors(yuJin2));


/**
 * Configurable
 * writable이 true이면 configurable 이 false라도 value를 바꿀 수 있다.
 */

Object.defineProperty(yuJin2,'height',{
    writable: true,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2,'height')); //{ value: 180, writable: false, enumerable: true, configurable: false }

/** 
Object.defineProperty(yuJin2, 'height', {
    enumerable: false, //TypeError: Cannot redefine property: height
});
*/


Object.defineProperty(yuJin2,'height',{
    value:172,
}); 

/**
 * 특정 프로퍼티에 걸려있는 configurable가 false인 경우에.(프로퍼티 애트리뷰트 수정 불가 옵션)
 * writable이 true로 되어있으면 value와 writable 한해서는 수정 가능.
 * value는 writable이 true라면 수정 가능. writeable 자체도 true -> false 수정가능하다는 뜻. 그러나 반대로는 불가능
 */ 

console.log(yuJin2.height);// 172

