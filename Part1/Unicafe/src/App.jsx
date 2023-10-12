import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => { 
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(all + 1)
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
  const avg = ((1*good)+(0*neutral)+(-1*bad))/all
  const positive = (good/all*100)

  if (all === 0) {
    return(
      <>
        <h1>Statistics</h1>
        <p>No feedback has been given</p>
      </>
    ) 
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <StatisticsLine text="Good" value={good}/>
        <StatisticsLine text="Neutral" value={neutral}/>
        <StatisticsLine text="Bad" value={bad}/>
        <StatisticsLine text="All" value={all}/>
        <StatisticsLine text="Average" value={avg}/>
        <StatisticsLine text="Positive" value={positive}/>
      </>
    )
  }
}

const StatisticsLine = ({text, value}) => {
  if(text === "Positive"){
    return(
      <div>
        <p>{text}: {value}%</p>
      </div>
    )
  }
  else{
    return(
      <div>
        <p>{text}: {value}</p>
      </div>
    )
  }
}

export default App