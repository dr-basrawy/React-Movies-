import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 1; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }
  return initialTodos;
}

export default function TodoList() {
  console.log(useState(createInitialTodos))
  const [todos, setTodos] = useState(createInitialTodos);
  console.log([setTodos])
  const [text, setText] = useState('');
  const handleDeleteTodo = (id) => {
    const deleteTodos = todos.filter(todo => todo.id !== id);
    setTodos(deleteTodos);
  };

  return (
    <>
    <div style={{background:"blue",textAlign:"center"}} className=''>

      <input style={{border: "1px solid red",width:"50%",display:"inline-block"}}
        value={text}
        onChange={e => setText(e.target.value)}
        />
      <Button variant="primary" size="lg" active style={{display:"inline-block"}}
      onClick={() => {
          setText('');
          setTodos([{
              id: todos.length,
              text: text
            }, ...todos]);
        }}>Add</Button>
      <ul>
        {todos.map(item => (
            <li key={item.id} style={{listStyle:"none",color:"white"}}>
            {item.text}
            <Button variant="outline-danger"  onClick={() => handleDeleteTodo(item.id)} style={{background:"red",marginTop:"-20px" }}>Delete</Button>

          </li>
        ))}
      </ul>
        </div>
    </>
  );
}
