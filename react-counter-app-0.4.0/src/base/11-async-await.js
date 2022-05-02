export const getImagen = async() => {

    try {
        const apiKey = 'aCL1Z3KkL2mtx6gecOmkLXL0hode5B1T';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        
        return url;
    } catch (error) {
        return 'No existe';
    }
}




