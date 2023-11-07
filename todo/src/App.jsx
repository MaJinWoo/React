import {useState} from "react";
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([
      {
        id : 1,
        title : '제목1',
        content : '내용1',
        isDone : false,
      },
      {
        id : 2,
        title : '제목2',
        content : '내용2',
        isDone : true,
      },
    ]);
  
  const addTodo = function(){
      const newTodo={
        id:(todo.length+1),
        title,
        content,
        isDone:false,
      }
      setTodo([...todo, newTodo]);
      setTitle('');
      setContent('');
    
  };
  const todoList = todo.filter((todo)=>{
    return todo.isDone === false;
  });
  const completeList = todo.filter((todo)=>{
    return todo.isDone === true;
  })


  const changeStatus=function(id){
    const changeStatus = todo.map((item)=>{
      if(item.id===id){
        return{
          ...item, 
          isDone : !item.isDone,
        }
      }else{
        return item;
      }
    });
    setTodo(changeStatus);
  }


  const deleteTodo = function(id){
    const deletedTodo = todo.filter((item)=>{
      return item.id !== id;
    })
    setTodo(deletedTodo);
  }
  return (
    <div>
      <header>ToDo List</header>
      <main>
      <div>
            <input value = {title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
            <input value = {content} onChange={(e)=>{
                    setContent(e.target.value);
                }}/>
            <button onClick={addTodo}>입력</button>
        </div>
        <div>
          <h2>할 일</h2>
          {todoList.map((todo)=>{
            return (
              <div key = {todo.id}>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.content}</p>
              <button onClick={(e)=>{changeStatus(todo.id,e)}}>완료</button>
              <button onClick={(e)=>{deleteTodo(todo.id,e)}}>삭제</button>
              </div>
            );
          })}
        </div>
        <div>
          <h2>완료된 일</h2>
          {completeList.map((todo)=>{
            return (
              <div key = {todo.id}>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.content}</p>
              <button onClick={(e)=>{changeStatus(todo.id,e)}}>취소</button>
              <button onClick={(e)=>deleteTodo(todo.id, e)}>삭제</button>
              </div>
            );
          })}
        </div>
      </main>
      <footer>푸터</footer>
    </div>
  );

        }
export default App;
