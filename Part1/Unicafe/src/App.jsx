import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAverage] = useState(0)

  const handleGoodClick = () => { 
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(all + updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(all + updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(all + updatedBad)
  }

  const Average = () => {
    
  }

  return (
    <div>
      <GiveFeedback handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
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

const Statistics = ({good, neutral, bad, all}) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {avg}</p>
      <p>Positive: {positive}</p>
    </>
  )
}

export default App