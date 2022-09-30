import { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

const ToDoContainer = () => {
	const [items, setItems] = useState([]);

	const addItem = (newValue) => {
		setItems((previousValue) => [...previousValue, newValue]);
	};

	const deleteItem = (id) => {
		setItems((previousValue) => {
			return previousValue.filter((item, index) => index !== id);
		});
		console.log(id);
	};

	return (
		<div className="container">
			<h3>
				<span>To-Do List</span>
			</h3>
			<InputArea onAdd={addItem} />
			<ul className="list">
				{items.map((item, index) => (
					<ToDoItem
						key={index}
						id={index}
						text={item}
						onChecked={deleteItem}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoContainer;
