import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { Gif } from './components/Gif'


export const GifApp = () => {

  const [categories, setCategories] = useState(['One punch man'])

  //Función para agregar categoria

  const addCategorie = (newCategorie)=>{

    //Para que se pueda hacer busquedas de la misma categoria
    if(categories.includes(newCategorie)){ //Si la categoria existe, no haga nada. Y si no existe la inserta.
      return;
    }
    
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
      
      {categories.map(category=>{
        return <Gif key={category} category={category}/>
      })}
    
    </>
  )
}
