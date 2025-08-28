// 비구조화, 구조분해 (<-> structur: 구조화)
//      ㄴ 배열 또는 객체를 분해 - 함수 등 값을 전달할 때 사용

const sana = { name: '사나', age: 23, address: '경기' }

function print1(objValue) {
    console.log('print1 함수 실행')
    console.log(objValue.name)
    console.log(objValue.age)
    console.log(objValue.address)
}

function print2({ age, name, addr }) {      // {속성이름1,속성이름2,,,,,,} => 순서 무관
    console.log('print2 함수 실행----')
    console.log(name)
    console.log(age)
    console.log(addr)       // 없는 속성이름: undefined
}

function print3({ address:addr }) {     // address 속성값을 addr 변수에 저장하겠다는 의미
    console.log('print3 함수 실행----')
    console.log(addr)
}

function print4({ address:addr }) {     // address 속성값을 addr 변수에 저장하겠다는 의미
    console.log('print4 함수 실행----')
    console.log(addr)
    console.log(address)    // address 변수 선언 없으므로 오류.(없는 속성은 undefined)
}


print1(sana)
print2(sana)
print3(sana)
print4(sana)


