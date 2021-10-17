import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

const sample = [{ id: '1', name: 'axie'}, { id: '2', name: 'nft'}]

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(sample);

    return (
        <div>
            <h2> GifExpertAPP </h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <GiftGrid category={''} searchCategory={'dragon ball'} />
        </div>
    )
}

export default GiftExpertApp
