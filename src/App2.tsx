
function App2() {
    /*
        [ any type ]
        - java의 object와 비슷한 type
        - any type을 남발하면 typescript의 장점이 사라진다.
        - 경우에 따라 사용 못하도록 설정 할 수도 있다.
    */
    let anything : any;

    anything=10;

    anything="kim";
    
    anything=true;

    /*
        function type 
     */
     
    function sum(num1:number, num2:number):number{
        return num1+num2;
    }
    //result 는 number type으로 추론(infer) 된다.
    const result = sum(10, 20);

    //리턴해주는 값이 없으면 void이다.
    function printMsg(msg:string):void{
        console.log(msg);
    }

    //return type을 명시 하지 않으면 return type도 추론(infer)된다.
    function getMsg(){
        return "hello";
    }
    //result2는 string type으로 infer되기 때문에
    const result2=getMsg();
    //result2=10; //다른 type 대입 불가


    //이름이 없는 함수 만들어서 대입 = f1은 무슨 타입일까?
    const f1 = function(){};
    
    const f2:()=> void = function(){};
    
    const f3:(a:number)=>void = function(num1:number){
        console.log(num1);
    };
    f3(10);
    //함수를 화살표 함수로 정의의
    const f4:(a:number, b:string)=>object = (id:number, name:string)=>{
        return {id, name};
    }
    const result3:object = f4(1, "김구라");
    
    console.log(result3);

    return (
        <div>
            
        </div>
    );
}

export default App2;