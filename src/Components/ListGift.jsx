import React, { useState } from 'react';

export const ListGift = (props) => {

    const { gifts } = props;
    const [categories, setCategories] = useState(gifts);

    const addHandler = () => {
        setCategories([ { id: Math.floor(Math.random()*1000 ) + 1, name: 'newItem'}, ...categories]);
    }

    return (
        <div>
            <button onClick={addHandler}> add item</button>
            <ul>
            {
                categories.map( cat => {
                    return <li key={cat.id}> {cat.name} </li>
                })
            }
            </ul>
        </div>
    )
}
