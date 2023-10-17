const Course = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

    //use of an empty array instead of returning the object directly, since forEach returns null
    const result = []
  
    courses.forEach((course, index) => {
      const init = course.parts[0].exercises
      const sum = course.parts.reduce((one, val) => one + val.exercises, init)
  
      result.push(
        <div key={index}>
          <Header course={course.name}/>
          <Content parts={course.parts} />
          <Total sum={sum}/>
        </div>
      )}
    )
  
    return result
}
  
const Header = ({ course }) => <h2>{course}</h2>
  
const Total = ({ sum }) => <p><b>Total of {sum} exercises</b></p>
  
const Content = ({parts}) => {
    //use of an empty array instead of returning the object directly, since forEach returns null
    const result = []
  
    parts.forEach((part, index) => {
      result.push(
        <div key={index}>
           <Part part={part} />
        </div>
      )}
    )
  
    return result
}
  
const Part = ({part}) => {
    return (<p>
      {part.name} {part.exercises}
    </p>
    )
}
  
export default Course
  