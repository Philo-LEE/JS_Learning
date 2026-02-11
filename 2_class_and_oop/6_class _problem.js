/**
 * 클래스 강의 끝낸 기념 문제
 * 
 * 1) Country 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹정보를 리스트로 들고있다. (name 프로퍼티, idolGroups 프로퍼티)
 * 2) IdolGroup 클래스는 아이돌 그룹 이름과 멤버 정보를 리스트로 들고있따. (name 프로퍼티, memebers 프로퍼티)
 * 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고있따.(name 프로퍼티, year 프로퍼티)
 * 4) MaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다. 추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다. 라는 String을 반환한다.
 * 5) FemaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다. 추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다. 라는 String을 반환한다.
 * 
 * 아래 정보가 주어졌을 떄 위 구조로 데이터를 형성하라.
 * map() 함수를 잘 활용하면 좋다.
 */

// 아이브는 한국 아이돌이고
// 아이브라는 이름의 그룹이다.
// 아이브는 여자 아이돌이다.

const iveMembers = [
    {
        name:'안유진',
        year:2003,
    },
    {
        name:'가을',
        year:2002,
    },
    {
        name:'레이',
        year:2004,
    },
    {
        name:'장원영',
        year:2004,
    },
    {
        name:'이서',
        year:2007,
    },
]

// BTS는 한국 아이돌이고
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.
const btsMembers = [
    {
        name : "진",
        year : 1992,
    },
    {
        name : "슈가",
        year : 1993,
    },
    {
        name : "제이홉",
        year : 1994,
    },
    {
        name : "RM",
        year : 1994,
    },
    {
        name : "지민",
        year : 1995,
    },
    {
        name : "뷔",
        year : 1995,
    },
    {
        name : "정국",
        year : 1997,
    },
]

/**
 * 정의부
 */

class Idol{
    name;
    year;

    constructor(name,year){
        this.name = name ;
        this.year = year; 
    }
}

class MaleIdol extends Idol{

    constructor(name, year){
        super(name, year);
    }

    sing(){
        return `${this.name}이 노래를 합니다.`
    }
}
class FemaleIdol extends Idol{

    constructor(name, year){
        super(name, year);
    }

    dance(){
        return `${this.name}이 춤을 춥니다.`
    }
}

class IdolGroup{
    name; // list
    members; // list
    constructor(name, members){
        this.name = name;
        this.members = members;
    }
}

class Country{
    name; // list
    idolGroups; // list
    constructor(name, idolGroups){
        this.name = name;
        this.idolGroups = idolGroups;
    }
}


/**
 * 구현부
 */

//정석법
const cBtsGroup = btsMembers.map(member => {
    return new MaleIdol(member.name,member.year);
})

const cIveGroup = iveMembers.map(member => {
    return new FemaleIdol(member.name,member.year);
})

const btsGroup =  new IdolGroup('BTS', cBtsGroup);
const iveGroup =  new IdolGroup('IVE', cIveGroup);

const korea = new Country('KR',[btsGroup, iveGroup]);




// 한번에 하기 
const allTogether = new Country('KR', [
    new IdolGroup('BTS',btsMembers.map(
        member => new MaleIdol(member.name, member.year)
    )),
    new IdolGroup('IVE',iveMembers.map(
        member => new FemaleIdol(member.name, member.year)
    )),
]);

console.log(allTogether); // KR
console.log(allTogether.idolGroups[0]); // BTS
console.log(allTogether.idolGroups[1]); // IVE