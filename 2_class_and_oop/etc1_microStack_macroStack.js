/**
 * Promise가 최우선순위라 setTimeout이 0이라도 macro보다 micro가 먼저 실행이 된다능 헉헉
 * micro스택이 macro 보다 우선순위가 더 높음 ㄷㄷㄷㄷ 개조심해야할듯
 */
console.log('is this heap?')
setTimeout(()=> console.log("macro"), 0);
Promise.resolve().then(()=>console.log("micro"));