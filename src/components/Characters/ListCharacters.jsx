import Character from "./Character"


function ListCharacters({allData}) {
  const renderCharacters = allData.map((item, i)=>{
    return <article key={i}>
      <Character allData={item} />
    </article>
  })

  return (
    <section>
      {renderCharacters}
    </section>
  )
}

export default ListCharacters