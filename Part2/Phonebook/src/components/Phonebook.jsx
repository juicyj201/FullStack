import { useState, useEffect, useCallback } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Person from './Person'
import service from '../services/phonebook'
import SuccessNotification from './SuccessNotification'
import ErrorNotification from './ErrorNotification'

const Phonebook = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState(persons)
  const [searchName, setSearchName] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [successful, setSuccessful] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState(false)

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

    //if person exists, update the phone number
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
            setSuccessful(true)
            setSuccessMessage(`Updated ${newName}`)
            setTimeout(() => {
              setSuccessMessage('')
              setSuccessful(false)
            }, 3000)

            const r = [...persons]
            r[newPersonObject.id-1] = newPersonObject
            setPersons(r) 
            setFilterNames(r)
            reset()
          })
      } else {
        setErrorMessage(`Did not update ${newName}`)
        setError(true)
        setTimeout(() => {
          setErrorMessage('')
          setError(false)
        }, 3000)
        reset()
      }
    }
    //else if the person does not yet exist, create a new entry
    else{
      service
        .addPerson(personObject)
        .then(returnedPerson => {
            setSuccessMessage(`Added ${newName} to server`)
            setSuccessful(true)
            setTimeout(() => {
              setSuccessMessage('')
              setSuccessful(false)
            }, 3000)

          const updatedPersons = persons.concat(returnedPerson)
          setPersons(updatedPersons)
          setFilterNames(updatedPersons)
          reset()
      })
      .catch(error => {
        setErrorMessage(`Did not add ${newName} to server`)
        setError(true)
        setTimeout(() => {
          setErrorMessage('')
          setError(false)
        }, 3000)
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
            setSuccessMessage(`Deleted ${personObject.name} from the server`)
            setSuccessful(true)
            setTimeout(() => {
              setSuccessMessage('')
              setSuccessful(false)
            }, 3000)

          const updatedPersons = persons.filter(r => r.id !== personObject[0].id)
          setPersons(updatedPersons)
          setFilterNames(updatedPersons)
          reset()
        })
        .catch(error => {
          setErrorMessage(`${personObject.name} was already removed from the server`)
          setError(true)
          setTimeout(() => {
            setErrorMessage('')
            setError(false)
          }, 3000)
          reset()
        })
    }
  }

  return (
    <div>
      <Filter searchName={searchName} filterPersonByName={filterPersonByName}/>
      { successful ? 
        (<SuccessNotification message={successMessage}/>) : (<></>)
      } 
      { error ? 
        (<ErrorNotification message={errorMessage}/>) : (<></>)
      } 
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <Person namesToShow={filterNames} deleteBtn={(id) => deleteBtn({id})}/>
    </div>
  )
}

export default Phonebook