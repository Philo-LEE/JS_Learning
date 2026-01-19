/**
 * If and Switch
 */

let number = 5;

if(number % 2 === 0) { // 첫번째 조건은 if로
    console.log("짝수입니다.");
} else if(number % 2 === 1) { //두번째 조건은 else if로
    console.log("홀수입니다.");
} else { // number is not a number //마지막 조건은 else로
    console.log("숫자가 아닙니다.");
}


const englishDay = 'monday';

let koreanDay;

switch(englishDay) {
    case 'monday': // case 다음에는 들여쓰기를 하지 않습니다.
        koreanDay = '월요일'; // 들여쓰기는 필수
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    case 'saturday':
        koreanDay = '토요일';
        break;
    case 'sunday':
        koreanDay = '일요일';
        break;
    default:
        koreanDay = '해당하는 요일이 없습니다.';
}

// switch문은 조건이 많을 때 if문보다 가독성이 좋습니다.
console.log(koreanDay);
// 출력: 월요일