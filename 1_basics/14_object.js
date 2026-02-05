/**
 * Object / 객체 most important
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * 
 */

// key : value pair
let obj = {
    name : '시현',
    age : 25,
    dance : function(){
        return `${this.name}시현이가 춤을 춥니다.`; // this는 obj를 가리킨다. 나 스스로를 가르키기 때문에 직접참조가 가능하다.
    }
};

console.log(obj);
console.log(obj.dance());
obj.dance = () => '춤추는 중';
console.log(obj.dance()); // '춤추는 중'
console.log(obj['dance']()) // '춤추는 중' 문자열로 호출도 가능

const key = 'name';

console.log(obj[key]); // 시현
// key 값으로 뭔가를 가져올 때, key를 대괄호표기로 변수로 지정해도 가져올 수 있다.


const nameKey = 'name';
const nameValue = '안유진';

const group = '아이브';
const groupKey = 'group';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : group,
    dance : function() {
        return `${this[nameKey]}이(가) 춤을 춥니다.`;
    }
} // 이렇게도 가능

console.log(yuJin2); // { name: '안유진', group: '아이브', dance: [Function: dance]  }
console.log(yuJin2.dance()); // 안유진이(가) 춤을 춥니다.
/**
 * nameKey, nameValue, groupKey, group 변수를 사용하여 객체의 키와 값을 동적으로 설정할 수 있습니다.
 * 대괄호 표기법을 사용하면 변수의 값을 키로 사용할 수 있습니다.
 * 변수의 값이 반환되어 객체의 키값으로 사용되는 구조입니다.
 */


yuJin2['group'] = '코드팩토리';

console.log(yuJin2);

yuJin2['englishName'] = 'An Yujin';

console.log(yuJin2);
/**
 * 객체에 새로운 키-값 쌍을 추가할 때도 대괄호 표기법을 사용할 수 있습니다.
 * 여기서는 'englishName'이라는 새로운 키를 추가하고 그 값을 'An Yujin'으로 설정했습니다.
 * 이렇게 하면 yuJin2 객체에 새로운 속성이 추가됩니다.
 * 만약 yuJin2.englishName = 'An YuJin'; 이렇게 해도 똑같이 추가됩니다.
 */


/**
 * 왜 const로 객체를 선언했는데도 내부 속성을 변경할 수 있을까?
 * 
 * const 키워드는 변수의 재할당을 방지합니다. 즉, 객체 자체를 다른 객체로 변경하는 것은 불가능합니다.
 * 그러나 객체의 내부 속성(키-값 쌍)은 변경할 수 있습니다. 이는 객체가 참조 타입이기 때문입니다.
 * 따라서, const로 선언된 객체의 속성을 변경하는 것은 허용되지만, 객체 자체를 다른 값으로 재할당하는 것은 불가능합니다.
 * 
 * 즉 
 * 1) const로 선언될경우 객체 자체를 변경할 수는 없습니다.
 * 2) 객체 안의 프로퍼티나 매서드는 변경할 수 있습니다.
 * 
 */


const test = {
    a : 1,
    b : 2,
}


// test = {} // TypeError: Assignment to constant variable.
// 1) 객체 자체를 변경하려고 하면 에러가 발생합니다.
test.a = 3; // 2) 그러나 객체의 속성은 변경할 수 있습니다.
console.log(test); // { a: 3, b: 2 }

/** 
 * 특정 프로퍼티를 삭제해야하는 경우에는 어떻게할까? 
 *
 */


// 모든 키값, 벨류값 가져오기

console.log(Object.keys(test)) // key가 어레이로 반환됩니다.
console.log(Object.values(test)) // value가 어레이로 반환됩니다.

// 비교적 최근에 생긴 문법

const name = 'test';

const yuJin3 = {
    name
};

console.log(yuJin3) // 'name = test' 가 나옴 변수명이 key고 변수값이 value로 할당된다.

