/**
 * try_catch는 
 * 에러 던지고 잡는거임
 * throw new error로 발생시킬 수 있고
 * 
 * try_catch로 잡을 수 있음.
 */

try{
    let a = 10;

    if (a !== 9){
        throw new Error('해당값이 아닙니다잉');
    }

}catch(e){
    console.log('해당값이 아닙니다.');
}finally{
    console.log('이건 어떻게든 실행이되는 코드입니다');
}

