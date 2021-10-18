import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types';

import { GiftItem } from './GiftItem';

const API_URL = `https://api.giphy.com/v1/gifs/search`;
const API_KEY = `6ijpJmhvX9OshRF2lAHuBYHojzB9bZjX`;

export const GiftGrid = props => {

    const { category } = props;
    let searchResults = false;
    const [gifts, setGifts] = useState([]);

    console.log('Category', encodeURI(category));
    const getGifts = async() => {
        if ( !category) {
            searchResults = !searchResults;
        }
        const urlQuery = `${API_URL}?q=${ encodeURI(category) }&limit=10&api_key=${API_KEY}`
        console.log('query for API', urlQuery);
        const resp = await fetch( urlQuery);
        const { data } = await resp.json();
        
        const giftItem = data.map( gif => {
            return { 
                id: gif.id,
                title: gif.title,
                url:  gif.images?.downsized_medium.url
            }
        })
        setGifts( giftItem);
    }

    useEffect(() => {
        getGifts();
    }, []);

    return (
        <div className='grid-gift'>
            {
                category && gifts.map( (gif) => {
                    return <GiftItem gift={gif} /> 
                })
            }
        </div>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.shape({
        id: string,
        title: string,
        url: string
      }).isRequired,
}
