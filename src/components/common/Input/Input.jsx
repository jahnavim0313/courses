import React from 'react';
import { getCourses, updateCourses } from '../../Courses/Courses';

function Input(props) {
	const searchInput = React.useRef();
	function handleClick() {
		const courses = getCourses(searchInput.current.value);
		updateCourses(courses);
	}
	return (
		<div>
			<div>
				<label>{props.labelText}</label>
				<input ref={searchInput} type='text' />
			</div>
			<div>
				<button onClick={handleClick}>Search </button>
			</div>
		</div>
	);
}
export default Input;
