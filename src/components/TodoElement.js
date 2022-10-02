import React from 'react';
import classes from './TodoElement.module.css'

const TodoElement = (props) => {
    const removeTodo = () => {
        props.onRemoveTodo(props.id)
    }

	return (
		<div className={classes.body}>
			<p>{props.text}</p>
            <button onClick={removeTodo} className={classes.removeBtn}>-</button>
		</div>
	);
};

export default TodoElement;
