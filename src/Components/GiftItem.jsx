import React from 'react'
import PropTypes from 'prop-types';

export const GiftItem = ({ gift }) => {

    return (
        <div className="animate__animated animate__bounce grid-item" key={gift.id} >
            <p > {gift.title}</p>
            <img className='grid-image' src={gift.url} alt={gift.title} />
        </div>
    )
}

GiftItem.propTypes = {
    gift: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
}