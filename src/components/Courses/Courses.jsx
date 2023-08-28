import React from 'react';
import { useState } from 'react';
import CourseCard from './CourseCard/CourseCard';
import * as constants from '../../constants';
export function updateCourses(searchedCourses) {
	setCourses(searchedCourses);
}
function Courses() {
	const [courses, setCourses] = useState(getCourses());
	return (
		<div>
			{courses.map((course, index) => (
				<CourseCard course={courses[index]} key={index} />
			))}
		</div>
	);
}
export default Courses;
export function getCourses(searchInput = '') {
	let courses = [];
	constants.mockedCoursesList.forEach((course) => {
		let authorNames = [];
		course.authors.forEach((authorId) => {
			const authorName = constants.mockedAuthorsList.find(
				(author) => author.id === authorId
			);
			authorNames.push(authorName.name);
		});
		let courseCopy = { ...course };
		courseCopy.authors = authorNames;
		if (
			(searchInput &&
				(course.title.includes(searchInput) ||
					course.id.includes(searchInput))) ||
			!searchInput
		) {
			courses.push(courseCopy);
		}
	});
	console.log(courses);
	return courses;
}
