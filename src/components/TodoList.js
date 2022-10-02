import React, { useRef } from 'react';
import TodoElement from './TodoElement';
import todoList from './TodoList.module.css';

const TodoList = (props) => {
	const textRef = useRef(null);
	const removeTodo = (id) => {
		props.onRemoveTodo(id);
	};

	const addNewTodo = () => {
        if (textRef.current.value === '') {
            return
        }
		props.onAddTodo({ name: textRef.current.value, id: Math.random() });
        textRef.current.value = ''
	};

	return (
		<div className={todoList.body}>
			<div className={todoList.buttons}>
			<input
					id='new-todo'
					htmlFor='text'
					placeholder='Write here'
					ref={textRef}
				></input>
				<button id='new-todo' className={todoList.addBtn} onClick={addNewTodo}>
					Add new Todo
				</button>			
			</div>
			<div className={todoList.list}>
				{props.todos.map((el) => {
					return (
						<TodoElement
							onRemoveTodo={removeTodo}
							text={el.name}
							key={el.id}
							id={el.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TodoList;
