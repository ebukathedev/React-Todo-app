import { useState } from "react";

const InputArea = (props) => {
	const [inputText, setInputText] = useState("");

	const handleChange = (e) => {
		const newValue = e.target.value;
		setInputText(newValue);
	};

	return (
		<div className="task-bar">
			<div className="input-wrapper">
				<input
					type="text"
					placeholder="Add a task"
					onChange={handleChange}
					value={inputText}
				/>
			</div>
			<div className="btn-wrapper">
				<button
					onClick={() => {
						props.onAdd(inputText);
						setInputText("");
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default InputArea;
