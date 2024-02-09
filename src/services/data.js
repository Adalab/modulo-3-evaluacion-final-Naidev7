function getDataAppi (value){
 return  fetch(`https://hp-api.onrender.com/api/characters/house/${value}`)
    .then((response)=> response.json())
    .then((data)=>{
        const dataResult = data.map((person)=>{
            return{
                name: person.name,
                id: person.id,
                gender: person.gender,
                image: person.image,
                species: person.species,
                alive: person.alive,
                house: person.house
            }
        })
        console.log(dataResult)
       return dataResult
    })
}
export default getDataAppi;



