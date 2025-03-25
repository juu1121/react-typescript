
function App4(props) {
    type Person = {
        name:string,
        age:number
    }
    type Contact = {
        phone:string,
        email:string
    }
    const p1:Person = {name:"김구라", age:30};
    const c1:Contact = {phone:"010", email:"aaa@com"};

    //Person과 Contact의 교집합 type
    type PersonInfo = Person & Contact;

    const p2:PersonInfo = {
        name:"해골",
        age:25,
        phone:"011",
        email:"bbb@"
    }
    
    type NumOrStr = number | string; //숫자또는문자타입
    const data1:NumOrStr=10;
    const data2:NumOrStr="kim"

    console.log(data1+data2)
    return (
        <div>
            
        </div>
    );
}

export default App4;