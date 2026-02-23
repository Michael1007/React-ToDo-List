/* This pulls in a tool called useState from the React library. 
useState is what lets your app "remember" information, like the 
list of todos or what the user has typed. In React, these pieces of 
emembered information are called state. */
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]); //This line creates a piece of state called "todos" and a function to update it called "setTodos". The useState([]) part initializes "todos" as an empty array, which will hold our list of tasks.
  const [input, setInput] = useState(''); //This line creates another piece of state called "input" and a function to update it called "setInput". The useState('') part initializes "input" as an empty string, which will hold the current text in the input box.

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, {text: input, completed: false}]); //...todos is a spread operator: copies all existing todos into a new array, then adds the new input as an object at the end.
    setInput(''); // clears text box by resetting the input state back to empty string.
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); //filters out the todo at the specified index, creating a new array without it.
  };

  const toggleComplete = (index) => {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isChecked: !todo.isChecked }; // flip completed value of matching todo
      }
      return todo;
    }));
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

      {/* The following renders our list. UL stands for Unordered list */}
      <ul style={{ listStyleType: 'none', padding: 0 }}> {/* This removes the default bullet points and padding from the list */}
        
        {todos.map((todo, index) => ( //this line loops over every item in the todos array and turns each one into an "li" (list item) element
          //omething Reach needs when rendering lists, helps react keep track of which item is which
          <li key={index}>

            <input
              type="checkbox"
              checked={todo.isChecked} // ties checkbox to isChecked state
              onChange={() => toggleComplete(index)} // calls toggleComplete function when checkbox is clicked, passing the index of the current todo item
            />

            <span style={{ marginLeft: '8px' }}>{todo.text}</span> {/* This displays the text of the todo item, with some space to the left of the checkbox */}
            <button style={{marginLeft: '8px'}} onClick={() => deleteTodo(index)}>Delete</button>

          </li> 
          //The {todo} part displays the text of each "todo" item
        ))}

      </ul>
    </div>
  );
}

export default App; //Makes App component available to the rest of the project. File "index.js" imports App and puts it on the page.