import React from 'react';
import {useScopedCompTreble} from '../Store';

export default function ListTwo(){
    const [{listTwo}] = useScopedCompTreble();
    return(
        <>
            <h5>List Two</h5>
            {
                listTwo.map((item, index) => {
                    return(
                        <p key={index}>{item}</p>
                    )
                })
            }
        </>
    )
}