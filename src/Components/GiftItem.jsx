import React from 'react'

export const GiftItem = ({ gift }) => {

    return (
        <div>
            <ul>
                {
                    <li key= {gift.id}> {gift.title} </li>
                }
            </ul>       
            <img src={gift.url} alt={gift.title} />
        </div>
    )
}
