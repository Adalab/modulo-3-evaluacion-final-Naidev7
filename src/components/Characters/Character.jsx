

function Character( { allData } ) {
  return (
    <div>
      <img src={allData.image} alt={allData.name} />
      <h4>{allData.name}</h4>
      <h5>{allData.species}</h5>
    </div>
  )
}

export default Character