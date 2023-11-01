import {useState} from "react";
import './App.css';

function App() {
  const initialState = ['apple','banana','cherry','date','elderberry'];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value

  const style = {
    'textAlign':'center',
  }
  const arrayStyle = {
    'border':'1px solid black',
    'margin':'10px',
    'padding':'15px'
  }
  const handleForEach = function(){
    let temp = "";
    array.forEach(function(item, index){
      temp += `${index}:${item}, `
    });
    setResult(temp);
  };

  const handleFilter = function(){
    const filtered = array.filter(function(item, index){
      // includes
      // if(item.includes(query)){
      //   return true;
      // }else{
      //   return false;
      // }
      return item.includes(query);
    })
    setResult(filtered.join(", "));
  };

  const handleMap = function(){
    const mapped = array.map((item,index)=>
      item.toUpperCase()
    );
    setResult(mapped.join(", "));
  }

  const handleReduce = function(){
    const reduced = array.reduce(function(acc,cur){
      return `${acc} + ${cur}`;
    })
    setResult(reduced);
  }

  const handlePush = function(){
    if(query.length <= 0){
      alert("추가하려는 값을 입력해주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  }

  const handlePop = function(){
    const popArr = [...array];
    popArr.pop();
    setArray(popArr);
    setResult(popArr.join(", "));
  }

  const handleSlice = function(){
    const slicedArr = array.slice(1,4);
    setResult(slicedArr.join(", "))
  }

  const handleSplice = function(){
    const splicedArr = [...array];
    splicedArr.splice(2,2,'kiwi','lime');
    setResult(splicedArr.join(', '));
  }

  const handleIndexOf = function(){
    const indexArr = array.findIndex((value)=>value===query);
    setResult(indexArr);
  }

  const handleIncludes = function(){
    const isInclude = array.includes(query);
    setResult(`${isInclude}`);
  }

  const handleFind = function(){
    const found = array.find((value)=>value.includes(query));
    setResult(found);
  }

  // 각 요소가 input의 value(query)를 포함하고 있는 경우 true를 리턴
  const handleSome = function(){
    const some = array.find((value)=>value.includes(query));
    if(some !== undefined){
      setResult("true");
    }else{
      setResult("false");
    }
  }
  
  // 각 요소가 모두 2글자 이상의 길이를 가진 경우 true를 리턴
  const handleEvery = function(){
    let result = "";
    array.forEach(function(item){
      if(item.length>=2){
        result = "true"
      }else{
        result = "false";
      }
      return result;
    })
    console.log(result);
    setResult(result);
  }

  const handleSort = function(){
    const sortedArr = array.sort();
    setResult(sortedArr.join(', '));
  }

  const handleJoin = function(){
    const joinedArr = array;
    setResult(joinedArr.join(', '));
  }

  return (
    <div style={style}>
      <h1>Standard반 배열 API 테스트 by Jinwoo Ma</h1>
      <input style={{
       'margin':'5px',
      }}value = {query} onChange={function(e){
        setQuery(e.target.value);
      }}/>
      <div>
        <button onClick = {handleForEach}>forEach</button>
        <button onClick = {handleFilter}>filter</button>
        <button onClick = {handleMap}>map</button>
        <button onClick = {handleReduce}>reduce</button>
        <button onClick = {handlePush}>push</button>
        <button onClick = {handlePop}>pop</button>
        <button onClick = {handleSlice}>slice</button>
        <button onClick = {handleSplice}>splice</button>
        <button onClick = {handleIndexOf}>indexOf</button>
        <button onClick = {handleIncludes}>includes</button>
        <button onClick = {handleFind}>find</button>
        <button onClick = {handleSome}>some</button>
        <button onClick = {handleEvery}>every</button>
        <button onClick = {handleSort}>sort</button>
        <button onClick = {handleJoin}>join</button>
      </div>
      <div style={arrayStyle}>
        <strong>원본배열 :</strong> {array.join(", ")}
      </div>
      <div style={arrayStyle}>
        <strong>결과물 :</strong> {result}
      </div>
    </div>
  );
}

export default App;
