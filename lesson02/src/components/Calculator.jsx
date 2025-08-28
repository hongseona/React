// Day2_04: useState 연습. 출력값, 오류 등에 활용. 유효성 검사
import { useState } from "react"

export default function Calculator() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [result, setResult] = useState('')
    // 문자열을 수치 형식으로 변환 후 사칙연산. Number(fitst) / Nmber(second)
    const [error, setError] = useState(``)

    // 입력값의 유효성 검사 함수
    function validation(value) {
        console.log(/^-?\d*\.?\d*$/.test(value), value) // 정규식.test 값
        // 정규식 통화할때만 setFirst 로 상태값 변경.
        if (/^-?\d*\.?\d*$/.test(value)) {
            return true
        } else {
            setError('유효하지 않은 입력입니다.')
            setResult('')
            return false
        }
    }

    function handleAdd() {
        setResult(Nmber(first) + Number(second))
    }
    function handleSub() {
        setResult(Nmber(first) - Number(second))
    }
    function handleMul() {
        setResult(Nmber(first) * Number(second))
    }
    function handleDiv() {
        // second 가 0일 때는 Infinity -> 오류. 유효성 검사 필요
        // first 가 0일 때는 0
        if(Number(second)!==0 && validation(first) && validation(second)) {
            setResult(Number(first) / Number(second))
        }
        setResult(Nmber(first) / Number(second))
    }
    return (
        <div className='container'>
            Calculator
            <h3>계산기</h3>
            <div style={{color:'red'}}></div>
            <input
                type="number"
                placeholder="첫번째 값을 입력하세요."
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                // onChange={(e) => )}
            />
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
            <button onClick={handleMul}>×</button>
            <button onClick={handleDiv}>÷</button>
            <input
                type="number"
                placeholder="두번째 값을 입력하세요."
                value={second}
                onChange={(e) => setSecond(e.target.value)}
            />
            <hr />
            <span>={result}</span>
        </div>
    )
}