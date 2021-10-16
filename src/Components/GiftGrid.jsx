import React from 'react'
import PropTypes from 'prop-types'

export const GiftGrid = props => {
    const { category } = props;
    return (
        <div>
            <ul>
                <li> {category.name} </li>
            </ul>
        </div>
    )
}

GiftGrid.propTypes = {

}
