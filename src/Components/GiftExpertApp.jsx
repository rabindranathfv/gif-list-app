import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

const GiftExpertApp = () => {

    const [category, setCategory] = useState(['dragon ball']);

    return (
        <div>
            <h2> GifExpertAPP </h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            <GiftGrid key={category} category={category}  />
        </div>
    )
}

export default GiftExpertApp
