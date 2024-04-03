// Exercice 5 : 7 minutes
// Exercice 6 : 13 minutes
// Exercice 7 : 4 minutes

import { useState } from 'react';

const Todos = ({ todos }) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i}>{todo}</li>
    ))}
  </ul>
);

const TodoForm = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = e.target.todo.value;

    addTodo(todo);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add</button>
    </form>
  );
};

const useCounter = (defaultValue) => {
  const [count, setCount] = useState(defaultValue);

  const increment = () => setCount((p) => p + 1);

  return { count, increment };
};

const Counter = () => {
  const { count, increment } = useCounter(0);
  return <button onClick={increment}>{count}</button>;
};

const Username = ({ username, setUsername }) => {
  return (
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  );
};

const FavoriteAnimal = ({ favoriteAnimal, setFavoriteAnimal }) => {
  return (
    <input
      type="text"
      value={favoriteAnimal}
      onChange={(e) => setFavoriteAnimal(e.target.value)}
    />
  );
};

const Greeting = ({ favoriteAnimal, username }) => {
  return (
    <p>
      <b>{username}</b>'s favorite animal is <b>{favoriteAnimal}</b>
    </p>
  );
};

const UserAnimalForm = () => {
  const [username, setUsername] = useState('');

  const [favoriteAnimal, setFavoriteAnimal] = useState('Dog');
  return (
    <div className="vertical-stack">
      <h2>Animal !</h2>
      <div>
        <span>Favorite Animal</span>
        <FavoriteAnimal
          favoriteAnimal={favoriteAnimal}
          setFavoriteAnimal={setFavoriteAnimal}
        />
      </div>
      <div>
        <span>Username</span>
        <Username username={username} setUsername={setUsername} />
      </div>
      <Greeting username={username} favoriteAnimal={favoriteAnimal} />
    </div>
  );
};

const useToDo = (defaultToDos = []) => {
  const [todos, setTodos] = useState(defaultToDos);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos((current) => {
      current.splice(index, 1);
      return [...current];
    });
  };

  return { todos, addTodo, deleteTodo };
};

const TodoList = () => {
  const { todos, addTodo } = useToDo(['Learn React', 'Learn React Hooks']);

  return (
    <>
      <h2>TodoApp</h2>
      <Todos todos={todos} />
      <TodoForm addTodo={addTodo} />
    </>
  );
};

const App = () => {
  return (
    <div>
      <TodoList />
      <h2>Counter</h2>
      <Counter />
      <UserAnimalForm />
    </div>
  );
};

export default App;
