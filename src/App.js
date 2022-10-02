import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

const URL = 'https://todolist-9f747-default-rtdb.europe-west1.firebasedatabase.app/todo.json'


function App() {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		const res = await fetch(URL);
		const response = await res.json();

		let todoArr = []
		for(const key in response){
			todoArr.push({
				id: key,
				name: response[key].name
			})
		}
		setTodos(todoArr)
	};

	const postTodo = async (data) => {
		await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		});
		getTodos()
	};
	const takedownTodo = async (data) => {
		await fetch(`https://todolist-9f747-default-rtdb.europe-west1.firebasedatabase.app/todo/${data}.json`, {
			method: 'DELETE'
		});
		getTodos()
	};

	useEffect(() => {
		getTodos()
	}, []);


	const addTodo = async (text) => {
		// setTodos(() => [...todos, text]);
		postTodo(text)
	};

	const removeTodo = (id) => {
		const todoToDelete = todos.find((el) => el.id === id);
		takedownTodo(todoToDelete.id)
	};

	return (
		<TodoList onAddTodo={addTodo} onRemoveTodo={removeTodo} todos={todos} />
	);
}

export default App;
