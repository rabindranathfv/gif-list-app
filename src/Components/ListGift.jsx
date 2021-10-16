import React, { useState } from 'react';
import { GiftGrid  } from './GiftGrid';

export const ListGift = (props) => {

    const { gifts } = props;
    return (
        <div>
            <ul>
            {
                gifts.map( cat => {
                    return <GiftGrid key={ cat.id } category={cat} />
                })
            }
            </ul>
        </div>
    )
}
