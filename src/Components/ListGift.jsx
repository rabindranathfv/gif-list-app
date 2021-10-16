import React, { useState } from 'react';
import PropTypes, { number, string } from 'prop-types'
import { GiftGrid  } from './GiftGrid';

export const ListGift = (props) => {

    const { gifts } = props;
    return (
        <div>
            <ul>
            {
                gifts.map( cat => {
                    return <GiftGrid key={ cat.id } category={cat} searchCategory={'dragon ball'}/>
                })
            }
            </ul>
        </div>
    )
}

ListGift.propTypes = {
    gifts: PropTypes.arrayOf(PropTypes.shape({
        id: number,
        name: string
    })).isRequired
}
