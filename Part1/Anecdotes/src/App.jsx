import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [text, setText] = useState(anecdotes[selected])
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  var copy = [...votes]

  const handleClick = () => {
    const rand = Math.floor(Math.random()*8)
    setSelected(rand)  
    setText(anecdotes[rand])
  }

  const handleVote = (text) => { 
    const index = anecdotes.indexOf(text)
    copy[index] += 1
    setVotes(copy)
  }

  return (
    <div>
      <AnecdoteOfTheDay votes={votes} anecdotes={anecdotes} text={text}/>
      <ButtonClick handleClick={() => handleVote(text)} btnText="Vote"/>
      <ButtonClick handleClick={handleClick} btnText="Next Anecdote"/>
      <br/>
      <MostVotes copy={copy} anecdotes={anecdotes}/>
    </div>
  )
}

const ButtonClick = ({handleClick, btnText}) => <><button onClick={handleClick}>{btnText}</button></>

const AnecdoteOfTheDay = ({votes, anecdotes, text}) => {
  return(
    <>
      <h1>Anecdote of the day</h1>
      <p>{text}</p>
      <p>Has {(votes[anecdotes.indexOf(text)])} votes</p>
    </>
  )
}

const MostVotes = ({copy, anecdotes}) => {
  const mostVotes = Math.max(...copy)

  return(
    <>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[copy.indexOf(mostVotes)]}</p>
    </>
  )
}

export default App