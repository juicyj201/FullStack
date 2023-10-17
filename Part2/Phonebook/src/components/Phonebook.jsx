import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Person from './Person'

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState(persons)
  const [searchName, setSearchName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const exists = persons.some(person => person.name !=! null)

    if(exists) {
      alert(`${newName} already exists within the Phonebook`)
      setNewName('')
      setNewNumber('')
      return
    } 

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filterPersonByName = (event) => {
    const val = event.target.value.toLowerCase()
    setSearchName(val)
    setFilterNames(persons.filter(person => person.name.toLowerCase().includes(val)))
  }

  return (
    <div>
      <Filter searchName={searchName} filterPersonByName={filterPersonByName}/>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <Person namesToShow={filterNames}/>
    </div>
  )
}

export default Phonebook