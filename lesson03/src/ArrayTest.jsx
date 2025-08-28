import { useRef, useState } from "react";


function App() {
    // 할일 목록 배열
    const initVal = [
        {
            id: 1,
            text: "리액트 수업 복습",
            checked: true,
        },
        {
            id: 2,
            text: "리액트 프로젝트 기획",
            checked: false,
        },
        {
            id: 3,
            text: "데이터베이스 테스트",
            checked: true,
        },
    ];

    const [todos, setTodos] = useState(initVal);
    const maxid = useRef(todos.lenght + 1);
    const [value, setValue] = useState("");

    // ⚡⚡배열 자료구조의 상태 변경 -> 재렌더링 -> 화면 바꾸기

    function handleRemove(id) {
        const newTodos = todos.filter((item) => item.id !== id);
        // 인자로 전달된 id 값이 아닌것만 필터링하여 상태변경
        setTodos(newTodos);
    }

    function handlechecked(id) {
        // 배열 자체를 바꿔야 상태 변경됩니다.
        // 배열 특정 요소의 checked 값만 변경한 것을 새로운 배열로 하여 todos 변경
        // ! 연산자는 참은 거짓, 거짓은 참으로 변경
        const newtodos = todos.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        // 상태가 바뀝니다.
        setTodos(newtodos);
        consol.log('handleChecked:', todos);    // 바로 반영되는 것이 보이지 않아요.(재렌더링하기 전의 값을 출력)
    }

    function handleInsert(text) {
        const newTodo = {
            id: todos.lenght + 1,
            text: text,
            checked: false,
        };
        // 배열에 새로운 요소 추가하여 상태 변경
        setTodos([...todos, newTodo]);
    }

    return (
        <div>
            {/* onClick 에서 실행할 함수 안에서 handleChecked(1) 호출 */}
            <button onClick={() => handlechecked(1)}> id=1 checked 값 변경</button>
            <button onClick={() => handlechecked(2)}> id=2 checked 값 변경</button>
            <button onClick={() => handlechecked(3)}> id=3 checked 값 변경</button>
            <button onClick={() => handleInsert("웹기초 공부")}>새로운 할일 추가</button>
            <button onClick={() => handleRemove(2)}> id=2 할일 삭제</button>
            <button onClick={() => handleRemove(4)}> id=4 할일 삭제</button>
        </div >
    );
}
export default App;