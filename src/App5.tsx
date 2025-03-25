
function App5() {

    interface Member{
        //, 안 써도 됨
        readonly num:number
        name:string
        isMan:boolean
    }

    const m1:Member = {
        num:1,
        name:"김구라",
        isMan:true
    }

    m1.name="원숭이";
    m1.isMan=false;
    //m1.num=2; //readOnly여서 이건 안 된다 테스트테스트 
    
    return (
        <div>
            
        </div>
    );
}

export default App5;