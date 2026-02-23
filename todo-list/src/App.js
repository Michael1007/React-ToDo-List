/* This pulls in a tool called useState from the React library. 
useState is what lets your app "remember" information, like the 
list of todos or what the user has typed. In React, these pieces of 
emembered information are called state. */
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]); //...todos is a spread operator: copies all existing todos into a new array, then adds the new input at the end.
    setInput(''); // clears text box by resetting the input state back to empty string.
  };

  return (
    <div>
      <h1>Todo List</h1> {/* Header element */}
      
      {/* The following is a text box: */}
      <input
        value={input} //ties box to the input state
        onChange={(e) => setInput(e.target.value)} //fires every single time the user types a character, where 'e' is the event and e.target.value is whatever is currently in the box
        placeholder="Add a task..."
      />

      <button onClick={addTodo}>Add</button> {/* button named "Add" calls function addTodo when clicked */}

      {/* The following renders our list: */}
      <ul>
        {todos.map((todo, index) => ( //this line loops over every item in the todos array and turns each one into an "li" (list item) element
          <li key={index}>{todo}</li> //something Reach needs when rendering lists, helps react keep track of which item is which
          //The {todo} part displays the text of each "todo" item
        ))}
      </ul>
    </div>
  );
}

export default App; //Makes App component available to the rest of the project. File "index.js" imports App and puts it on the page.