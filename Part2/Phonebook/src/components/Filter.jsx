import Input from './Input'

const Filter = ({searchName, filterPersonByName}) => {
    return (
      <>
        <h1 className='heading'>Phonebook</h1>
        <div>
          <Input text="Filter shown with" value={searchName} handleChange={filterPersonByName} />
        </div>
      </>
    )
  }

export default Filter