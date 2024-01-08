
export const getGif = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0bz6QQOEOVBs978qivaF7aguUB6cEMhY&q=${category}&limit=10`

    const resp = await fetch(url); //busqueda
    const {data} = await resp.json(); //Respuesta

    //Extraigo los datos que me interesan en un obj:

    const gifs= data.map(imagen =>({
        id: imagen.id,
        title: imagen.title,
        url: imagen.images.downsized_medium.url
    }))
   console.log(gifs)
   return gifs;
    //console.log(data);
}

