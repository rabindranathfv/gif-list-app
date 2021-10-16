import React from 'react'
import PropTypes, { number, string } from 'prop-types';

const API_URL = `https://api.giphy.com/v1/gifs/search`;
const API_KEY = `6ijpJmhvX9OshRF2lAHuBYHojzB9bZjX`;

export const GiftGrid = props => {
    const { category, searchCategory } = props;

    const getGifts = async() => {
        const urlQuery = `${API_URL}?q=${searchCategory}&limit=10&api_key=${API_KEY}`
        const resp = await fetch( urlQuery);
        const { data } = await resp.json();
        
        const giftItem = data.map( gif => {
            return { 
                id: gif.id,
                title: gif.title,
                url:  gif.images.downsized_medium.url
            }
        })
        console.log('fetch data', giftItem);

    }

    getGifts();
    return (
        <div>
            <ul>
                <li> {category.name} </li>
            </ul>
        </div>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.shape({
        id: number,
        name: string,
      }).isRequired,
}
