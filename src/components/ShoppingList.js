const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

  /* const numbers = [1, 2, 3, 4]
   const doubles = numbers.map(x => x * 2) // [2, 4, 6, 8] */
   
   function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul> 
    )
}

export default ShoppingList