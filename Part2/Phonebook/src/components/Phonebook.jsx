import { useState, useEffect, useCallback } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Person from './Person'
import service from '../services/phonebook'

const Phonebook = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState(persons)
  const [searchName, setSearchName] = useState('')

  const refresh = () => {
    service
      .getAll()
      .then(personsList => {
        setPersons(personsList)
        setFilterNames(personsList)
      })
  }

  function reset () {
    setNewName('')
    setNewNumber('')
    useEffect(refresh, [])
  }

  useState(useEffect(refresh, []))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const exists = persons.some(person => person.name === newName)
    if(exists){
      const proceed = window.confirm(`${personObject.name} is already added to the phonebook, do you want to replace the old number with a new one?`)
      if(proceed){
        const oldPerson = persons.filter(person => person.name === newName)[0]
        const newPersonObject = {
          ...oldPerson,
          number: newNumber
        }

        service
          .updatePerson(newPersonObject.id, newPersonObject)
          .then(_ => {
            const r = [...persons]
            r[newPersonObject.id-1] = newPersonObject
            setPersons(r) 
            setFilterNames(r)
            reset()
          })
      } else {
        reset()
      }
    }
    else{
      service
        .addPerson(personObject)
        .then(returnedPerson => {
          const updatedPersons = persons.concat(returnedPerson)
          setPersons(updatedPersons)
          setFilterNames(updatedPersons)
          reset()
      })
    }
  }

  const filterPersonByName = (event) => {
    const val = event.target.value.toLowerCase()
    setSearchName(val)
    setFilterNames(persons.filter(person => person.name.toLowerCase().includes(val)))
  }

  const deleteBtn = ({id}) => {
    const personObject = persons.filter((person) => person.id === id)
    const proceed = window.confirm(`Delete ${personObject[0].name}?`)

    if(proceed){
      service
        .deletePerson(personObject[0].id)
        .then(_ => {
          const updatedPersons = persons.filter(r => r.id !== personObject[0].id)
          setPersons(updatedPersons)
          setFilterNames(updatedPersons)
          reset()
        })
    }
  }

  return (
    <div>
      <Filter searchName={searchName} filterPersonByName={filterPersonByName}/>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <Person namesToShow={filterNames} deleteBtn={(id) => deleteBtn({id})}/>
    </div>
  )
}

export default Phonebook