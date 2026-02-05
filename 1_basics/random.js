//random


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


for(let i = 0; i < 10; i++){
    console.log(getRandomInt(1, 10)); // 1에서 9까지의 정수 중 랜덤 출력
}

//9 7 4 2 6 
//git test