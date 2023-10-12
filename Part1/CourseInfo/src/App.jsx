const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content course={course.parts} />
      <Total excercise={course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>Hello {props.courseName}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>  
      <Part name={props.course[0].name} excercises={props.course[0].excercises} />
      <Part name={props.course[1].name} excercises={props.course[1].excercises} />
      <Part name={props.course[2].name} excercises={props.course[2].excercises} />
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

const Total = (props) => {
  const ex1 = props.excercise[0].exercises
  const ex2 = props.excercise[1].exercises
  const ex3 = props.excercise[2].exercises

  return (
    <>
      <p>Number of exercises {ex1 + ex2  + ex3 }</p>
    </>
  )
}

export default App
