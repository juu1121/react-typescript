import { useState } from "react";


function App3(props) {
    const [count, setCount] = useState<number>(0);
    
    const [names, setNames] = useState<string[]>(["김구라", "해골", "원숭이"]);
    // MemberDto type 선언
    type MemberDto={
        num:number
        name:string
        addr:string
    }    
    //타입에 맞는 오브젝트가 대입되게한다.
    const m1:MemberDto = {
        num:1,
        name:"김구라",
        addr:"노량진"
    };

    const [members, setMembers] = useState<MemberDto[]>([
        {num:1, name:"김구라", addr:"노량진"},
        {num:2, name:"해골", addr:"행신동"}
    ]);
    
    const handleMember = (mem:MemberDto)=>{
        console.log(mem.num);
        console.log(mem.name);
        console.log(mem.addr);
    }

    return (

        <div>
            <h1>count 버튼</h1>            
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
            <h2>친구 목록</h2>
            <ul>
                {names.map(item=> <li>{item}</li>)}
            </ul>
            <h2>한명의 정보</h2>
            <p> 번호 : <strong>{m1.num}</strong></p>
            <p> 이름 : <strong>{m1.name}</strong></p>
            <p> 주소 : <strong>{m1.addr}</strong></p>
        </div>
    );
}

export default App3;