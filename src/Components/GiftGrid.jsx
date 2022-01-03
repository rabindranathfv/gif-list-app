import React from 'react';
import PropTypes from 'prop-types';

import { GiftItem } from './GiftItem';
import { useFetchGift } from '../hooks/useFetchGift';

export const GiftGrid = props => {

    const { category } = props;
    const { loading, gifts } = useFetchGift(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce"> { category } </h3>
             { loading && <p>loading...</p>}
            <div className='grid-gift'>
            
                {
                    gifts.length>0 && gifts.map( (gif) => {
                        return <GiftItem key={gif.id} gift={gif} /> 
                    })
                }
            </div>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
