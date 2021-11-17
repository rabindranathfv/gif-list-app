import { useState, useEffect } from "react"
import { getGifts } from '../helpers/GetGifts'

export const useFetchGift = ( category ) => {

    const [ state, setState] = useState({
        gifts: [],
        loading: true
    })

    useEffect(() => {
        getGifts( category )
            .then( (gif) => {
                setState({
                    gifts: gif,
                    loading: false
                } );
            })
    }, [ category ]);
    return state;
}