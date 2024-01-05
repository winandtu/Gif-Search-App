import React from 'react'
import { useState } from 'react'


export const GifApp = () => {

  const [categories, setCategories] = useState(['One punch man', 'Dragon Ball'])

  //Función para agregar categoria

  const addCategorie = ()=>{
    
    const newCategorie='Naruto';
    setCategories([newCategorie, ...categories ]) //hace una copia de las categorias anteriores y agrega una nueva
    //Segunda forma
    //setCategories(cat =>[...cat, newCategorie])
    console.log('Se ha agregado algo')
    
    
  }

  //console.log(categories)
  return (
    <>
    <h1>GifApp</h1>

    {/**Agregar categorias por medio de un botón */}

    <button onClick={addCategorie}>Agregar Categoria</button>

    {/**Lista de las categorias */}
    <ol>
      {categories.map(category=>{
        return <li key={category}>{category}</li>
      })}
    </ol>
    </>
  )
}
