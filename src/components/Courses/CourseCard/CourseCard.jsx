import React from 'react';
import './CourseCard.css';
function CourseCard(props) {
	return (
		<div className='courseCard'>
			<div className='div1'>
				<h2>{props.course.title}</h2>
				<p className='desc'>{props.course.description}</p>
			</div>
			<div className='div2'>
				<p>Authors: {props.course.authors.join(', ')}</p>
				<p>
					Duration:
					{
						<span>
							{Math.floor(props.course.duration / 60)}:
							{props.course.duration % 60}
						</span>
					}
				</p>
				<p>Created: {props.course.creationDate}</p>
				<button>Show Course </button>
			</div>
		</div>
	);
}
export default CourseCard;
