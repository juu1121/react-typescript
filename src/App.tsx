/*
  let 변수명 : type = 값;
*/

function App() {
  //숫자는 number type
  let num:number = 10;
  //문자는 string type
  let name:string = "kim";
  //논리는 boolean type
  let isMan:boolean = true; //타입을 선언하지 않으면 자동으로 타입이 추론된다. 

  /* 
    object type은 javascript의 기본 데이터 type을 제외한 모든 type을 담을 수 있다.
    기본 데이터 type : number, string, boolean, null, undefined 등 기본 data type이다.
  */

  let mem:object;
  // object type에 우리가 알고 있는 object를 대입할수있다.
  mem={numL1, name:"김구라", addr:"노량진"};

  let arr:object;
  //배열도 대입가능
  arr=[];

  let action:object;
  //함수도 대입 가능
  action = function(){};


  return (
    <div>
      <p> 번호 : <strong>{num}</strong></p>
      <p> 이름 : <strong>{name}</strong></p>
      <p> 성별 : {isMan ? <strong>남자</strong> : <strong>여자</strong>}</p>
    </div>
  )
}

export default App
