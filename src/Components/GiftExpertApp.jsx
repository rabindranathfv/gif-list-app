import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { ListGift } from './ListGift';

const sample = [{ id: 1, name: 'axie'}, { id:2, name: 'nft'}]

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(sample);

    return (
        <div>
            <h2> GifExpertAPP </h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ListGift gifts={categories} />
        </div>
    )
}

export default GiftExpertApp
