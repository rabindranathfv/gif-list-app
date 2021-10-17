import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types';

import { GiftItem } from './GiftItem';

const API_URL = `https://api.giphy.com/v1/gifs/search`;
const API_KEY = `6ijpJmhvX9OshRF2lAHuBYHojzB9bZjX`;

export const GiftGrid = props => {

    const { category, searchCategory } = props;

    const [gifts, setGifts] = useState([]);

    const getGifts = async() => {
        const urlQuery = `${API_URL}?q=${searchCategory}&limit=10&api_key=${API_KEY}`
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
        <div className='card-grid'>
            <ul>
            {
                gifts.map( (gif) => {
                    return <GiftItem gift={gif} /> 
                })
            }
            </ul>
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
