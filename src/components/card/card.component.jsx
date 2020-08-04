import React from 'react';

import './card.style.css'

export const Card = (props) => (
    <div className='card-container'>   
    <img src={`https://robohash.org/${props.eachmonster.id}?set=set2&size=180x190`} alt="monster"/>
        <h2> { props.eachmonster.name } </h2>
        <p> { props.eachmonster.email } </p>
    </div>
)