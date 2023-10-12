const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content course1={part1} course2={part2} course3={part3} />
      <Total excercise1={part1} excercise2={part2} excercise3={part3} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>Hello {props.course}</h1>
    </>
  )
}

const Content = (course) => {
  console.log(course)
  return (
    <>  
      <Part name={course.course1.name} excercises={course.course1.excercises} />
      <Part name={course.course2.name} excercises={course.course1.excercises} />
      <Part name={course.course3.name} excercises={course.course3.excercises} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.excercises}
      </p>
    </>
  )
}

const Total = (excercise) => {
  const ex1 = excercise.excercise1.exercises
  const ex2 = excercise.excercise2.exercises
  const ex3 = excercise.excercise3.exercises

  return (
    <>
      <p>Number of exercises {ex1 + ex2  + ex3 }</p>
    </>
  )
}

export default App
