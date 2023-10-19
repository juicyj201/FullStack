import service from '../services/phonebook'

const Person = ({namesToShow, deleteBtn}) => {
  return (
    <>
      <h2 className='subheading'>Numbers</h2>
      <ul>
        {namesToShow.map((person) => 
          <p key={person.id}>{person.name} {person.number} <button onClick={() => deleteBtn(person.id)}>delete</button></p>
        )}
      </ul>
    </>
  )
}

export default Person