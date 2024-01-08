import React from 'react'
import { useState } from 'react'

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('One Punch Man') //creo estado para usar los inputs
    const {onNewCategory} = props;

    //Cambiar el valor del input
    const changeValue = e =>{
        e.preventDefault();

        setInputValue(e.target.value) //seteo el valor del input
        //console.log(e.target.value); //Nos da el valor de lo que introducimos a la caja de text.
    }

    //Actualizo formulario cada vez que se introduce categorias

    //Actualizar form con las nuevas categorias
    const actualizarForm = e =>{
        e.preventDefault();
        console.log(inputValue)

        //Hago la validación de si lo escrito es menor o igual a un caracter, salga de la función

        if(inputValue.trim().length<=1) return;

        //Hago copia de las categorias y agrego la nueva

        onNewCategory(inputValue.trim())

        //Limpio la caja de texto

        setInputValue('');
    }

  return (
    <>
    <h4>Añadir Categoria</h4>

    <form onSubmit={(e)=> actualizarForm(e)}>
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
