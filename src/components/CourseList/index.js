import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title: title };
}

const CourseList = () => {
  const quant = 2;

  const courses = useSelector(
    state => state.data.slice(0, quant),
    [quant]
  );
  const dispatch = useDispatch(); 

  function addCourse() {
    dispatch(addCourseAction('GraphQL'));
  }

  return(
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>) }
      </ul>
      <button type='button' onClick={addCourse}>Adicionar curso</button>
    </>
  );
}

export default CourseList;