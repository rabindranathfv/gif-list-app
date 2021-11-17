import React from 'react'
import PropTypes from 'prop-types';

import { GiftItem } from './GiftItem';
import { useFetchGift } from '../hooks/useFetchGift';


export const GiftGrid = props => {

    const { category } = props;
    const { loading, gifts } = useFetchGift(category);
    console.log(gifts, loading, category);

    

    return (
        <>

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
