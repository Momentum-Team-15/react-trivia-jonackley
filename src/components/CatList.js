import React from 'react'

let triviaUrl = 'https://opentdb.com/api.php?amount=10&category='

export const Categories = ({ topic, category, setUrl, setSingleCat }) => {

    return (
        <>
            <button onClick={() => { setUrl(triviaUrl + topic); setSingleCat(topic) }}>{category}</button>
        </>
    )
}