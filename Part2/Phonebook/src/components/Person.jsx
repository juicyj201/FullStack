const Person = ({namesToShow}) => {
    return (
      <>
        <h2>Numbers</h2>
        <ul>
          {namesToShow.map((person) => 
            <p key={person.id}>{person.name} {person.number}</p>
          )}
        </ul>
      </>
    )
  }

export default Person