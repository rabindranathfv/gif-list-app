import React, { useState } from 'react';

export const ListGift = (props) => {

    const { gifts } = props;
    const [categories, setCategories] = useState(gifts);
    return (
        <div>
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
