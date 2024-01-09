import React from 'react'
import { getGif } from '../helpers/Api';
import { useEffect } from 'react';
import { useState } from 'react';

export const Gif = (props) => {

    const { category } = props;

    //Estado para obtener las imgs
    const [images, setImages] = useState([])

    //Hago una función que me retorne las imagenes

    const getImages = async () => {

        const newImage = await getGif(category); //Obtengo la respuesta
        setImages(newImage); //Actualizo las imagenes

    }
    //Aqui va el componente de la API
    // Realizar la solicitud HTTP cuando el componente se monta

    useEffect(() => {
        getImages(); //LLamo la función
    }, [])




    return (
        <>
            <h3>{category}</h3>
            <ol>
                {/**Titulos de las imagenes */}
                {images.map(({id, title}) => {
                    return <li key={id}>

                        {title}
                    </li>
                })}
            </ol>

        </>
    )
}
