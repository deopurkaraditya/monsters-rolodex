import React from 'react';
import {Card} from '../card/card.component'
import './card-list.style.css'
export const CardList = (props) => {
    console.log(props);
    return <div className='card-list'>
        {props.monsters.map(eachmonster => (
            <Card key={eachmonster.id}  eachmonster ={eachmonster} />
        ))}
    </div>;
}