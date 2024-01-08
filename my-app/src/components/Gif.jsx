import React from 'react'
import { getGif } from '../helpers/Api';

export const Gif = (props) => {

    const {category}=props;

    //Aqui va el componente de la API
    getGif(category);

  return (
    <>
    <h3>{category}</h3>

    </>
  )
}
