import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

const GiftExpertApp = () => {

    const [category, setCategory] = useState('');

    console.log('CATEGORY IN MAIN COMPONENT', category);

    return (
        <div>
            <h2> GifExpertAPP </h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            <GiftGrid category={category}  />
        </div>
    )
}

GiftExpertApp.defaultProps = {
    category: 'dragon ball',
}

export default GiftExpertApp
