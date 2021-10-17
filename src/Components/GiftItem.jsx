import React from 'react'

export const GiftItem = ({ gift }) => {

    return (
        <div key={gift.id} className='grid-item'>
            <p > {gift.title}</p>
            <img className='grid-image' src={gift.url} alt={gift.title} />
        </div>
    )
}
