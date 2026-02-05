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
    console.log(e.message); //e.message에 Error에서 던졌던 문자열이 들어가있다. 타고들어가보면 name, message 등 다양한 프로퍼티가 있는걸 확인할수이따
}finally{
    console.log('이건 어떻게든 실행이되는 코드입니다');
}

