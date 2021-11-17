const API_URL = `https://api.giphy.com/v1/gifs/search`;
const API_KEY = `6ijpJmhvX9OshRF2lAHuBYHojzB9bZjX`;

export const getGifts = async( category ) => {
    const urlQuery = `${API_URL}?q=${ encodeURI(category) }&limit=10&api_key=${API_KEY}`
    const resp = await fetch( urlQuery);
    const { data } = await resp.json();
    
    const giftItem = data.map( gif => {
        return { 
            id: gif.id,
            title: gif.title,
            url:  gif.images?.downsized_medium.url
        }
    })
    return giftItem;
}