const App = () => {
  const course = 'Half Stack application development'
  const courses = [
    {name: 'Fundamentals of React', excercise: 10 },
    {name: 'Using props to pass data', excercise: 7},
    {name: 'State of a component', excercise: 14}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content courses={courses}/>
      <Total courses={courses}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>Hello {props.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>  
      <p>
        {props.courses[0].name} {props.courses[0].excercise}
      </p>
      <p>
      {props.courses[1].name} {props.courses[1].excercise}
      </p>
      <p>
      {props.courses[2].name} {props.courses[2].excercise}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.courses[0].excercise + props.courses[1].excercise  + props.courses[2].excercise }</p>
    </>
  )
}

export default App
