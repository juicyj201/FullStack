import Input from './Input'

const Filter = ({searchName, filterPersonByName}) => {
    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <Input text="Filter shown with" value={searchName} handleChange={filterPersonByName} />
        </div>
      </>
    )
  }

export default Filter