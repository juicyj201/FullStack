import Input from './Input'

const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return(
      <>
        <h2>Add New</h2>
        <form onSubmit={addPerson}>
          <Input text="Name" value={newName} handleChange={handleNameChange} />
          <Input text="Phone Number" value={newNumber} handleChange={handleNumberChange} />
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
  }

export default PersonForm