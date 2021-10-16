import React from 'react';
import { ListGift } from './ListGift';

const sample = [{ id: 1, name: 'axie'}, { id:2, name: 'nft'}]

const GiftExpertApp = () => {
    return (
        <div>
            <h2> GifExpertAPP </h2>
            <hr />
            <ListGift gifts={sample}/>
        </div>
    )
}

export default GiftExpertApp
