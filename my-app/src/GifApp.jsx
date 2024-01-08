import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'


export const GifApp = () => {

  const [categories, setCategories] = useState(['One punch man', 'Dragon Ball'])

  //Función para agregar categoria

  const addCategorie = (newCategorie)=>{
    
    //const newCategorie='Naruto';
    setCategories([newCategorie, ...categories ]) //hace una copia de las categorias anteriores y agrega una nueva
    //Segunda forma
    //setCategories(cat =>[...cat, newCategorie])
    console.log(newCategorie)
    
    
  }

  //console.log(categories)
  return (
    <>
    <h1>GifApp</h1>

    {/**Input */}
    <AddCategory 
    
    //setCategories={setCategories} /> //forma 1
    onNewCategory={addCategorie}/>
    {/**Agregar categorias por medio de un botón */}


    {/**Lista de las categorias */}
      <ol>
      {categories.map(category=>{
        return <li key={category}>{category}</li>
      })}
    </ol>
    </>
  )
}
