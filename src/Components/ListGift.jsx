import React, { useState } from 'react';

export const ListGift = (props) => {

    const { gifts } = props;
    return (
        <div>
            <ul>
            {
                gifts.map( cat => {
                    return <li key={cat.id}> {cat.name} </li>
                })
            }
            </ul>
        </div>
    )
}
