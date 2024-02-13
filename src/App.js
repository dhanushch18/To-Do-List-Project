
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState('');

  const handleCancel = (taskId) => {
    setTodos((prevTodos) => prevTodos.filter((obj) => obj.id !== taskId));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Tuesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos((prevTodos) => [
              ...prevTodos,
              { id: Date.now(), text: toDo, status: false },
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setTodos((prevTodos) =>
                    prevTodos.map((obj2) =>
                      obj2.id === obj.id
                        ? { ...obj2, status: e.target.checked }
                        : obj2
                    )
                  );
                }}
                value={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => handleCancel(obj.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
