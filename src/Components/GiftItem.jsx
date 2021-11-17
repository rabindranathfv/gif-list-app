import React from 'react'

export const GiftItem = ({ gift }) => {

    return (
        <div className="animate__animated animate__bounce grid-item" key={gift.id} >
            <p > {gift.title}</p>
            <img className='grid-image' src={gift.url} alt={gift.title} />
        </div>
    )
}
