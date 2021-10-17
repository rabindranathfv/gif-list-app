import React from 'react'

export const GiftItem = ({ gift }) => {

    return (
        <div key={gift.id} className='card'>
            <p > {gift.title}</p>  
            <img src={gift.url} alt={gift.title} />
        </div>
    )
}
