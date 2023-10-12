import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <GiveFeedback handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const GiveFeedback = ({handleGoodClick, handleNeutralClick, handleBadClick}) => { 
  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
    </> 
  )
}

const Button = ({handleClick, text}) => {
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  )
}

export default App