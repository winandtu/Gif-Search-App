import React from 'react'
import { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch Man') //creo estado para usar los inputs

    const changeValue = e =>{
        e.preventDefault();

        setInputValue(e.target.value) //seteo el valor del input
        console.log(e.target.value); //Nos da el valor de lo que introducimos a la caja de text.
    }

    //Actualizo formulario cada vez que se introduce categorias

    const actualizarForm = e =>{
        e.preventDefault();
    }

  return (
    <>
    <h4>AddCategory</h4>

    <form onSubmit={actualizarForm}>
        <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={changeValue}
        
        >
        </input>
    </form>
    </>
  )
}
